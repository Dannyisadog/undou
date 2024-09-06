"use client";

import { Stack } from "@mui/material";
import { useScreenSize } from "hooks/useScreenSize";
import TextField from "../TextField";
import DatePicker from "../DatePicker";
import Select from "../Select";
import { items, SidebarItem } from "../common/Sidebar";
import Button from "../Button";
import { PRIMARY } from "colors";
import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { activitySchema } from "validation/activity";

export type ActivityType = {
  name: string;
  type?: string;
  date?: Date;
  maxParticipants: number;
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
      date: undefined,
      maxParticipants: 0,
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
          date: values.date?.toISOString(),
          maxParticipants: values.maxParticipants,
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
            formik.setFieldValue("date", e);
          }}
        />
        <TextField
          fullWidth
          type="number"
          label="可報名人數"
          onChange={(e) => {
            formik.setFieldValue("maxParticipants", parseInt(e.target.value));
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
        variant="outlined"
        sx={{
          ":hover": {
            backgroundColor: PRIMARY.main,
            color: "white",
          },
        }}
        onClick={() => {
          formik.handleSubmit();
        }}
      >
        新增活動
      </Button>
    </Stack>
  );
}
