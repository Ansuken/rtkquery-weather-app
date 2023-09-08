import { AddNewLocationButton, AddNewLocation, Button, Input, WeatherWidgetContainer } from './components';
import { useWeather } from './hooks';

export const WeatherApp = () => {
    
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
                locations ? locations.map((location: string, index: number) => (
                    <WeatherWidgetContainer location={location} key={index} handleRemoveWidget={()=>handleRemoveWidget(location)}/>
                )) : null
            }
            {
                locations.length < 3 &&
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