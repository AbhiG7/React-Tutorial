function ListGroup() {
    const items = ['New York', 'San Fransisco', 'Boston', 'Los Angeles', 'Seattle'];
    return (
        <>
            <h1>List Group</h1>
            <ul className="list-group">
                {items.map(item => <li key={item}>{item}</li>)}
                {/* <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li> */}
            </ul>
        </>
    );
}

export default ListGroup;