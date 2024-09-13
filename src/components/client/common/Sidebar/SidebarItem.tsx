import { ListItem, ListItemButton, Tooltip, Typography } from "@mui/material";
import { PRIMARY } from "colors";
import Link from "next/link";

interface SidebarItemProps {
  text: string;
  active?: boolean;
  description?: string;
  href: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function SidebarItem(props: SidebarItemProps) {
  const { text, active, description, href, onClick, icon } = props;

  return (
    <Link href={href} onClick={onClick}>
      <Tooltip title={description} placement="right" arrow>
        <ListItem
          sx={{
            height: 42,
          }}
        >
          <ListItemButton
            sx={{
              py: 0.5,
              borderRadius: 5,
              backgroundColor: active ? "white" : "transparent",
              color: active ? PRIMARY.main : "white",
              "&:hover": {
                backgroundColor: active ? "white" : "rgba(255, 255, 255, 0.15)",
              },
            }}
          >
            {icon}
            <Typography
              fontWeight={active ? 600 : "normal"}
              fontSize={active ? "1.1rem" : "0.9rem"}
              ml={icon ? 1 : 0}
            >
              {text}
            </Typography>
          </ListItemButton>
        </ListItem>
      </Tooltip>
    </Link>
  );
}
