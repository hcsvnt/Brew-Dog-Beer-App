import { useState, useEffect, useContext } from 'react';
import Beer from '../beer';
// import Filters from '../filters';
import * as styles from "./beers.module.css";
// import {FilterContext} from '../filters';
 
 
 const urlBase = "https://api.punkapi.com/v2/beers";

const Beers = (props) => {
    const [beers, setBeers] = useState(['piwko', 'paliwko']);

    async function getBeers() {
        const url = urlBase + "?" + props.filters;
        console.log(url)
        const response = await fetch(url);
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
    }, [props.filters]);

    return (
        <div className={styles.beers}>
            
             
              <Beer name="dupa" />
              {beers}
              
        </div>
    )
}

export default Beers;