"use client";

import {
  Dialog,
  DialogActions,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { redirect } from "next/navigation";
import { useGlobalStore } from "providers/StoreProvider";
import Title from "../Title";
import UserAvatar from "../UserAvatar";
import SignoutButton from "../SignoutButton";
import { useEffect, useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import { useDisclosure } from "hooks/useDisclosure";
import EditIcon from "@mui/icons-material/Edit";
import { useModifyUserNameMutation } from "hooks/api/useModifyUserNameMutation";
import { getSession } from "next-auth/react";
import { CustomSession } from "auth";
import { DARK_BLUE } from "colors";

export default function Profile() {
  const { session, updateSession } = useGlobalStore((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, setNewName] = useState("");

  useEffect(() => {
    if (session) {
      setNewName(session.authUser.name);
    }
  }, [session, session?.authUser]);

  if (!session) {
    redirect("/signin");
  }

  const emailVerified = !!session.authUser.emailVerified;
  const modifyUserNameMutation = useModifyUserNameMutation({
    onSuccess: async () => {
      const newSession = (await getSession()) as CustomSession;
      updateSession(newSession);
      onClose();
    },
  });

  const modifyName = async () => {
    modifyUserNameMutation.mutate(newName);
  };

  return (
    <Stack width={400} spacing={2} px={4}>
      <Title text="基本資訊" hasGoBack={false} />
      <UserAvatar />
      <Stack direction="row" spacing={2}>
        <Typography textAlign="center">帳號:</Typography>
        <Typography textAlign="center">{session.authUser.email}</Typography>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography textAlign="center">使用者名稱:</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography textAlign="center">{session.authUser.name}</Typography>
          <IconButton onClick={onOpen}>
            <EditIcon
              sx={{
                color: DARK_BLUE,
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Typography textAlign="center">狀態:</Typography>
        <Typography textAlign="center">
          {emailVerified ? "已驗證" : "尚未驗證"}
        </Typography>
      </Stack>
      <SignoutButton />
      <Dialog open={isOpen}>
        <Stack spacing={2} p={2}>
          <TextField
            label="使用者名稱"
            defaultValue={session.authUser.name}
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <DialogActions>
            <Button
              onClick={onClose}
              sx={{
                height: 36,
              }}
            >
              取消
            </Button>
            <Button
              variant="contained"
              disabled={
                newName === session.authUser.name ||
                modifyUserNameMutation.isLoading
              }
              onClick={modifyName}
              isLoading={modifyUserNameMutation.isLoading}
              sx={{
                height: 36,
                color: "white",
              }}
            >
              更新
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </Stack>
  );
}
