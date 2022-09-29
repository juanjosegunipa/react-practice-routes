import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../logo.svg';

function CountryPage() {

    const { countryCode } = useParams();

    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            .then(res => res.json())
            .then(json => setCountryData(json[0]))
            .catch(err => console.log(err))
    }, [countryCode])

    return (
        <div>
            {countryData ? (
                <div>
                    <h2>{countryData.name.common}</h2>
                    <p>Country code: {countryData.cca3}</p>
                    <p>Capital: {countryData.capital[0]}</p>
                    <img src={countryData.flags.png} alt="flags" height={100} />


                </div>
            ) : (
                <div>
                    <img src={logo} alt="logo" className='App-logo' />
                </div>
            )}
        </div>
    );
}

export default CountryPage