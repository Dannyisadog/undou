"use client";

import { Stack, Typography } from "@mui/material";
import { useScreenSize } from "hooks/useScreenSize";
import TextField from "../TextField";
import DatePicker from "../DatePicker";
import Select from "../Select";
import { items, SidebarItem } from "../common/Sidebar";
import Button from "../Button";
import { PRIMARY } from "colors";
import { useFormik } from "formik";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { activitySchema } from "validation/activity";
import { useGlobalStore } from "providers/StoreProvider";

export type ActivityType = {
  name: string;
  type?: string;
  startDate?: Date;
  endDate?: Date;
  maxParticipants: number;
  fee: number;
  location: string;
  address: string;
  description: string;
};

export default function CreateActivity() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const formik = useFormik<ActivityType>({
    initialValues: {
      name: "一起來運動！",
      type: undefined,
      startDate: undefined,
      endDate: undefined,
      maxParticipants: 0,
      fee: 0,
      location: "",
      address: "",
      description: "",
    },
    onSubmit: async (values) => {
      await activitySchema.validate(values, { abortEarly: false });
      setLoading(true);
      await fetch("/api/activities", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          type: values.type,
          startDate: values.startDate?.toISOString(),
          endDate: values.endDate?.toISOString(),
          maxParticipants: values.maxParticipants,
          fee: values.fee,
          location: values.location,
          address: values.address,
          description: values.description,
        }),
      });
      router.push("/");
      setLoading(false);
    },
  });

  const { isMobileSize } = useScreenSize();

  const { session } = useGlobalStore((state) => state);

  if (!session) {
    redirect("/signin");
  }

  const direction = isMobileSize ? "column" : "row";

  return (
    <Stack spacing={2} width="100%">
      <Stack direction={direction} spacing={2} width="100%">
        <TextField
          fullWidth
          label="活動名稱"
          value={formik.values.name}
          onChange={(e) => {
            formik.setFieldValue("name", e.target.value);
          }}
        />
        <Select
          fullWidth
          placeholder="請選擇活動類型"
          label="活動類型"
          items={items}
          renderLabel={(value) => value.label}
          onChange={(value) =>
            formik.setValues({
              ...formik.values,
              type: value.type,
            })
          }
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <DatePicker
          fullWidth
          label="活動開始時間"
          onChange={(e) => {
            formik.setFieldValue("startDate", e);
          }}
        />
        <DatePicker
          fullWidth
          label="活動結束時間"
          onChange={(e) => {
            formik.setFieldValue("endDate", e);
          }}
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <TextField
          fullWidth
          type="number"
          label="可報名人數"
          onChange={(e) => {
            formik.setFieldValue("maxParticipants", parseInt(e.target.value));
          }}
        />
        <TextField
          fullWidth
          type="number"
          label="費用"
          onChange={(e) => {
            formik.setFieldValue("fee", parseInt(e.target.value));
          }}
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <TextField
          fullWidth
          label="活動地點"
          onChange={(e) => {
            formik.setFieldValue("location", e.target.value);
          }}
        />
        <TextField
          fullWidth
          label="活動地址"
          onChange={(e) => {
            formik.setFieldValue("address", e.target.value);
          }}
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <TextField
          fullWidth
          label="活動敘述"
          rows={6}
          multiline
          onChange={(e) => {
            formik.setFieldValue("description", e.target.value);
          }}
        />
      </Stack>
      <Button
        isLoading={loading}
        variant="contained"
        sx={{
          height: 48,
          color: "white",
        }}
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        <Typography variant="subtitle1">新增活動</Typography>
      </Button>
    </Stack>
  );
}
