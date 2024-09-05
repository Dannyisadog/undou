import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";

export default function JoinedActivityPage() {
  return (
    <GeneralLayout>
      <Title text="已參加的活動" hasGoBack={false} />
    </GeneralLayout>
  );
}
