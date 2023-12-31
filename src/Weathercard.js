import React from 'react'
import { useEffect } from 'react';

const Weathercard = ({tempInfo}) => {

    const[weatherState,setWeatherState]=React.useState(" ")


    const{
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }=tempInfo;


    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherState("wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherState("wi-fog");
                    break;
                case "Clear":
                    setWeatherState("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherState("wi-rain-wind");
                    break;

                default:
                    setWeatherState("wi-day-sunny");
                    break;
            }

        }
    }
    
    )

    let temp_k=temp;
    let temp_c=(temp_k-273.15).toFixed(2);


    let sec=sunset;
    let date= new Date(sec * 1000);
    let timeStr =`${date.getHours()}:${date.getMinutes()}`; 

  return (
    <>
      
      <article className='widget'> 

< div className='weatherIcon'>
  <i className={`wi ${weatherState}`}></i>
</div>
 < div className='weatherInfo'>
  <div className='temperature'>
  <span>{temp_c}&deg;</span>

  </div>

  <div className='description'>
      <div className='weatherCondition'>{weathermood}</div>
      <div className='place'>{name}{country}</div>

  </div>
</div>
  <div className='date'> {new Date().toLocaleString()}</div>

  <div className='extra-temp'>
  <div className='temp-info-minmax'>
      <div className='two-sided-section'>
          <p>
            <i className={"wi wi-sunset"}></i>
          </p>
        <p className='extra-info-leftside'>
            {timeStr} <br/>
          Sunset
        </p>
      </div>

      <div className='two-sided-section'>
          <p>
            <i className={"wi wi-humidity"}></i>
          </p>
        <p className='extra-info-leftside'>
          {humidity} <br/>
          Humidity
        </p>
        </div>
         </div> 

         <div className='weather-extra-info'>
         <div className='two-sided-section'>
          <p>
            <i className={"wi wi-barometer"}></i>
          </p>
        <p className='extra-info-leftside'>
          Pressure <br/>
          {pressure}
        </p>
      </div>

      <div className='two-sided-section'>
          <p>
            <i className={"wi wi-strong-wind"}></i>
          </p>
        <p className='extra-info-leftside'>
          Wind <br/>
          {speed}
        </p>
      </div>




         </div>
  </div>
</article>



    </>
  )
}

export default Weathercard




// import React, { useEffect } from "react";

// const Weathercard = ({
//   temp,
//   humidity,
//   pressure,
//   weathermood,
//   name,
//   speed,
//   country,
//   sunset,
// }) => {
//   const [weatherState, setWeatheState] = React.useState("");

//   useEffect(() => {
//     if (weathermood) {
//       switch (weathermood) {
//         case "Clouds":
//           setWeatheState("wi-day-cloudy");
//           break;
//         case "Haze":
//           setWeatheState("wi-fog");
//           break;
//         case "Clear":
//           setWeatheState("wi-day-sunny");
//           break;
//         case "Mist":
//           setWeatheState("wi-dust");
//           break;

//         default:
//           setWeatheState("wi-day-sunny");
//           break;
//       }
//     }
//   }, [weathermood]);

//   // converting the seconds into time
//   let sec = sunset;
//   let date = new Date(sec * 1000);
//   let timeStr = `${date.getHours()}:${date.getMinutes()}`;
//   return (
//     <>
//       <article className="widget">
//         <div className="weatherIcon">
//           <i className={`wi ${weatherState}`}></i>
//         </div>

//         <div className="weatherInfo">
//           <div className="temperature">
//             <span>{temp}&deg;</span>
//           </div>

//           <div className="description">
//             <div className="weatherCondition">{weathermood}</div>
//             <div className="place">
//               {name}, {country}
//             </div>
//           </div>
//         </div>

//         <div className="date"> {new Date().toLocaleString()} </div>

//         {/* our 4column section  */}
//         <div className="extra-temp">
//           <div className="temp-info-minmax">
//             <div className="two-sided-section">
//               <p>
//                 <i className={"wi wi-sunset"}></i>
//               </p>
//               <p className="extra-info-leftside">
//                 {timeStr} PM <br />
//                 Sunset
//               </p>
//             </div>

//             <div className="two-sided-section">
//               <p>
//                 <i className={"wi wi-humidity"}></i>
//               </p>
//               <p className="extra-info-leftside">
//                 {humidity} <br />
//                 Humidity
//               </p>
//             </div>
//           </div>

//           <div className="weather-extra-info">
//             <div className="two-sided-section">
//               <p>
//                 <i className={"wi wi-rain"}></i>
//               </p>
//               <p className="extra-info-leftside">
//                 {pressure} <br />
//                 Pressure
//               </p>
//             </div>

//             <div className="two-sided-section">
//               <p>
//                 <i className={"wi wi-strong-wind"}></i>
//               </p>
//               <p className="extra-info-leftside">
//                 {speed} <br />
//                 Speed
//               </p>
//             </div>
//           </div>
//         </div>
//       </article>
//     </>
//   );
// };

// export default Weathercard;