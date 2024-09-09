"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useScreenSize } from "hooks/useScreenSize";
import Title from "./Title";

export default function Terms() {
  const { isDesktopSize } = useScreenSize();

  return (
    <Stack spacing={2} mt={isDesktopSize ? "1400px !important" : 0} pb={10}>
      <Title text="服務條款" hasGoBack={false} />
      <Typography variant="body1">
        歡迎來到運動火腿（以下簡稱「本平台」）。使用本平台的服務表示您同意遵守以下條款和條件。請仔細閱讀本條款，若您不同意，請勿使用本平台的服務。
      </Typography>

      <Typography variant="h6">1. 使用條件</Typography>
      <Typography variant="body1">
        1.1 您必須年滿 18 歲才能註冊和使用本平台。若您未滿 18
        歲，必須在父母或法定監護人的同意下使用本平台。
      </Typography>
      <Typography variant="body1">
        1.2
        您承諾提供正確、完整的註冊資訊，並維護此資訊的更新。若發現您提供的資訊不正確或虛假，本平台保留暫停或終止您帳戶的權利。
      </Typography>
      <Typography variant="body1">
        1.3
        您承諾不會使用本平台進行任何違法、不正當或破壞性的活動。您不得使用本平台散佈惡意軟體、垃圾郵件、詐騙信息或侵犯他人權利的內容。
      </Typography>

      <Typography variant="h6">2. 帳戶及安全</Typography>
      <Typography variant="body1">
        2.1
        您負責維護帳戶的機密性，並對使用您的帳戶進行的所有活動負全責。若發現帳戶被未經授權的使用，您應立即通知我們。
      </Typography>
      <Typography variant="body1">
        2.2
        本平台不對因未經授權的使用所產生的損失負責。若您未能妥善保護您的帳戶，本平台有權暫停或終止您的使用權限。
      </Typography>

      <Typography variant="h6">3. 平台服務</Typography>
      <Typography variant="body1">
        3.1
        本平台提供您探索並參加各種活動的服務，包括活動的瀏覽、報名及其他相關互動功能。本平台可能會根據需求定期更新或修改服務內容。
      </Typography>
      <Typography variant="body1">
        3.2
        本平台並非活動的主辦方，僅為用戶與活動主辦者提供中介平台。對於活動的內容、安排、品質及其他相關事項，本平台不負任何法律責任。
      </Typography>
      <Typography variant="body1">
        3.3
        若您報名參加活動，應遵守活動主辦方的規定。本平台不對活動的延期、取消或其他任何變動承擔責任，您應直接與活動主辦方協調處理。
      </Typography>

      <Typography variant="h6">4. 費用與付款</Typography>
      <Typography variant="body1">
        4.1
        本平台上的部分活動可能會收取報名費用。所有費用將在您報名時清楚顯示，並以您選擇的支付方式進行收取。
      </Typography>
      <Typography variant="body1">
        4.2
        您同意支付所有因使用本平台服務所產生的費用，包括報名費、稅金和其他相關費用。若付款出現任何問題，您需自行聯繫支付服務提供商。
      </Typography>

      <Typography variant="h6">5. 內容使用</Typography>
      <Typography variant="body1">
        5.1
        在本平台上發佈的所有內容，包括文字、圖片、影片、圖表及其他資訊，均受著作權保護。您不得未經許可複製、修改、散佈或以其他方式使用這些內容。
      </Typography>
      <Typography variant="body1">
        5.2
        您在平台上上傳的內容（如評論、照片）需確保擁有相關版權及合法權利。本平台對於用戶上傳內容不負法律責任，但有權隨時移除違反本條款的內容。
      </Typography>

      <Typography variant="h6">6. 資訊保護</Typography>
      <Typography variant="body1">
        我們會依據隱私權政策保護您的個人資料，請參閱我們的隱私權政策以了解詳細資訊。
      </Typography>

      <Typography variant="h6">7. 服務中斷及責任免除</Typography>
      <Typography variant="body1">
        7.1
        本平台可能因系統維護、升級或其他不可抗力因素暫停服務。我們將盡力提前通知用戶，但不對因服務中斷造成的任何損失承擔責任。
      </Typography>
      <Typography variant="body1">
        7.2
        本平台不保證服務不會發生錯誤、中斷或漏洞。您理解並同意，使用本平台服務的風險由您自行承擔，我們不對任何因使用或無法使用平台服務造成的直接或間接損失負責。
      </Typography>

      <Typography variant="h6">8. 條款修改</Typography>
      <Typography variant="body1">
        我們有權隨時修改本條款。當條款進行修改時，您將會收到通知，並可選擇繼續使用或終止使用本平台服務。您繼續使用本平台，即視為接受修改後的條款。
      </Typography>

      <Typography variant="h6">9. 終止服務</Typography>
      <Typography variant="body1">
        若您違反本條款或進行任何不當行為，本平台保留在不另行通知的情況下暫停或終止您帳戶的權利。
      </Typography>

      <Typography variant="h6">10. 法律適用</Typography>
      <Typography variant="body1">
        本條款受所在地區法律管轄，若發生任何爭議，雙方同意提交至該地區有管轄權的法院解決。
      </Typography>
    </Stack>
  );
}
