import { useState } from "react";

export const useWeather = () => {
    const [locations, setLocations] = useState(JSON.parse(localStorage.getItem('locations') || '[]'));
    const [location, setLocation] = useState('');
    const [addLocationForm, setAddLocationForm] = useState(false);
    
    const handleAddLocation = () => {
        setLocations([...locations, location]);
        setLocation('');
        setAddLocationForm(false);
        localStorage.setItem('locations', JSON.stringify([...locations, location]));
    }

    const handleRemoveWidget = (location: string) => {
        setLocations(locations.filter((loc: string) => loc !== location));
        localStorage.setItem('locations', JSON.stringify(locations.filter((loc: string) => loc !== location)));
    }

    const handleCancelLocation = () => {
        setLocation('');
        setAddLocationForm(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
    }

    return {
        addLocationForm,
        handleAddLocation,
        handleCancelLocation,
        handleChange,
        handleRemoveWidget,
        location,
        locations,
        setAddLocationForm
    }
}