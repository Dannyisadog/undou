import { get } from "app/repository/activity";
import ActivityInfo from "components/client/Activities/ActivityInfo";
import GeneralLayout from "layout/GeneralLayout";
import { getAuthUser } from "util/auth";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function ActivityPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const user = await getAuthUser();
  const activity = await get(id);

  return (
    <GeneralLayout>
      <ActivityInfo activity={activity} user={user} />
    </GeneralLayout>
  );
}
