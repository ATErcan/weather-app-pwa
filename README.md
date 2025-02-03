
# Weather PWA Next

Weather PWA is a Progressive Web App (PWA) built with Next.js, designed to provide real-time weather updates for any location worldwide. The app fetches weather data from OpenWeather API, allows users to search locations using OpenWeather Geolocation API, and integrates Google Maps API for seamless location discovery.

This PWA supports push notifications, has location and voice search features and can be installed on mobile and desktop devices for a native-like experience.


## Authors

- [@ATErcan](https://www.github.com/ATErcan)
All codes in this project are written by me.


## Tech Stack

HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind, @tanstack/react-query, @react-google-maps/api, mongoose, indexedDB


## Demo

https://weather-next-pwa.vercel.app/

## Installation
Clone the project, and install the dependencies
```bash
  $ git clone https://github.com/ATErcan/adRespect.git

  $ npm install
```
Create a .env file by following the Environment Variables section. Run the development server with the command below
```bash
  $ npm run dev
```
Go to https://localhost:3000/ on your browser
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

Go to OpenWeather API, sign up and get your free API key.

`NEXT_PUBLIC_OPEN_WEATHER_API_KEY`

Go to GoogleCloud, create a project and generate an API key.

`NEXT_PUBLIC_GOOGLE_MAP_API_KEY`

Install web-push(it should be already installed when you install dependencies) and generate VAPID public and private keys with the following commands

`NEXT_PUBLIC_VAPID_PUBLIC_KEY`

`VAPID_PRIVATE_KEY`

```bash
  $ npm install web-push --save

  $ npx web-push generate-vapid-keys

```

Go to MongoDB create a cluster and a database

`MONGO_URI`











## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ahmet-talha-ercan/)

