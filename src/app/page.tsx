import ActivityList from "components/client/Activities/ActivityList";
import GeneralLayout from "layout/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 活動列表",
};

export default async function Home() {
  return (
    <GeneralLayout>
      <ActivityList />
    </GeneralLayout>
  );
}
