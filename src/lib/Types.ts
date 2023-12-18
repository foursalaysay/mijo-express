
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
export type getRegion = {
  id:number,
  name:string
}