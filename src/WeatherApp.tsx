
import { useGetWeatherByLocationQuery } from './services/weather';
import './WeatherApp.css';
export const WeatherApp = () => {
    const { data, error, isLoading } = useGetWeatherByLocationQuery('Madrid')
    return (
        <div className="App">
            {
                error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <>
                        <h3>{data.location.name}</h3>
                        <p>{data.current.condition.text}</p>
                    </>
                ) : null
            }
        </div>
    )
}