import { useQuery } from "react-query";
import { ActivityWithParticipants } from "components/client/Activities/ActivityInfo";

export const useActivities = (type: string) => {
  return useQuery<ActivityWithParticipants[]>({
    queryKey: ["activities", type],
    queryFn: async () => {
      const response = await fetch(`/api/activities/?type=${type}`);
      return response.json();
    },
  });
};
