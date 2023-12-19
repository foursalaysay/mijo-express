
// PROVIDER HISTORY CARD

export type Service = {
    serviceId: number;
    serviceCode: string;
    serviceName: string;
    providerName: string;
    providerAddress: string;
    providerContactNumber: string;
    date: string;
    status: "Accepted" | "Declined" | "Completed" | "In Progress";
  };

//FETCH REGION ADDRESS

export interface RegionProps {
  region_code: string;
  name: string;
}

export interface ProvinceProps {
  region_code : string;
  id : string;
  name : string;
}

export interface CityProps {
  city_code : string
  city_name : string
  province_code : string
  region_desc : string
  psgc_code : string
}

export interface BaranggayProps {
  
}