import { Drawer as MuiDrawer, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function Drawer(props: DrawerProps) {
  const { open, onClose } = props;

  return (
    <MuiDrawer open={open} onClose={onClose}>
      <Sidebar closeDrawer={onClose} />
    </MuiDrawer>
  );
}
