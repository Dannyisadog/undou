import { Box, Dialog, DialogActions, DialogContent } from "@mui/material";
import Button from "./Button";
import Image from "next/image";
import multiavatar from "@multiavatar/multiavatar/esm";
import { useRef, useState } from "react";
import { useGlobalStore } from "providers/StoreProvider";
import { CustomSession } from "auth";
import { getSession } from "next-auth/react";

interface UploadAvatarDialogProps {
  open: boolean;
  onClose: () => void;
}

export const UploadAvatarDialog = (props: UploadAvatarDialogProps) => {
  const { open, onClose } = props;

  const { session, updateSession } = useGlobalStore((state) => state);
  const user = session?.authUser;
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const imageRef = useRef(null);
  const [image, setImage] = useState<string>("");

  if (!user) {
    return null;
  }

  const close = () => {
    onClose();
    setTimeout(() => {
      setImage("");
      imageRef.current = null;
    }, 500);
  };

  const upload = async () => {
    if (!imageRef.current) {
      return;
    }

    const file = (imageRef.current as any).files[0];

    if (!file) {
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("/api/users/avatar", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setImage(data.url);

    setUploading(false);
  };

  const updateUserAvatar = async () => {
    setSaving(true);
    await fetch("/api/users/avatar", {
      method: "PUT",
      body: JSON.stringify({
        image,
      }),
    });
    setSaving(false);
    const newSession = await getSession();
    updateSession(newSession as CustomSession);
    close();
  };

  return (
    <Dialog
      open={open}
      onClose={close}
      sx={{
        p: 2,
      }}
    >
      {!image && (
        <>
          <DialogContent>
            {user.image && (
              <Image
                src={user.image}
                width={240}
                height={240}
                alt={`Avatar for ${user.name}`}
                style={{
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            )}
            {!user.image && (
              <Box
                dangerouslySetInnerHTML={{
                  __html: multiavatar(user.email as string),
                }}
                width={240}
                height={240}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                height: 40,
              }}
              onClick={close}
            >
              取消
            </Button>
            <Button
              variant="contained"
              component="label"
              autoFocus
              isLoading={uploading}
              sx={{
                color: "white",
              }}
            >
              上傳
              <input ref={imageRef} type="file" hidden onChange={upload} />
            </Button>
          </DialogActions>
        </>
      )}
      {image && (
        <>
          <DialogContent>
            <Image
              src={image}
              alt="New Avatar"
              width={240}
              height={240}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                height: 40,
              }}
              onClick={close}
            >
              取消
            </Button>
            <Button
              variant="outlined"
              component="label"
              autoFocus
              isLoading={uploading}
              sx={{
                height: 40,
              }}
            >
              重新選擇
              <input ref={imageRef} type="file" hidden onChange={upload} />
            </Button>
            <Button
              variant="contained"
              onClick={updateUserAvatar}
              isLoading={saving}
              sx={{
                height: 40,
                color: "white",
              }}
            >
              儲存
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
};
