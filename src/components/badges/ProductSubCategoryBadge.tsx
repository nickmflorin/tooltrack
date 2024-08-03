import type { ProductSubCategory } from "~/database/model";
import { ProductSubCategories } from "~/database/model";

import { classNames } from "~/components/types";

import { Badge, type BadgeProps } from "./Badge";

export interface ProductSubCategoryBadgeProps extends Omit<BadgeProps, "children"> {
  readonly category: ProductSubCategory;
}

export const ProductSubCategoryBadge = ({ category, ...props }: ProductSubCategoryBadgeProps) => (
  <Badge
    {...props}
    className={classNames(
      ProductSubCategories.getModel(category).badgeBgColorClassName,
      ProductSubCategories.getModel(category).badgeTextColorClassName,
      props.className,
    )}
  >
    {ProductSubCategories.getModel(category).label}
  </Badge>
);