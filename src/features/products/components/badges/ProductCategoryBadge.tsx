import type { ProductCategory } from "~/database/model";
import { ProductCategories } from "~/database/model";

import { Badge, type BadgeProps } from "~/components/badges/Badge";
import { classNames } from "~/components/types";

export interface ProductCategoryBadgeProps extends Omit<BadgeProps, "children"> {
  readonly category: ProductCategory;
}

export const ProductCategoryBadge = ({ category, ...props }: ProductCategoryBadgeProps) => (
  <Badge
    {...props}
    className={classNames(
      ProductCategories.getModel(category).badgeBgColorClassName,
      ProductCategories.getModel(category).badgeTextColorClassName,
      props.className,
    )}
  >
    {ProductCategories.getModel(category).label}
  </Badge>
);
