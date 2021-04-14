import { useState, useEffect } from 'react';
import Beer from '../beer';
import Filters from '../filters';
import * as styles from "./beers.module.css";
 
 
const urlBase = "https://api.punkapi.com/v2/beers";

const Beers = () => {

    const [beers, setBeers] = useState(['piwko', 'paliwko']);

    const [optionsABV, setOptionsABV] = useState("");
    const [optionsIBU, setOptionsIBU] = useState("");

    useEffect(() => {
        getBeers()
    }, [optionsABV, optionsIBU])

    async function getBeers() {
        const url = urlBase + "?" + optionsABV + "&" + optionsIBU;
        const response = await fetch(url);
        const data = await response.json();
        makeBeerArr(data)
    }

    function makeBeerArr(data) {
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
    }
        
    function switchABV(e) {
        const value = e.target.value;
        let options = ""
        
        switch (value) {
            case "all":
                options = "";
                break;
            case "weak":
                options = "abv_lt=4.6";
                break;
            case "medium":
                options = "abv_gt=4.5&abv_lt=7.6";
                break;
            case "strong":
                options = "abv_gt=7.5";
                break;
        }
        
        setOptionsABV(options);
    }

    function switchIBU(e) {
        const value = e.target.value;
        let options = ""
        
        switch (value) {
            case "all":
                options = "";
                break;
            case "weak":
                options = "ibu_lt=35";
                break;
            case "medium":
                options = "ibu_gt=34&ibu_lt=75";
                break;
            case "strong":
                options = "ibu_gt=74";
                break;
        }
        
        setOptionsIBU(options);
    }

    function setABV(e) {
        switchABV(e)
    }

    function setIBU(e) {
        switchIBU(e)
    }


    return (
        <div className={styles.beers}>
            
            <Filters setABV={setABV} setIBU={setIBU} />
            <Beer name="dupa" />
            {beers}
              
        </div>
    )
}

export default Beers;