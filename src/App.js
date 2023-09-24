import React ,{useEffect} from 'react';
import Temp from './Temp';

const App = () => {

  useEffect(() => {
    document.title = "weather-app";
  }, []);

  return (
    <>
    {/* <title="weather-app"> */}
    <Temp/>
    </>
  )
}

export default App;
