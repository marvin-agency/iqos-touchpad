import {
  IComponentBaseProps,
  Maybe,
  ReactComponent,
  TwinStyle,
  VariantProps,
} from "../../types";
/** @jsxImportSource @emotion/react */
import { MouseEventHandler, useState } from "react";

import tw from "twin.macro";
import { IconType } from "react-icons";

interface IBaseIconButtonProps extends IComponentBaseProps {
  icon: IconType | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconCss?: Maybe<TwinStyle>;
}

const BaseIconButton = (props: IBaseIconButtonProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const Icon = props.icon;

  const onClick = async (e: any) => {
    try {
      if (!loading) {
        setLoading(true);
        await (props.onClick && props.onClick(e));
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const iconCss = [tw`w-4 h-4`, props.iconCss];

  return (
    <button
      type="button"
      disabled={props.disabled ?? false}
      css={[
        // STATEMENT: Buttons have transparent border.
        // This is done to avoid height change when the border is actually visible in other states(hover, disabled, focused)
        // Alternatives are:
        // 1) use outline instead of border - not the same flexibility and power of the border property.
        // 2) hardcode height on this button - you can guess why this is discouraged
        // 3) subtract button padding when the border is visible - adds one more layer of complexity in this project
        tw`border-2 border-transparent items-center rounded-full`,
        props.containerCss,
      ]}
      onClick={onClick}
    >
      {/*
        STATEMENT: It seems apsurd to map same style on two different properties
        Icon is React component. It could be our component(accept containerCss)
        or they it could be third-part component(accepts className and style).
      */}
      <Icon css={iconCss} />
    </button>
  );
};

export type IIconButtonProps = IBaseIconButtonProps & VariantProps;

export const IconButton = {
  Contained: (props: IIconButtonProps) => {
    return (
      <BaseIconButton
        {...props}
        iconCss={[
          tw`text-primary-900`,
          props.disabled && tw`text-gray-200`,
          props.iconCss,
        ]}
        containerCss={[
          tw`bg-secondary-100`,
          tw`hover:(bg-secondary-300)`,

          tw`focus-visible:(bg-secondary-300 border-primary border-2 ring-2 ring-primary-400 outline-none)`,
          tw`disabled:(bg-secondary-50)`,
          props.containerCss,
        ]}
      />
    );
  },
  Outlined: (props: IIconButtonProps) => {
    return (
      <BaseIconButton
        {...props}
        iconCss={[
          tw`text-primary-100`,
          props.disabled && tw`text-gray-200`,
          props.iconCss,
        ]}
        containerCss={[
          tw`bg-white border-primary-100`,
          tw`hover:(bg-primary-400 border-primary-100 border-2)`,
          tw`focus-visible:(bg-primary-400 border-primary-100 border-2 ring-2 ring-primary-400 outline-none)`,
          tw`disabled:(bg-gray-400 border-gray-400 border-2)`,
          props.containerCss,
        ]}
      />
    );
  },
  Text: (props: IIconButtonProps) => {
    return (
      <BaseIconButton
        {...props}
        iconCss={[
          tw`text-primary-100`,
          props.disabled && tw`text-gray-200`,
          props.iconCss,
        ]}
        containerCss={[
          tw`hover:(bg-primary-400 disabled:(bg-transparent))`,
          tw`focus-visible:(bg-white border-primary-400 border-2 ring-0 outline-none)`,
          props.containerCss,
        ]}
      />
    );
  },
};
