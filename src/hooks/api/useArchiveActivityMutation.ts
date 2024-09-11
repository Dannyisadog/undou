import { useMutation } from "react-query";

interface ArchiveActivityMutation {
  onSuccess: () => void;
}

export const useArchiveActivityMutation = (params: ArchiveActivityMutation) => {
  const { onSuccess } = params;
  return useMutation({
    onSuccess,
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/activities/${id}`, {
        method: "DELETE",
      });
      return response.json();
    },
  });
};
