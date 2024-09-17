import { Activity, Comment, User } from "@prisma/client";
import { useQuery } from "react-query";

export interface CommentWithCreatorAndActivity extends Comment {
  creator: User;
  activity: Activity;
}

export const useComments = (activityId: string) => {
  return useQuery<CommentWithCreatorAndActivity[]>({
    queryKey: ["comments", activityId],
    queryFn: async () => {
      const response = await fetch(`/api/activities/${activityId}/comments`);
      return response.json();
    },
  });
};
