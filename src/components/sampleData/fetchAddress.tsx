'use client'

import { InferGetStaticPropsType, GetStaticProps } from 'next'
import { useState } from 'react'

export type Region = {
  id: number;
  region: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://ph-locations-api.buonzz.com/v1/regions')
  const regions: Region[] = await res.json()
  return { props: { regions } }
}
 
export default function FetchAddress({
  regions,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [getRegion, setGetRegion] = useState<Region[] | null>(null)

  return (
    <div>
      <h2>Regions</h2>
      <select
      >
          {regions ? 
          regions.map((getRegion : any) => {
            <option key={getRegion.id}>
                {getRegion.region}
            </option>
          })
        : null}
      </select>
    </div>
  )
}
