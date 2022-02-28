const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const forecast = new Forecast();

const updateUI = (data) => {
  // const cityDets = data.cityDets;
  console.log(data);
  // const weather = data.weather;
  // destructure properties
  const { cityDets, weather } = data;

  // update details template
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherIcon}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>
  `;

  // update the night/day icons and images
  const iconSrc = `icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "day.svg";
  } else {
    timeSrc = "night.svg";
  }

  time.setAttribute("src", timeSrc);

  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

// const updateCity = async (city) => {
//   const cityDets = await getCity(city);
//   const weather = await getWeather(cityDets.Key);

//   return {
//     cityDets, // obj shorthand notation
//     weather,
//   };
// };

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update ui with new city
  forecast.updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));

  // set local storage
  localStorage.setItem("city", city);
});
  
if (localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city')).then(data => updateUI(data)).catch(err => console.log(err));
}