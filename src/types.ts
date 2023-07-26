import { ArrayInterpolation, Theme } from "@emotion/react";
import { HTMLAttributes } from "react";

export interface IComponentBaseProps {
  containerCss?: Maybe<TwinStyle>;
}
export type Maybe<K> = K | null | undefined;

export type TwinStyle = ArrayInterpolation<Theme>;

export interface VariantProps {
  variant?: "light" | "dark" | "invert";
}
export type ReactComponent<P> = (
  props: HTMLAttributes<any> & IComponentBaseProps & P
) => JSX.Element;

export type ITaste = "tobacco" | "cooling" | "aromated";

export type IProductName = "terea" | "veeba" | "veev" | "fiit";

export interface ISection {
  hasCollapsible?: boolean;
  hasGoToStart?: boolean;
  taste: ITaste;
}

export interface ITastePack {
  name: string;
  image: string;
  brand?: string;
}
