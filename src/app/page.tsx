import { auth, CustomSession } from "auth";
import GeneralLayout from "layout/GeneralLayout";
import { redirect } from "next/navigation";
import Provider from "providers/Provider";

export default async function Home() {
  const session = (await auth()) as CustomSession;

  if (!session || !session.user || !session.user?.email) {
    redirect("/signin");
  }
  return (
    <Provider session={session}>
      <GeneralLayout>{null}</GeneralLayout>
    </Provider>
  );
}
