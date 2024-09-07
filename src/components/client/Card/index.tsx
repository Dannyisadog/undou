"use client";

import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";

interface CardProps extends MuiCardProps {}

export default function Card(props: CardProps) {
  return <MuiCard {...props} />;
}
