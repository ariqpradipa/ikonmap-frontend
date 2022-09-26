import * as React from 'react';

import Header from '../components/navigation/navbar';

export default function Home() {

  axios
  .get('https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-SulawesiSelatan.xml')
  return (
    <>
      <Header />
    </>
  )
}