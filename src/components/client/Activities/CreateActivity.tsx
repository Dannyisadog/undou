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
import dayjs from "dayjs";
import CitySelect from "../CitySelect";
import AreaSelect from "../AreaSelect";

export type ActivityType = {
  name: string;
  type?: string;
  city?: string;
  area?: string;
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
    validateOnChange: false,
    validationSchema: activitySchema,
    onSubmit: async (values) => {
      setLoading(true);
      await fetch("/api/activities", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          type: values.type,
          startDate: values.startDate?.toISOString(),
          endDate: values.endDate?.toISOString(),
          city: values.city,
          area: values.area,
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
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          placeholder="請輸入活動名稱"
          value={formik.values.name}
          onChange={(e) => {
            formik.setFieldValue("name", e.target.value);
          }}
        />
        <Select
          fullWidth
          placeholder="請選擇活動類型"
          label="活動類型"
          error={!!formik.errors.type}
          helperText={formik.errors.type}
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
          error={!!formik.errors.startDate}
          helperText={formik.errors.startDate}
          onChange={(e) => {
            formik.setFieldValue("startDate", e);
          }}
        />
        <DatePicker
          fullWidth
          label="活動結束時間"
          error={!!formik.errors.endDate}
          helperText={formik.errors.endDate}
          minDate={dayjs(formik.values.startDate)}
          onChange={(e) => {
            formik.setFieldValue("endDate", e);
          }}
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <TextField
          fullWidth
          placeholder="請輸入可報名人數"
          error={!!formik.errors.maxParticipants}
          helperText={formik.errors.maxParticipants}
          type="number"
          label="可報名人數"
          onChange={(e) => {
            formik.setFieldValue("maxParticipants", parseInt(e.target.value));
          }}
        />
        <TextField
          fullWidth
          placeholder="請輸入費用"
          type="number"
          value={formik.values.fee}
          error={!!formik.errors.fee}
          helperText={formik.errors.fee}
          label="費用"
          onChange={(e) => {
            formik.setFieldValue("fee", parseInt(e.target.value));
          }}
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <CitySelect
          error={!!formik.errors.city}
          helperText={formik.errors.city}
          onChange={(value) => {
            formik.setFieldValue("city", value);
          }}
        />
        <AreaSelect
          city={formik.values.city}
          error={!!formik.errors.area}
          helperText={formik.errors.area}
          onChange={(value) => {
            formik.setFieldValue("area", value);
          }}
        />
      </Stack>
      <Stack direction={direction} spacing={2} width="100%">
        <TextField
          fullWidth
          placeholder="請輸入活動地點"
          label="活動地點"
          error={!!formik.errors.location}
          helperText={formik.errors.location}
          onChange={(e) => {
            formik.setFieldValue("location", e.target.value);
          }}
        />
        <TextField
          fullWidth
          placeholder="請輸入活動地址"
          label="活動地址"
          error={!!formik.errors.address}
          helperText={formik.errors.address}
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
          error={!!formik.errors.description}
          helperText={formik.errors.description}
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
