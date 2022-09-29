import { useState, useEffect } from 'react';

function LaunchList() {

    const [myLauch, setMyLaunch] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches?limit=5')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setMyLaunch(json)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h3>Launch list</h3>
            <div>
                {myLauch.map(singleLaunch => {
                    return (
                        <div>
                            <img src={singleLaunch.links.mission_patch_small} alt="launches" height={100} />
                            <h4>{singleLaunch.mission_name}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LaunchList