import React, { useState } from 'react';


export interface Region {
    id: string;
    name: string;
    href: string;
  }
  
 export interface RegionsData {
    data: Region[];
  }


  export interface RegionSelectProps {
    regionsData: RegionsData; // Pass the provided data as a prop
  }
  
  const RegionSelect: React.FC<RegionSelectProps> = ({ regionsData }) => {
    const [selectedRegion, setSelectedRegion] = useState<string>(''); // State to hold the selected region ID
  
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRegion(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="regionSelect">Select a Region:</label>
        <select
          id="regionSelect"
          value={selectedRegion}
          onChange={handleSelectChange}
        >
          <option value="">Select Region</option>
          {regionsData.data.map((region) => (
            <option key={region.id} value={region.id}>
              {region.name}
            </option>
          ))}
        </select>
        {selectedRegion && <p>Selected Region ID: {selectedRegion}</p>}
      </div>
    );
  };
  
  export default RegionSelect;
    
export const getStaticProps = async () => {
    const res = await fetch('https://ph-locations-api.buonzz.com/v1/regions');
    const data = await res.json();
    return { props: { regionsData: data } };
}
