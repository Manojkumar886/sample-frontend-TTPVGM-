import './Mycss.css'
export var TableForm=()=>
{
    const sample={borderColor:'red'}
    return(
        <>
        <table style={sample}>
            <thead id='Head'>
                <tr>
                    <th>StudentName</th>
                    <th>StudentDepartment</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Manoj</td>
                    <td>BCA</td>
                </tr>
                <tr>
                    <td>Ganesh</td>
                    <td>MBA</td>
                </tr>
                <tr>
                    <td>Vishnu</td>
                    <td>MBBS</td>
                </tr>
                <tr>
                    <td>Thivin</td>
                    <td>Ph.D</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}