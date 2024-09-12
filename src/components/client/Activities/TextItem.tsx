import { Stack, Typography } from "@mui/material";

interface TextItemProps {
  label: string;
  text: string;
  icon: React.ReactNode;
}

export default function TextItem(props: TextItemProps) {
  const { label, text, icon } = props;

  return (
    <Stack>
      <Stack direction="row" alignItems="center" spacing={0.5}>
        {icon}
        <Stack spacing={0.5}>
          <Typography variant="body2" fontWeight="bold" color="primary">
            {label}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="subtitle1" fontWeight="bold" pl={3.5}>
        {text}
      </Typography>
    </Stack>
  );
}
