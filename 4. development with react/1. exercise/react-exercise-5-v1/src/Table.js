function Table({ mentors }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>House</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {mentors.length === 0 ? (
                    <tr>
                        <td>Data not available</td>
                        <td>Data not available</td>
                        <td>Data not available</td>
                    </tr>
                ) : (
                    mentors.map((item) => (
                        <tr key={item.id} style={{ backgroundColor: item.id % 2 === 0 ? `white` : "lightCyan" }}>
                            <td>{item.name}</td>
                            <td>{item.house}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}

export default Table;
