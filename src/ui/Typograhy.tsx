/** @jsxImportSource @emotion/react */

import {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import tw from "twin.macro";
import { IComponentBaseProps, VariantProps } from "../types";

interface IBaseTypographyProps extends IComponentBaseProps {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "label";
  onClick?: MouseEventHandler<any>;
}

const BaseTypography = (props: PropsWithChildren<IBaseTypographyProps>) => {
  const Component = props.element ?? "span";
  return (
    <Component
      // STATEMENT: display: block style is used on span and label tags.
      // Unfortunately by default inline tags don't allow top and bottom margin.
      // Look here for more info: https:///tackoverflow.com/questions/11700985/margin-top-not-working-for-span-element
      // Although we could pick inline-block display, seems that the most UI frameworks render one text per line which
      // leaves us with only one valid option. (display: block).
      css={[
        tw`text-white block font-primary transition-all`,
        props.containerCss,
      ]}
      onClick={props.onClick}
    >
      {props.children}
    </Component>
  );
};

export type ITypographyProps = IBaseTypographyProps;

export type ILinkProps = PropsWithChildren<
  IComponentBaseProps & {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
    target?: HTMLAttributeAnchorTarget | undefined;
  } & VariantProps
>;

export const Typography = {
  H1: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-h1 font-700`, props.containerCss]}
        element={props.element ?? "h1"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  H2: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-h2 font-800`, props.containerCss]}
        element={props.element ?? "h2"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  H3: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-h3 font-700`, props.containerCss]}
        element={props.element ?? "h3"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  H4: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-h4 font-600`, props.containerCss]}
        element={props.element ?? "h4"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  BodyXLarge: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-body-extra-large font-600`, props.containerCss]}
        element={props.element ?? "p"}
      >
        {props.children}
      </BaseTypography>
    );
  },

  BodyLarge: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`font-400 text-body-large`, props.containerCss]}
        element={props.element ?? "p"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  BodyMedium: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-body-medium font-400`, props.containerCss]}
        element={props.element ?? "p"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  BodySmall: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-body-small font-400`, props.containerCss]}
        element={props.element ?? "p"}
      >
        {props.children}
      </BaseTypography>
    );
  },

  MenuButton: (
    props: PropsWithChildren<ITypographyProps & { isSelected?: boolean }>
  ) => {
    return (
      <div
        className="group"
        css={[
          tw`pl-3 pr-3 pt-1 pb-1 mb-5 cursor-pointer`,
          tw`border-l-2 border-transparent hover:(border-primary) transition-all`,
          props.isSelected && tw`border-l-primary`,
        ]}
        onClick={props.onClick}
      >
        <BaseTypography
          {...props}
          onClick={() => {}}
          containerCss={[
            tw`text-body-small font-500 text-gray group-hover:(text-primary)`,
            props.isSelected && tw`font-700 text-primary`,
            props.containerCss,
          ]}
          element={props.element ?? "p"}
        >
          {props.children}
        </BaseTypography>
      </div>
    );
  },
  Button: (props: PropsWithChildren<ITypographyProps>) => {
    return (
      <BaseTypography
        {...props}
        containerCss={[tw`text-button font-normal`, props.containerCss]}
        element={props.element ?? "span"}
      >
        {props.children}
      </BaseTypography>
    );
  },
  Link: (props: ILinkProps) => {
    return (
      <a
        href={props.href}
        css={[
          tw`text-link underline cursor-pointer text-secondary`,
          props.variant === "light" && tw`text-white`,
          props.containerCss,
        ]}
        tabIndex={0}
        role={!props.href ? "button" : undefined}
        target={props.target}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    );
  },
};
