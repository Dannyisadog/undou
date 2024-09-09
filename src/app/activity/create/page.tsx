import { Stack } from "@mui/material";
import CreateActivity from "components/client/Activities/CreateActivity";
import Title from "components/client/Title";
import GeneralLayout from "layout/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "運動火腿 - 新增活動",
};

export default function CreateActivityPage() {
  return (
    <GeneralLayout>
      <Stack spacing={4} width="100%">
        <Title text="新增活動" hasGoBack={false} />
        <CreateActivity />
      </Stack>
    </GeneralLayout>
  );
}
