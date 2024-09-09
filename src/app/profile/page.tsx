import GeneralLayout from "layout/GeneralLayout";
import { Metadata } from "next";
import Profile from "components/client/Profile";

export const metadata: Metadata = {
  title: "運動火腿 - 個人資訊",
};

export default async function ProfilePage() {
  return (
    <GeneralLayout>
      <Profile />
    </GeneralLayout>
  );
}
