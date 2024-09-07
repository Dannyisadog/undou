import ActivityList from "components/client/Activities/ActivityList";
import GeneralLayout from "layout/GeneralLayout";

export default async function Home() {
  return (
    <GeneralLayout>
      <ActivityList />
    </GeneralLayout>
  );
}
