import { type ApiUser } from "~/database/model";

import { type DataTableColumnProperties } from "~/components/tables";
import { Text } from "~/components/typography";
import { DateTimeText } from "~/components/typography/DateTimeText";
import { type UsersTableColumnId } from "~/features/users";
import { UserTile } from "~/features/users/components/UserTile";

export const UsersTableColumnProperties: DataTableColumnProperties<
  ApiUser<["notificationsCount", "subscriptionsCount"]>,
  UsersTableColumnId
> = {
  name: {
    cellRenderer(datum) {
      return <UserTile user={datum} />;
    },
  },
  createdAt: {
    cellRenderer(datum) {
      return (
        <Text fontWeight="regular" fontSize="sm" className="text-description">
          Created on{" "}
          <DateTimeText
            className="text-body"
            fontWeight="medium"
            component="span"
            value={datum.createdAt}
          />
        </Text>
      );
    },
  },
  updatedAt: {
    cellRenderer(datum) {
      return (
        <Text fontWeight="regular" fontSize="sm" className="text-description">
          Last updated on{" "}
          <DateTimeText
            className="text-body"
            fontWeight="medium"
            component="span"
            value={datum.updatedAt}
          />
        </Text>
      );
    },
  },
};
