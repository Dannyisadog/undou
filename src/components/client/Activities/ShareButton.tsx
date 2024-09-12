import { Stack, Typography } from "@mui/material";
import Button from "../Button";
import LinkIcon from "@mui/icons-material/Link";
import CheckIcon from "@mui/icons-material/Check";
import { DARK_BLUE } from "colors";
import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: copied ? "#095bdb" : DARK_BLUE,
        borderRadius: 100,
        color: "white",
        ":hover": {
          backgroundColor: copied ? "#095bdb" : DARK_BLUE,
        },
      }}
      onClick={async () => {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.5}>
        {!copied && (
          <>
            <LinkIcon fontSize="small" />
            <Typography variant="body2">分享活動連結</Typography>
          </>
        )}
        {copied && (
          <>
            <CheckIcon fontSize="small" />
            <Typography variant="body2">已複製連結</Typography>
          </>
        )}
      </Stack>
    </Button>
  );
}
