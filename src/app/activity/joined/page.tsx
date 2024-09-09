import JoinedActivity from "components/client/Activities/JoinedActivity";
import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 已參加的活動",
};

export default function JoinedActivityPage() {
  return (
    <GeneralLayout>
      <Title text="已參加的活動" hasGoBack={false} />
      <JoinedActivity />
    </GeneralLayout>
  );
}
