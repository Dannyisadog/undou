"use client";

import { alpha, Avatar, IconButton, Stack, Typography } from "@mui/material";
import { useGlobalStore } from "providers/StoreProvider";
import TextField from "../TextField";
import { useState } from "react";
import Button from "../Button";
import {
  CommentWithCreatorAndActivity,
  useComments,
} from "hooks/api/useComments";
import dayjs from "dayjs";
import { DARK_BLUE, PRIMARY } from "colors";
import { theme } from "theme";
import { useScreenSize } from "hooks/useScreenSize";
import { useCreateCommentMutation } from "hooks/api/useCreateCommentMutation";
import RefreshIcon from "@mui/icons-material/Refresh";
import NoData from "../common/NoData";

interface CommentItemProps {
  comment: CommentWithCreatorAndActivity;
}

const CommentItem = (props: CommentItemProps) => {
  const { comment } = props;

  const isMyComment = useGlobalStore((state) => {
    return state.session?.authUser.id === comment.creatorId;
  });

  const { isMobileSize } = useScreenSize();

  return (
    <Stack
      sx={{
        borderRadius: isMyComment ? "16px 16px 0 16px" : "16px 16px 16px 0",
        alignSelf: isMyComment ? "flex-end" : "flex-start",
        p: 1.5,
        width: isMobileSize ? "90%" : "80%",
        backgroundColor: isMyComment
          ? alpha(theme.palette.success.main, 0.2)
          : alpha(PRIMARY.main, 0.1),
      }}
    >
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Avatar
          src={comment.creator.image as string}
          sx={{
            width: 20,
            height: 20,
          }}
        />
        <Typography variant="body2" fontWeight="bold">
          {comment.creator.name}
        </Typography>
      </Stack>
      <Typography variant="body1" fontWeight="bold" mt={1.5}>
        {comment.content}
      </Typography>
      <Typography variant="body2">
        {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm")}
      </Typography>
    </Stack>
  );
};

interface CommentBlockProps {
  activityId: string;
}

export default function CommentBlock(props: CommentBlockProps) {
  const { activityId } = props;

  const [newComment, setNewComment] = useState("");

  const { session } = useGlobalStore((state) => state);

  const {
    data: comments,
    isLoading,
    refetch: refetchComments,
  } = useComments(activityId);

  const createCommentMutation = useCreateCommentMutation({
    onSuccess: () => {
      refetchComments();
      setNewComment("");
    },
  });

  const handleCreateComment = () => {
    createCommentMutation.mutate({
      activityId,
      comment: newComment,
    });
  };

  return (
    <Stack spacing={2} width="100%">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">討論區</Typography>
        <IconButton
          onClick={() => {
            refetchComments;
          }}
        >
          <RefreshIcon
            sx={{
              color: DARK_BLUE,
            }}
          />
        </IconButton>
      </Stack>
      <Stack spacing={2}>
        {comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
        {comments?.length === 0 && (
          <Typography variant="body1" fontWeight="bold" color="primary">
            目前沒有任何留言
          </Typography>
        )}
      </Stack>
      {session && (
        <Stack spacing={1}>
          <Typography fontWeight="bold" variant="body1">
            提出問題或意見
          </Typography>
          <TextField
            rows={3}
            multiline
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
          <Stack alignItems="end">
            <Button
              variant="contained"
              disabled={!newComment.trim() || createCommentMutation.isLoading}
              isLoading={createCommentMutation.isLoading}
              sx={{
                width: 100,
                height: 36,
              }}
              onClick={handleCreateComment}
            >
              <Typography variant="body1" fontWeight="bold" color="white">
                發布留言
              </Typography>
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
