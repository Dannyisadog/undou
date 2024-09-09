"use client";

import { Stack, Typography } from "@mui/material";
import { useScreenSize } from "hooks/useScreenSize";
import Title from "./Title";

export default function Privacy() {
  const { isDesktopSize } = useScreenSize();

  return (
    <Stack spacing={2} mt={isDesktopSize ? "800px !important" : 0} pb={10}>
      <Title text="隱私權政策" hasGoBack={false} />
      <Typography variant="body1">
        歡迎來到運動火腿（以下簡稱「本平台」）。使用本平台的服務表示您同意遵守以下條款和條件。請仔細閱讀本條款，若您不同意，請勿使用本平台的服務。
      </Typography>

      <Typography variant="h6">1. 我們收集的資訊</Typography>
      <Typography variant="body1">
        當您註冊帳戶、瀏覽活動或參加活動時，我們可能會收集以下類型的資訊：
      </Typography>

      <Typography variant="body1">
        個人資料：例如您的姓名、電子郵件地址、電話號碼等，這些資料是您註冊帳戶或使用平台服務時提供的。
      </Typography>

      <Typography variant="body1">
        活動偏好：例如您選擇參加的活動類型、參與的次數、喜好的活動內容。
      </Typography>

      <Typography variant="body1">
        裝置資訊：包括 IP 地址、瀏覽器類型、操作系統以及裝置標識符等技術資料。
      </Typography>

      <Typography variant="body1">
        行為數據：當您與我們的平台進行互動時，系統會自動記錄您的使用情況，例如點擊、瀏覽頁面、活動報名等數據。
      </Typography>

      <Typography variant="h6">2. 我們如何使用這些資訊</Typography>
      <Typography variant="body1">
        我們會將您的個人資訊用於以下目的：
      </Typography>

      <Typography variant="body1">
        個性化推薦：根據您的興趣和活動偏好，推薦適合您的活動。
      </Typography>

      <Typography variant="body1">
        帳戶管理：處理您的帳戶設定、活動報名及其他相關操作。
      </Typography>

      <Typography variant="body1">
        改善服務：分析用戶行為，提升平台功能及使用體驗。
      </Typography>

      <Typography variant="body1">
        通訊聯絡：我們可能會使用您的聯絡資訊，提供活動提醒、最新消息和服務更新。
      </Typography>

      <Typography variant="body1">
        法律遵循：根據法律要求，處理您的資料以確保遵循相關法規。
      </Typography>

      <Typography variant="h6">3. 資訊分享</Typography>
      <Typography variant="body1">
        我們不會將您的個人資訊出售給第三方。但在某些情況下，我們可能會與信任的合作夥伴或服務提供商分享您的資訊，以便提供更好的服務，包括但不限於：
      </Typography>

      <Typography variant="body1">
        為了完成您所參加的活動所需的第三方服務（如支付處理、活動舉辦方）。
      </Typography>

      <Typography variant="body1">
        根據法律要求，分享給政府機關或相關監管機構。
      </Typography>

      <Typography variant="h6">4. 資訊安全</Typography>
      <Typography variant="body1">
        我們會採取適當的技術和組織措施，保護您的個人資訊免受未經授權的存取、修改、揭露或銷毀。然而，請注意，互聯網上的資料傳輸並非完全安全，我們無法保證百分之百的資訊安全。
      </Typography>

      <Typography variant="h6">5. 您的權利</Typography>
      <Typography variant="body1">
        您有權隨時檢視、更正或刪除您的個人資料。您也可以隨時選擇取消訂閱我們的通訊。對於您的隱私問題或數據處理方式有任何疑問，您可以聯繫我們。
      </Typography>

      <Typography variant="h6">6. 隱私政策的變更</Typography>
      <Typography variant="body1">
        我們可能會根據需要更新此隱私政策。每當有變更時，我們會在平台上發布更新版本，並通知您政策變更的相關信息。請定期查看隱私政策以了解最新的資料保護措施。
      </Typography>
    </Stack>
  );
}
