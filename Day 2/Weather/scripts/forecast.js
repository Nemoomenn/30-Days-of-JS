
const apiKey = "GOQye3iqmadIGKon0pzU553lqUDTxge3";

// get city information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query =  `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};


// get weather information
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

}

// getCity('london').then(data => {
//   return getWeather(data.Key);
// }).then((data) => {
//   console.log(data);
// }).catch(err => console.log(err.message))
