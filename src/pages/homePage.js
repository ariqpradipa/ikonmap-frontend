import * as React from 'react';
import axios from 'axios';
import { XMLParser, XMLBuilder, XMLValidator } from 'fast-xml-parser';

import Header from '../components/navigation/navbar';
import thedat from '../datass.xml';

export default function Home() {

  // var config = {
  //   method: 'no-cors',
  //   url: 'https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-SulawesiSelatan.xml',
  //   headers: {
  //     'Accept': 'application/xml',
  //     'content-type': 'application/x-www-form-urlencoded',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT',
  //     'Access-Control-Allow-Headers': 'Content-Type',
  //   }
  // };
  // axios(config)
  //   .then((response) => {
  //     console.log(response);
  //   })
  axios.get(thedat, {
    "Content-Type": "application/xml; charset=utf-8"
  })
    .then((response) => {
      console.log('Your xml file as string', response.data);

      const parser = new XMLParser();
      var thedata = parser.parse(response.data);
      console.log(thedata);

    });



  return (
    <>
      <Header />
    </>
  )
}