interface Props { 
    className: string;
    handleAddLocation: () => void;
    text: string;
}
export const Button = ({handleAddLocation, className, text}: Props) => {
    return (
        <button className={className} onClick={handleAddLocation}>{text}</button>
    )
}
