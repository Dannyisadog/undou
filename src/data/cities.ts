import untypeCities from "../../public/cities.json";

export type Road = {
  RoadName: string;
  RoadEngName: string;
};

export type Area = {
  ZipCode: string;
  AreaName: string;
  AreaEngName: string;
  RoadList: Road[];
};

export type City = {
  CityName: string;
  CityEngName: string;
  AreaList: Area[];
};

export const getCities = () => {
  return untypeCities as City[];
};
