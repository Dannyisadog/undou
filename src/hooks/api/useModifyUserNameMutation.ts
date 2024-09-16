import { useMutation } from "react-query";

interface ModifyUserNameMutation {
  onSuccess?: () => void;
}

export const useModifyUserNameMutation = (params: ModifyUserNameMutation) => {
  const { onSuccess } = params;
  return useMutation({
    onSuccess,
    mutationFn: async (name: string) => {
      const response = await fetch(`/api/me/`, {
        method: "PATCH",
        body: JSON.stringify({ name }),
      });
      return response.json();
    },
  });
};
