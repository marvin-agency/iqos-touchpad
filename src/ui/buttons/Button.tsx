import {
  IComponentBaseProps,
  Maybe,
  ReactComponent,
  TwinStyle,
  VariantProps,
} from "../../types";
/** @jsxImportSource @emotion/react */
import React, { MouseEventHandler, PropsWithChildren, useState } from "react";

import tw from "twin.macro";
import { Typography } from "../Typograhy";

type IButtonLoaderProps = IComponentBaseProps;
const ButtonLoader = (props: IButtonLoaderProps) => {
  return (
    <div
      css={[
        tw`w-5 h-5 border-2 border-t-transparent border-solid rounded-full animate-spin`,
        props.containerCss,
      ]}
    />
  );
};

interface IBaseButtonProps extends IComponentBaseProps {
  type?: "button" | "submit" | "reset" | undefined;
  allowLoader?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  lead?: ReactComponent<{}>;
  trail?: ReactComponent<{}>;
  loader?: ReactComponent<{}>;
  loaderCss?: Maybe<TwinStyle>;
  leadCss?: Maybe<TwinStyle>;
  trailCss?: Maybe<TwinStyle>;
  textCss?: Maybe<TwinStyle>;
}

const millisecondsBetweenClicks = 300;

const BaseButton: React.FC<PropsWithChildren<IBaseButtonProps>> = (props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const Lead = props.lead;
  const Trail = props.trail;
  const Loader = props.loader ?? ButtonLoader;

  // STATEMENT: Why is props.onClick wrapped in this logic?
  // In this template all buttons are subjected to the timeout period
  // of 300 ms between clicks. If you don't need such behavior(you probably still need it,
  // please double check with senior) you can simply remove this function or expose another prop to
  // turn on/off this behaviour.
  const onClick = async (e: any) => {
    try {
      if (!loading) {
        setLoading(true);
        await (props.onClick && props.onClick(e));
        setTimeout(() => setLoading(false), millisecondsBetweenClicks);
      }
    } catch (e) {
      console.error(e);
      setTimeout(() => setLoading(false), millisecondsBetweenClicks);
      throw e;
    }
  };

  const leadCss = [tw`mr-3 -ml-6 w-6 h-6 mt-1 transition-all`, props.leadCss];
  const trailCss = [tw`-mr-6 ml-3 w-6 h-6 mt-1 transition-all`, props.trailCss];

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled ?? false}
      className="group"
      css={[
        // STATEMENT: Buttons have transparent border.
        // This is done to avoid height change when the border is actually visible in other states(hover, disabled, focused)
        // Alternatives are:
        // 1) use outline instead of border - not the same flexibility and power of the border property.
        // 2) hardcode height on this button - you can guess why this is discouraged
        // 3) subtract button padding when the border is visible - adds one more layer of complexity in this project
        tw`border-1 border-transparent rounded-full cursor-pointer max-h-[83px]`,
        // STATEMENT: Hardcoded min-width is likely to change in each project.
        // This is done to avoid width decrease when the button is in the loading state.
        // If necessary, please change it to your liking.
        tw`flex flex-row items-center justify-center transition-all py-7 px-12 min-w-40 xl:(py-7 px-12 min-w-64) `,
        props.disabled && tw`cursor-not-allowed`,
        props.containerCss,
      ]}
      onClick={onClick}
    >
      {props.allowLoader && loading ? (
        <Loader containerCss={[props.loaderCss]} />
      ) : (
        <div className="flex items-center transition-all">
          {Lead && <Lead css={leadCss} containerCss={leadCss} />}
          <Typography.Button containerCss={[props.textCss]}>
            {props.children}
          </Typography.Button>
          {Trail && <Trail css={trailCss} containerCss={trailCss} />}
        </div>
      )}
    </button>
  );
};

export type IButtonProps = IBaseButtonProps & VariantProps;

export const Button = {
  Contained: (props: PropsWithChildren<IButtonProps>) => {
    const isDark = props.variant === "dark";
    const isInvert = props.variant === "invert";
    return (
      <BaseButton
        {...props}
        loaderCss={[tw`border-white border-t-transparent`, props.loaderCss]}
        leadCss={[props.disabled && tw`text-gray`, props.leadCss]}
        trailCss={[props.disabled && tw`text-gray`, props.trailCss]}
        textCss={[
          tw`text-secondary`,
          isDark && tw`text-white`,
          tw`group-hover:(text-secondary)`,
          isInvert && tw`group-hover:(text-white)`,
          props.disabled && tw`text-gray`,
          props.textCss,
        ]}
        containerCss={[
          tw`bg-white`,
          isDark && tw`bg-secondary hover:(text-secondary)`,
          tw`hover:(bg-turqoise)`,
          isInvert && tw`hover:(bg-secondary)`,
          tw`disabled:(bg-gray-200)`,
          props.containerCss,
        ]}
      />
    );
  },
  Outlined: (props: PropsWithChildren<IButtonProps>) => {
    const isDark = props.variant === "dark";

    return (
      <BaseButton
        {...props}
        loaderCss={[props.loaderCss]}
        leadCss={[
          tw`text-white`,
          tw`group-hover:(text-secondary)`,
          props.disabled && tw`text-gray`,
          props.leadCss,
        ]}
        trailCss={[
          tw`text-white`,
          tw`group-hover:(text-secondary)`,
          props.disabled && tw`text-gray`,
          props.trailCss,
        ]}
        textCss={[
          tw`text-white`,
          tw`group-hover:(text-secondary)`,
          isDark && tw`text-secondary`,
          props.disabled && tw`text-gray`,
          props.textCss,
        ]}
        containerCss={[
          tw`bg-transparent border-white`,
          tw`hover:(bg-white border-white text-secondary)`,
          isDark && tw`border-secondary hover:(border-white)`,
          tw`disabled:(border-gray-200)`,
          tw`disabled:hover:(bg-gray-50)`,
          props.containerCss,
        ]}
      />
    );
  },
  Text: (props: PropsWithChildren<IButtonProps>) => {
    return (
      <BaseButton
        {...props}
        loaderCss={[tw`border-primary border-t-transparent`, props.loaderCss]}
        leadCss={[
          tw`text-primary`,
          props.leadCss,
          props.disabled && tw`text-gray-200`,
        ]}
        trailCss={[
          tw`text-primary`,
          props.leadCss,
          props.disabled && tw`text-gray-200`,
        ]}
        textCss={[
          tw`text-primary`,
          props.textCss,
          props.disabled && tw`text-gray-200`,
        ]}
        containerCss={[
          tw`py-1 px-0 hover:(border-transparent bg-primary rounded-md)`,
          tw`hover:(disabled:(bg-transparent))`,
          tw`focus-visible:(bg-white ring-0 outline-none)`,
          props.containerCss,
        ]}
      />
    );
  },
};
