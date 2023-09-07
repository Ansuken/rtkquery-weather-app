// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const key = import.meta.env.VITE_APIKEY;
const baseUrl = 'http://api.weatherapi.com/v1';
const endpoint = 'current.json';
export const weatherApi = createApi({
    reducerPath: 'currentWeather',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getWeatherByLocation: builder.query({
            query: (location: string) => ({
                url: endpoint,
                params: {
                    key,
                    q: location,
                    aqi: 'no',
                }
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWeatherByLocationQuery } = weatherApi