import { getCities } from "data/cities";
import Select from "./Select";

interface CitySelectProps {
  error?: boolean;
  helperText?: string;
  onChange: (value: string) => void;
}

export default function CitySelect(props: CitySelectProps) {
  const { error, helperText, onChange } = props;

  const cities = getCities();

  const cityList = cities.map((city) => city.CityName);

  return (
    <Select
      required
      fullWidth
      placeholder="請選擇活動縣市"
      label="縣市"
      error={error}
      helperText={helperText}
      items={cityList}
      renderLabel={(value) => value}
      onChange={onChange}
    />
  );
}
