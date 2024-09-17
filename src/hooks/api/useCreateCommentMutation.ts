import { useMutation } from "react-query";

interface CreateCommentMutationParams {
  onSuccess: () => void;
}

interface CreateParams {
  activityId: string;
  comment: string;
}

export const useCreateCommentMutation = (
  params: CreateCommentMutationParams
) => {
  const { onSuccess } = params;
  return useMutation({
    onSuccess,
    mutationFn: async (params: CreateParams) => {
      const { activityId, comment } = params;
      const response = await fetch(`/api/activities/${activityId}/comments`, {
        method: "POST",
        body: JSON.stringify({ comment }),
      });
      return response.json();
    },
  });
};
