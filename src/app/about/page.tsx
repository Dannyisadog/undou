import AuthLayout from "layout/AuthLayout";
import { Metadata } from "next";
import SigninLayout from "layout/SigninLayout";
import Title from "components/client/Title";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "運動火腿 - 關於平台",
};

export default function AboutPage() {
  return (
    <AuthLayout>
      <SigninLayout>
        <Title text="關於平台" hasGoBack={false} />
        <Typography variant="h5">找到你熱愛的運動</Typography>
        <Typography variant="h5">遇見志同道合的夥伴</Typography>
        <Typography variant="body1">
          歡迎來到 <b>運動火腿</b>
          ，這是一個為所有喜歡冒險、挑戰和樂趣的人打造的全新天地！無論你是喜愛戶外運動還是想要認識更多有共同興趣的夥伴，我們都會幫助你找到屬於你的運動。
        </Typography>
        <Typography variant="h5">我們的平台提供什麼？</Typography>
        <List sx={{ listStyleType: "disc", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="無論是瑜伽、羽球、騎車應有盡有！" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="一鍵報名系統，無需繁瑣步驟，馬上鎖定名額！" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="你可以和其他參與者互動，認識新朋友，分享活動的樂趣。" />
          </ListItem>
        </List>
      </SigninLayout>
    </AuthLayout>
  );
}
