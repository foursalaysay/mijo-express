import { region, province } from '@/components/Constants/regionConstants'
import { useState } from 'react'
import { RegionProps, ProvinceProps } from '@/lib/Types';



export default function GetAddress(){

    const 


    const [RegionValue, setRegionValue] = useState('');
    const [provinceValue, setProvinceValue ] = useState('');
    const [filteredProvinces, setFilteredProvinces] = useState<ProvinceProps[]>([]);

    let newCode : string;
    
   
    const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = region.find((region) => region.name === event.target.value);

    

    if(selected){
        newCode = selected.region_code;
        setRegionValue(selected.region_code);
        }

    const filtered = province.filter(province => province.region_code === newCode);
    setFilteredProvinces(filtered);
    };

    const getFilteredProvinces = (event: React.ChangeEvent<HTMLSelectElement>) => {
       
        const selectedProvince = event.target.value;
        setProvinceValue(selectedProvince);
    };
    
    return (
        <div>
            <select onChange={handleRegionChange} className='w-72'>
                {region && region.map((getData: RegionProps) => (
                    <option key={getData.region_code} value={getData.region_code} className='w-72 text-md'>
                        {getData.name}
                    </option>
                ))}
            </select>
            <select onChange={getFilteredProvinces} className='w-72'>
                {province && province.map((getProvince: ProvinceProps) => (
                    <option key={getProvince.id} value={getProvince.id} className='w-72 text-md'>
                        {getProvince.name}
                    </option>
                ))}
            </select>
        </div>
    );
}