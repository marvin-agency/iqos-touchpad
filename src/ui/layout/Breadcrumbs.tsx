import "twin.macro";

import { HiChevronRight } from "react-icons/hi";
import { IComponentBaseProps } from "../../types";
import { Link } from "react-router-dom";
import React from "react";
import { Typography } from "../Typograhy";
import tw from "twin.macro";

/** @jsxImportSource @emotion/react */

interface IBreadCrumbItem {
  label: string;
  url?: string;
}

export interface IBreadCrumbsProps extends IComponentBaseProps {
  items: IBreadCrumbItem[];
}

export const Breadcrumbs = (props: IBreadCrumbsProps) => {
  return (
    <div css={[tw`flex flex-row items-center`, props.containerCss]}>
      {props.items.map((item, i) => {
        const text = (
          <Typography.BodySmall
            containerCss={[item.url ? tw`text-gray` : tw`text-gray-200`]}
          >
            {item.label}
          </Typography.BodySmall>
        );
        const isLast = props.items.length - 1 === i;
        const next = !isLast ? props.items[i + 1] : null;
        return (
          <React.Fragment key={i}>
            {item.url ? <Link to={item.url!}>{text}</Link> : text}
            {!isLast && (
              <div tw="px-1">
                <HiChevronRight
                  css={[
                    tw`h-6 w-6`,
                    next?.url ? tw`text-gray` : tw`text-gray-200`,
                  ]}
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
