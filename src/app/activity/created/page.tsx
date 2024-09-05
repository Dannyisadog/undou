import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";

export default function CreatedActivityPage() {
  return (
    <GeneralLayout>
      <Title text="我發起的活動" hasGoBack={false} />
    </GeneralLayout>
  );
}
