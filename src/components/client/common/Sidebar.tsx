"use client";

import { Box, Divider, List, Stack, Typography } from "@mui/material";
import { DARK_BLUE, PRIMARY } from "colors";
import { useScreenSize } from "hooks/useScreenSize";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useProvider } from "providers/Provider";
import SidebarItem from "./SidebarItem";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ChecklistIcon from "@mui/icons-material/Checklist";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

type SidebarItem = {
  type: string;
  label: string;
  description: string;
};

export const items: SidebarItem[] = [
  {
    type: "all",
    label: "全部",
    description: "顯示所有運動活動",
  },
  {
    type: "basketball",
    label: "籃球",
    description:
      "台灣非常受歡迎的團體運動，許多人在學校或社區的籃球場組隊進行。",
  },
  {
    type: "badminton",
    label: "羽毛球",
    description:
      "容易組織的雙人或多人運動，場地需求不高，適合在社區活動中心或學校內進行。",
  },
  {
    type: "running",
    label: "慢跑／路跑",
    description:
      "台灣人日常生活中的運動之一，常見於公園或河濱步道，路跑比賽也很受歡迎。",
  },
  {
    type: "mountaineering",
    label: "健行／登山",
    description: "台灣多山，很多人假日時相約去陽明山、合歡山等地健行或登山。",
  },
  {
    type: "cycling",
    label: "騎腳踏車",
    description:
      "適合家庭或朋友一起參與，沿著河濱自行車道騎行，環島騎行也是許多人的目標。",
  },
  {
    type: "swimming",
    label: "游泳",
    description: "夏天常見的運動，許多人去游泳池或海邊進行游泳活動。",
  },
  {
    type: "yoga",
    label: "瑜伽",
    description:
      "一種身心平衡的運動，台灣許多健身房和專業瑜伽中心提供團體課程。",
  },
  {
    type: "dance",
    label: "舞蹈／有氧舞蹈",
    description: "社交性強的運動，社區中心或健身房提供的有氧舞蹈班非常受歡迎。",
  },
  {
    type: "volleyball",
    label: "排球",
    description: "雖然不如籃球那麼普遍，但台灣也有許多人在學校或社區玩排球。",
  },
  {
    type: "table_tennis",
    label: "桌球（乒乓球）",
    description:
      "在學校或社區活動中心常見的運動，場地需求小，適合多人一起進行。",
  },
  {
    type: "golf",
    label: "高爾夫",
    description: "較昂貴的運動，但仍有不少人喜歡相約一起進行。",
  },
  {
    type: "tai_chi",
    label: "太極拳",
    description: "尤其適合年長者的運動，早晨常在公園見到團體練習太極拳。",
  },
];

interface SidebarProps {
  closeDrawer: () => void;
}

export default function Sidebar(props: SidebarProps) {
  const { closeDrawer } = props;
  const getHref = (type: string) => {
    return type === "all" ? "/" : `/?type=${type}`;
  };

  const { isMobileSize } = useScreenSize();

  const { session } = useProvider();

  const searchParams = useSearchParams();

  const queryType = searchParams.get("type");

  const isActive = (type: string) => {
    if (!queryType && type === "all") {
      return true;
    } else {
      return queryType === type;
    }
  };

  return (
    <Box
      sx={{
        zIndex: 100,
        width: 250,
        height: "100vh",
        backgroundColor: DARK_BLUE,
        overflowY: "scroll",
        pt: 2,
        pb: 6,
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
      position={isMobileSize ? "relative" : "fixed"}
      role="presentation"
    >
      {isMobileSize && (
        <Stack
          px={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image
            priority
            width={40}
            height={40}
            src="/appbar-logo.png"
            alt="運動火腿"
          />
          <Typography color="white">嗨! {session?.authUser.name}</Typography>
        </Stack>
      )}
      <List>
        <SidebarItem
          href="/activity/create"
          text="新增活動"
          icon={<AddBoxIcon />}
        />
        <SidebarItem
          href="/activity/joined"
          text="已參加的活動"
          icon={<ChecklistIcon />}
        />
        <SidebarItem
          href="/activity/created"
          text="我發起的活動"
          icon={<EmojiPeopleIcon />}
        />
        <Divider
          sx={{
            my: 2,
            backgroundColor: "#ffffff44",
          }}
        />
        {items.map((item) => (
          <SidebarItem
            key={item.type}
            text={item.label}
            active={isActive(item.type)}
            href={getHref(item.type)}
            onClick={() => {
              isMobileSize && closeDrawer();
            }}
          />
        ))}
      </List>
    </Box>
  );
}
