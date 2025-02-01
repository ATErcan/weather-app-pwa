export const getHumidityDesc = (humidity: number) => {
  return humidity >= 50
    ? "The air feels humid and heavy."
    : "The air feels dry and comfortable.";
}

export const getFeelsLikeDesc = (temp: number, feels: number) => {
  return Math.round(temp) > Math.round(feels)
    ? "It feels colder than the actual temperature outside."
    : Math.round(feels) > Math.round(temp)
    ? "It feels warmer than the actual temperature outside."
    : "It feels exactly as the temperature suggests outside.";
}

export const getVisibilityDesc = (visibility: number) => {
  return visibility <= 500
    ? "Visibility is extremely low; conditions are likely very foggy or obstructed."
    : visibility <= 5000
    ? "Visibility is limited; be cautious in hazy or misty conditions."
    : "Visibility is good; you can see clearly in most directions.";
}

export const getWindDesc = (speed: number) => {
  if(speed <= 1) {
    return "Calm and still, with little to no wind.";
  } else if(speed <= 5) {
    return "A gentle breeze, barely noticeable.";
  } else if(speed <= 10) {
    return "A moderate wind, noticeable but not disruptive.";
  } else if(speed <= 15) {
    return "A strong breeze; it may feel a bit forceful.";
  } else if(speed <= 20) {
    return "Very windy; hold onto your hats!";
  } else {
    return "Extreme wind; conditions may be hazardous.";
  }
}

