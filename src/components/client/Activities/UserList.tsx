"use client";

import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import multiavatar from "@multiavatar/multiavatar/esm";
import { User } from "@prisma/client";

interface UserListProps {
  users: User[];
}

interface UserListItemProps {
  user: User;
}

export const UserListItem = (props: UserListItemProps) => {
  const { user } = props;

  const svgCode = multiavatar(user.email as string);

  return (
    <ListItem
      key={user.id}
      sx={{
        px: 0,
      }}
    >
      <ListItemAvatar>
        {!user.image && (
          <Avatar>
            <Box
              dangerouslySetInnerHTML={{ __html: svgCode }}
              width="100%"
              height="100%"
            />
          </Avatar>
        )}
        {user.image && <Avatar src={user.image} />}
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={user.email} />
    </ListItem>
  );
};

export default function UserList(props: UserListProps) {
  const { users } = props;
  return (
    <List
      sx={{
        mt: "0 !important",
      }}
    >
      {users.map((user) => {
        return <UserListItem key={user.id} user={user} />;
      })}
    </List>
  );
}
