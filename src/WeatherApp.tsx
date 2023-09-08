import { useEffect, useState } from 'react';
import { AddNewLocationButton, AddNewLocation, Button, Input, WeatherWidgetContainer } from './components';
import { useWeather } from './hooks';

export const WeatherApp = () => {
    
    const [ currentLocation, setCurrentLocation ] = useState<string>('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation(`${latitude},${longitude}`);
        });
    }, [])

    const {
        addLocationForm,
        handleAddLocation,
        handleCancelLocation,
        handleChange,
        handleRemoveWidget,
        location,
        locations,
        setAddLocationForm
    } = useWeather();

    return (
        <div className='weatherApp'>
            {
                currentLocation 
                    && <WeatherWidgetContainer isCurrentLocation={true} location={currentLocation} handleRemoveWidget={()=>handleRemoveWidget(currentLocation)}/>
            }
            {
                locations ? locations.map((location: string, index: number) => (
                    <WeatherWidgetContainer isCurrentLocation={false} location={location} key={index} handleRemoveWidget={()=>handleRemoveWidget(location)}/>
                )) : null
            }
            {
                locations.length < 5 &&
                <AddNewLocation className="addLocation">
                    {
                        !addLocationForm 
                        ? <AddNewLocationButton handleClick={()=>setAddLocationForm(true)} /> 
                        : (
                            <>
                                <Input className="addLocation__input" placeholder="Add location" location={location} handleChange={handleChange} />
                                <div className="addLocation__buttons buttons">
                                    <Button className="buttons__add" text="Add" handleAddLocation={handleAddLocation}/ >
                                    <Button className="buttons__cancel" text="Cancel" handleAddLocation={handleCancelLocation}/ >
                                </div>
                            </>
                        )
                    }
                </AddNewLocation>
            }
            
        </div>
    )
}