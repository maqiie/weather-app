import React, { useEffect, useState } from 'react'
import axios from 'axios' 


function Weatherdata(){
const   [data, setData] =useState([{}]);

useEffect(() => {
  axios
  .get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=917a3c2811b90c49174f722be7138596')
  .then((Response) =>{
    setData(Response.data);
    console.log(Response.data);
  })
  .catch((err) =>{
    console.log(err);
  })
},[])


}

export default Weatherdata
