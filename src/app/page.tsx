import { auth, CustomSession } from "auth";
import ActivityList from "components/client/Activities/ActivityList";
import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";
import { redirect } from "next/navigation";
import Provider from "providers/Provider";

export default async function Home() {
  const session = (await auth()) as CustomSession;

  return (
    <Provider session={session}>
      <GeneralLayout>
        <ActivityList />
      </GeneralLayout>
    </Provider>
  );
}
