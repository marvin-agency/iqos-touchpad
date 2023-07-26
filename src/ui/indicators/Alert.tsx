import "twin.macro";

/** @jsxImportSource @emotion/react */
import {
  HiCheckCircle,
  HiExclamation,
  HiExclamationCircle,
  HiInformationCircle,
} from "react-icons/hi";
import { IComponentBaseProps, ReactComponent } from "../../types";

import { Typography } from "../Typograhy";
import tw from "twin.macro";

interface IBaseAlertProps extends IComponentBaseProps {
  text: string;
  icon: ReactComponent<{}>;
}
const BaseAlert = (props: IBaseAlertProps) => {
  const Icon = props.icon;
  return (
    <div
      css={[
        tw`flex flex-row items-center gap-x-4 py-3 px-3 rounded-md`,
        props.containerCss,
      ]}
    >
      <div>
        <Icon css={[tw`w-7 h-7 text-white`]} />
      </div>
      <Typography.BodyMedium containerCss={[tw`text-white`]}>
        {props.text}
      </Typography.BodyMedium>
    </div>
  );
};
export type IAlertProps = Omit<IBaseAlertProps, "icon">;
export const Alert = {
  Error: (props: IAlertProps) => (
    <BaseAlert
      {...props}
      icon={HiExclamationCircle}
      containerCss={[tw`bg-error`, props.containerCss]}
    />
  ),
  Warning: (props: IAlertProps) => (
    <BaseAlert
      {...props}
      icon={HiExclamation}
      containerCss={[tw`bg-warning`, props.containerCss]}
    />
  ),
  Info: (props: IAlertProps) => (
    <BaseAlert
      {...props}
      icon={HiInformationCircle}
      containerCss={[tw`bg-info`, props.containerCss]}
    />
  ),
  Success: (props: IAlertProps) => (
    <BaseAlert
      {...props}
      icon={HiCheckCircle}
      containerCss={[tw`bg-success`, props.containerCss]}
    />
  ),
};
