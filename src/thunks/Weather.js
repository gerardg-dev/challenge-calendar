import axios from "axios";

import {
  SET_WEATHER,
  SET_WEATHER_ERROR,
  IS_LOADING_WEATHER
} from "../constants/ActionTypes";

export const getWeather = ({ cityName }) => {
  return async dispatch => {
    dispatch({ type: SET_WEATHER_ERROR, payload: null });
    dispatch({ type: IS_LOADING_WEATHER, payload: true });

    // Get city lat and lng ----------------------------------------------------

    let lat = "";
    let lng = "";

    const urlGeo = "https://api.opencagedata.com/geocode/v1/json";
    const geoApiKey = "c8cbd2b30e28453a997193d773ab4769";

    await axios
      .get(urlGeo, {
        params: {
          q: cityName,
          key: geoApiKey
        }
      })
      .then(response => {
        lat = response.data.results[0].geometry.lat;
        lng = response.data.results[0].geometry.lng;
        console.log("RESPONSE GEO CALL");
        console.log(lat);
        console.log(lng);
      })
      .catch(err => {
        console.log("ERROR GEO CALL");
        console.log(err);
      });

    // Get 7 day forecast ------------------------------------------------------

    const urlWeather = "https://api.openweathermap.org/data/2.5/onecall";
    const openWeatherAPIKey = "9be820226b145482f94cb61b55acd859";

    await axios
      .get(urlWeather, {
        params: {
          lat: lat,
          lon: lng,
          appid: openWeatherAPIKey
        }
      })
      .then(response => {
        console.log(response.data);
        dispatch({ type: IS_LOADING_WEATHER, payload: false });
        if (response && response.data && response.data.daily) {
          // Will save the forecast for the next 7 days
          dispatch({ type: SET_WEATHER, payload: response.data.daily });
        }
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SET_WEATHER_ERROR, payload: err });
        dispatch({ type: IS_LOADING_WEATHER, payload: false });
      });
  };
};
