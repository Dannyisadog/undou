import CreatedActivity from "components/client/Activities/CreatedActivity";
import GeneralLayout from "layout/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 我發起的活動",
};

export default function CreatedActivityPage() {
  return (
    <GeneralLayout>
      <CreatedActivity />
    </GeneralLayout>
  );
}
