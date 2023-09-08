interface Props {
    className: string;
    placeholder: string;
    location: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({className, placeholder, location, handleChange}: Props) => {
    return (
        <input className={className} type="text" placeholder={placeholder} value={location} onChange={handleChange} />
    )
}
