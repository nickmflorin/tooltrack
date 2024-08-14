import type { ReactNode } from "react";

import Skeleton from "@mui/material/Skeleton";
import { isFragment } from "react-is";

import { classNames, type ComponentProps } from "~/components/types";
import { Title, Description } from "~/components/typography";

export interface ModuleHeaderProps extends ComponentProps {
  readonly title?: ReactNode;
  readonly children?: ReactNode;
  readonly isLoading?: boolean;
  readonly avatar?: JSX.Element;
}

export const ModuleHeader = ({
  title,
  children,
  avatar,
  isLoading = false,
  ...props
}: ModuleHeaderProps) => (
  <div {...props} className={classNames("flex flex-row gap-4", props.className)}>
    {avatar}
    <div className={classNames("flex flex-col gap-1", { "pt-2": avatar !== undefined })}>
      {title &&
        !isFragment(title) &&
        (isLoading ? (
          <Skeleton variant="text" />
        ) : typeof title === "string" ? (
          <Title component="h5">{title}</Title>
        ) : (
          title
        ))}
      {children &&
        !isFragment(children) &&
        (isLoading ? (
          <Skeleton variant="text" />
        ) : typeof children === "string" ? (
          <Description>{children}</Description>
        ) : (
          children
        ))}
    </div>
  </div>
);
