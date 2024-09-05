import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";

export default function CreateActivityPage() {
  return (
    <GeneralLayout>
      <Title text="新增活動" hasGoBack={false} />
    </GeneralLayout>
  );
}
