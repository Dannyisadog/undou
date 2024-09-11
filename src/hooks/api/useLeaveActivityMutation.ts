import { useMutation } from "react-query";

interface LeaveActivityMutation {
  onSuccess?: () => void;
}

export const useLeaveActivityMutation = (params: LeaveActivityMutation) => {
  const { onSuccess } = params;
  return useMutation({
    onSuccess,
    mutationFn: async (id: string) => {
      const response = await fetch(`/api/activities/disjoin/${id}`, {
        method: "POST",
      });
      return response.json();
    },
  });
};
