import { useEffect, useState } from 'react';

// Define the regionType outside the component
type regionType = {
  id: number;
  name: string;
};

const regionUrl = 'https://ph-locations-api.buonzz.com/v1/regions';

export default function AddressComponent() {
  const [region, setRegion] = useState<regionType[]>([]);

  useEffect(() => {
    async function getRegion() {
      try {
        const res = await fetch(regionUrl);
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const data: regionType[] = await res.json();
        setRegion(data);
      } catch (error) {
        console.error('Error fetching region data:', error);
        // Handle error state or display error message
      }
    }
    getRegion();
  }, []);

  return (
    <div>
      <h2>Select Region</h2>
      <select name="region" id="region">
        {region.map((item: regionType) => (
          <option key={item.id} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
