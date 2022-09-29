import { useState, useEffect } from 'react';

function BeerList(props) {

    const [myBeers, setMyBeers] = useState([]);

    useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?page=3&per_page=10')
            .then(res => res.json())
            .then(json => setMyBeers(json))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h3>Beer List</h3>
            <div>
                <h5>Prop From App.js</h5>
                <p>{props.myValue}</p>
                <button onClick={() => props.setMyValue(props.myValue + 1)}>+</button>
            </div>
            {myBeers.map(singleBeer => {
                return (
                    <div>
                        <img src={singleBeer.image_url} alt={singleBeer.name} height={100} />
                        <p>{singleBeer.name}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BeerList;