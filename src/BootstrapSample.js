import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let SamplebootstrapExample=()=>
{
    const Connect=()=>
    {
        alert('apple is mostly recommanded for all people')
    }
    return(
        <>
        <link src="Mycss.css" rel="stylesheet"></link>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
        </table>
        <button className="btn btn-outline-success text-dark" onClick={Connect}>Apple<i class="bi bi-apple"></i></button>
        </>
    )
}