import { useEffect } from 'react';
import { useGetWeatherByLocationQuery } from '../../services/weather';
import './weather-widget.css';

interface Props {
    location: string;
    handleRemoveWidget: () => void;
}

export const WeatherWidgetContainer = ({location, handleRemoveWidget}: Props) => {
    const { data, error, isLoading } = useGetWeatherByLocationQuery(location);

    const getLocalTime = (localtime: string) => localtime.split(' ')[1]
    const getWeatherClass = (text: string) => text.split(' ').join('-').toLocaleLowerCase();

    useEffect(() => {
        if (error) handleRemoveWidget()
    }, [error, handleRemoveWidget])

    return (
        <>
            {
                error ? (
                    <></>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (
                    <div className={`weatherWidget ${getWeatherClass(data.current.condition.text)}-bg`}>
                        <div className="weatherWidget__current weather">
                            <div className="weather__left">
                                <div className="weather__condition">
                                    <img src={data.current.condition.icon} alt={data.current.condition.text} loading="lazy"/>
                                    <span>{data.current.condition.text}</span>
                                </div>
                                <div className="weather__temp">
                                    {Math.trunc(data.current.temp_c)}°
                                </div>
                                <div className="weather__minmax">
                                    {
                                        `Min: ${Math.trunc(data.forecast.forecastday[0].day.mintemp_c)}° / Máx: ${Math.trunc(data.forecast.forecastday[0].day.maxtemp_c)}°`
                                    }
                                </div>
                            </div>
                            <div className="weather__right">
                                <div className="weather__date">
                                    <div className="weather__date--time">
                                        { 
                                            getLocalTime(data.location.localtime)
                                        }
                                    </div>
                                </div>
                                <div className="weather__location">
                                    {data.location.name}
                                </div>
                            </div>
                        </div>
                        <div className={`weatherWidget__footer future ${getWeatherClass(data.current.condition.text)}-footer-bg`}>
                            {
                                data.forecast.forecastday.map((day, index) => (
                                    <div className="future__item" key={index}>
                                        {new Date(day.date_epoch * 1000).toLocaleDateString('es-ES', {weekday: 'short'})}
                                        <img src={day.day.condition.icon} alt={day.day.condition.text} loading="lazy"/>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="weatherWidget__remove" onClick={handleRemoveWidget}>X</div>
                    </div>
                ) : null
            }
        </>
    )
}