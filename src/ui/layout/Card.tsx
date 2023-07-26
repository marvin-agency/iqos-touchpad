/** @jsxImportSource @emotion/react */

import { IComponentBaseProps } from "../../types";
import { PropsWithChildren } from "react";
import tw from "twin.macro";

type IBaseCardProps = IComponentBaseProps;

const BaseCard = (props: PropsWithChildren<IBaseCardProps>) => {
  return (
    <div css={[tw`p-4 rounded-sm bg-white`, props.containerCss]}>
      {props.children}
    </div>
  );
};

export type ICardProps = IBaseCardProps;

export const Card = {
  Elevated: (props: PropsWithChildren<ICardProps>) => {
    return (
      <BaseCard containerCss={[tw`shadow-card`, props.containerCss]}>
        {props.children}
      </BaseCard>
    );
  },
  Outlined: (props: PropsWithChildren<ICardProps>) => {
    return (
      <BaseCard
        containerCss={[tw`border-1 border-gray-100`, props.containerCss]}
      >
        {props.children}
      </BaseCard>
    );
  },
};
