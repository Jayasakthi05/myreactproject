function Card(object) {
    return(
        <div className="Card">
            <h3>Student Card</h3>
            <p><b>Name:</b>{object.name}</p>
            <p><b>Dept:</b>{object.dept}</p>
            <p><b>Year:</b>{object.year}</p>
        </div>
    )
}

export default Card;