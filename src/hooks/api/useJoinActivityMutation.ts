import { useMutation } from "react-query";

interface JoinActivityMutation {
  onSuccess?: () => void;
}

export const useJoinActivityMutation = (params: JoinActivityMutation) => {
  const { onSuccess } = params;
  return useMutation({
    onSuccess,
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/activities/join/${id}`, {
        method: "POST",
      });
      return response.json();
    },
  });
};
