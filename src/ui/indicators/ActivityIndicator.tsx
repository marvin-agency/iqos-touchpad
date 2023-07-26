/** @jsxImportSource @emotion/react */
import "twin.macro";

import { IComponentBaseProps, VariantProps } from "../../types";

import tw from "twin.macro";

type IActivityIndicatorProps = IComponentBaseProps & VariantProps;

export const ActivityIndicator = (props: IActivityIndicatorProps) => {
  return (
    <div
      css={[
        tw`border-primary-100`,
        tw`border-3 border-t-transparent w-12 h-12 border-solid rounded-full animate-spin`,
        props.containerCss,
      ]}
    />
  );
};
