interface Props {
    handleClick: () => void
}
export const AddNewLocationButton = ({handleClick}: Props) => {
    return (
        <div className="addLocation__div" onClick={handleClick}>Add New</div>
    )
}
