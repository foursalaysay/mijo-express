
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

