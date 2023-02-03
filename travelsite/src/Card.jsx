
export default function Card(props) {
return (
    
    <div className="card">
        <img src={`${props.imageUrl}`} className="card--image" />
        <div className="contentbox" >
            <div className="location">
                <h4>{props.location}</h4>
                <a href={`${props.googleMapsUrl}`} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h3>{`${props.startDate} - ${props.endDate}`}</h3>
            <p>{props.description}</p>
        </div>
    </div>

   
)
}