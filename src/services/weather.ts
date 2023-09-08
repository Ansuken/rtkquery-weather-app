import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Forecast } from '../interfaces/forecast-weather.interface';

const key = '1df1706d1b734f2fa38104200230709';
const baseUrl = 'http://api.weatherapi.com/v1';

export const weatherApi = createApi({
    reducerPath: 'currentWeather',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getWeatherByLocation: builder.query<Forecast, string>({
            query: (location: string) => ({
                url: 'forecast.json',
                params: {
                    key,
                    q: location,
                    aqi: 'no',
                    days: 5,
                    alerts: 'no'
                }
            }),
        }),
    }),
})
export const { useGetWeatherByLocationQuery } = weatherApi