// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=6144d8760d40c44ade5de8ad9496ac5b


import React,{useEffect, useState} from 'react'
import "./style.css";
import Weathercard from './Weathercard';

const Temp = () => {
  const[searchValue,setSearchValue]=useState("Mumbai");
  const[tempInfo,setTempInfo]=useState({ })

  const getWeatherInfo=async()=> {
    try{
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=mertic&appid=6144d8760d40c44ade5de8ad9496ac5b`;
      
      const res=await fetch(url);
      const data= await res.json(" ");
      
      const{temp,humidity,pressure}=data.main;
      const{main:weathermood}=data.weather[0];
      const{name}=data;
      const{speed}=data.wind;
      const{country,sunset}=data.sys;
      const myNewWeatherInfo={
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myNewWeatherInfo)
    }catch(error){
      console.log(error);
    }


  };

  useEffect(()=>{
    getWeatherInfo();

  },[]);
  return (
    <>
      <div className='wrap'>
        <div className='search'>
            <input 
            type="search"
            placeholder="Type your city name here"
            autoFocus
            id="search"
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchbutton' type="button" onClick={getWeatherInfo} >Search</button>

        </div>

      </div>

      
    <Weathercard tempInfo={tempInfo}/>

    </>
  )
}

export default Temp
