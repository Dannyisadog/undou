import { useQuery } from "react-query";
import { ActivityWithParticipants } from "components/client/Activities/ActivityInfo";

export const useActivities = () => {
  return useQuery<ActivityWithParticipants[]>({
    queryKey: ["activities"],
    queryFn: async () => {
      const response = await fetch(`/api/activities/`);
      return response.json();
    },
  });
};
