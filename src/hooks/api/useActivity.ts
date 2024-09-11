import { useQuery } from "react-query";
import { ActivityWithParticipants } from "components/client/Activities/ActivityInfo";

export const useActivity = (id: number) => {
  return useQuery<ActivityWithParticipants>({
    queryKey: ["activity", id],
    queryFn: async () => {
      const response = await fetch(`/api/activities/${id}`);
      return response.json();
    },
  });
};
