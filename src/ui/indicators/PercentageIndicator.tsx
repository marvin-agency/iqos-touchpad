import {
  IComponentBaseProps,
  Maybe,
  TwinStyle,
  VariantProps,
} from "../../types";

import { Typography } from "../Typograhy";
/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

type IPercentageIndicatorProps = IComponentBaseProps &
  VariantProps & {
    value: number;
    bodyStyle?: Maybe<TwinStyle>;
  };

export const PercentageIndicator = (props: IPercentageIndicatorProps) => {
  const rounded = Math.ceil(props.value);
  const value = Math.min(Math.max(0, rounded), 100);
  return (
    <div css={[tw`flex flex-row items-center gap-x-2`, props.containerCss]}>
      {/*
       STATEMENT: Why is width hardcoded?
       Width is hardcoded to prevent increase in size when the percentage moves to 3 digit number.
       Without hardcoded width whole component would "jump" few pixels right.
       */}
      <Typography.BodyLarge containerCss={[tw`w-14`]}>
        {value}%
      </Typography.BodyLarge>
      <div
        css={[
          // STATEMENT: Why do we use min-width?
          // It ensures that this component will at least render something in unconstraint environment.
          // Example of such environment would be using the flex layout without specifying the width of the flex child.
          // This component by default takes as much width as possible(w-full).
          tw`w-full bg-gray-300 rounded-md h-1.5 min-w-24`,
          props.bodyStyle,
        ]}
      >
        <div
          css={[tw`bg-primary-100`]}
          tw="h-1.5 rounded-md transform duration-200"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};
