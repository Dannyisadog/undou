import { getCities } from "data/cities";
import Select from "./Select";

interface AreaSelectProps {
  city?: string;
  error?: boolean;
  helperText?: string;
  onChange: (value: string) => void;
}

export default function AreaSelect(props: AreaSelectProps) {
  const { city, error, helperText, onChange } = props;

  const cities = getCities();

  const areas =
    cities.find((c) => c.CityName === city)?.AreaList.map((a) => a.AreaName) ||
    [];

  return (
    <Select
      fullWidth
      placeholder="請選擇區域"
      label="區域"
      error={error}
      helperText={helperText}
      items={areas}
      renderLabel={(value) => value}
      onChange={onChange}
    />
  );
}
