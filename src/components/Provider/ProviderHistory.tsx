


import { ScrollArea } from "@radix-ui/react-scroll-area";

import Image from 'next/image'


type providerhistory = {
  id: number;
  customerName: string;
  address: string;
  contactNumber: string;
  date: string;
  imageUrl: string;
}

interface ProviderHistoryCardProps {
  ProviderHistoryData: providerhistory[]
}


export default function ProviderHistory({ ProviderHistoryData }: ProviderHistoryCardProps ) {

 
  return (
    <ScrollArea className="h-[550px] w-11/12 rounded-md border mx-10">
    {ProviderHistoryData.map((history) => (
    <div className="m-4 p-6 max-w-xs rounded-md bg-white shadow-md" key={history.id}>
    <Image src={history.imageUrl} alt={history.customerName} className="mb-4" width={100} height={100}/>
      <h2 className="text-lg font-semibold">{history.customerName}</h2>
      <p><strong>ID:</strong> {history.id}</p>
      <p><strong>Address:</strong> {history.address}</p>
      <p><strong>Contact Number:</strong> {history.contactNumber}</p>
      <p><strong>Date:</strong> {history.date}</p>
    </div>
      ))}
    </ScrollArea>
  );
}


