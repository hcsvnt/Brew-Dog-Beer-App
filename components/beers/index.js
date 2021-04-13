import { useState, useEffect } from 'react';
import Beer from '../beer';
import * as styles from "./beers.module.css";
 
 
 const urlBase = "https://api.punkapi.com/v2/beers";

const Beers = () => {
    const [beers, setBeers] = useState(['piwko', 'paliwko']);

    async function getBeers() {
        const response = await fetch(urlBase);
        const data = await response.json();
    
        const beerArr = data.map(beer => {
            const {id, name, abv, ibu, description, tagline, food_pairing, first_brewed, image_url} = beer;
            return <Beer 
                    key={id} 
                    name={name} 
                    tagline={tagline}
                    abv={abv} 
                    ibu={ibu} 
                    description={description} 
                    food_pairing={food_pairing}
                    first_brewed={first_brewed}
                    image_url={image_url}
                    />;
            } 
        )

        setBeers(beerArr)
        console.log(data[0])
        }

    useEffect(() => {
        getBeers()
    }, []);

    return (
        <div className={styles.beers}>
            
             
              <Beer name="dupa" />
              {beers}
              
        </div>
    )
}

export default Beers;