import { useCollapse } from "react-collapsed";
import { PropsWithChildren } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import { Typography } from "./Typograhy";
import tw from "twin.macro";
import { VariantProps } from "../types";

export interface ICollapsibleProps {
  headerTitle: string;
  className?: string;
  headerTextCenter?: boolean;
  openByDefault?: boolean;
}
export const Collapsible = ({
  headerTitle = "",
  children,
  className,
  variant = "dark",
  headerTextCenter = false,
  openByDefault = false,
}: PropsWithChildren<ICollapsibleProps & VariantProps>) => {
  const { getCollapseProps, getToggleProps, setExpanded, isExpanded } =
    useCollapse({ defaultExpanded: openByDefault });
  const isLight = variant === "light";
  function handleOnClick() {
    // Do more stuff with the click event!
    // Or, set isExpanded conditionally
    setExpanded(!isExpanded);
  }

  return (
    <div className={className}>
      <div
        className={`relative flex w-full cursor-pointer items-center border-b-1 py-2 ${
          isLight ? "border-b-white" : "border-b-secondary"
        } ${headerTextCenter && "text-center"}`}
        {...getToggleProps({ onClick: handleOnClick })}
      >
        <Typography.H4
          containerCss={[
            tw`text-secondary font-400 w-full`,
            isLight && tw`text-white`,
          ]}
        >
          {headerTitle}
        </Typography.H4>
        {isExpanded ? (
          <FiChevronUp
            className={`mr-4 h-7 w-5 ${
              isLight ? "text-white" : "text-secondary"
            }`}
          />
        ) : (
          <FiChevronDown
            className={`mr-4 h-7 w-5 ${
              isLight ? "text-white" : "text-secondary"
            }`}
          />
        )}
      </div>
      <div {...getCollapseProps()} className="w-full">
        {children}
      </div>
    </div>
  );
};
