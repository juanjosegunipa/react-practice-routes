import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CountriesList() {

    const [countriesArray, setCountriesArray] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(json => setCountriesArray(json))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>Hey from countries list</h1>
            {
                countriesArray.map(singleCountry => {
                    return (
                        <div>
                            <h4>{singleCountry.name.common}</h4>
                            {/* <img src={singleCountry.flags.png} alt="flags" /> */}
                            <Link to={`/countries/${singleCountry.cca3}`}>See data for {singleCountry.cca3}</Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CountriesList