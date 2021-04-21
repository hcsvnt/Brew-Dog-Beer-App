import { useState } from 'react';
import * as styles from './beer.module.css';

const Beer = (props) => {
    const {id, name, abv, ibu, description, tagline, food_pairing, first_brewed, image_url} = props;
    const [active, setActive] = useState(false);

    const genericBottle = 'https://cdn.pixabay.com/photo/2014/12/22/00/04/bottle-576717_960_720.png'

    function showReverse() {
        setActive(!active);
    }
    return (
        <div className={`${styles.beerCard} ${active ? styles.shadow : null }`} >
            <h4>{name}</h4>
            <h5>{tagline}</h5>
            <p className={styles.abv}>ABV: {abv}</p>
            <p className={styles.ibu}>IBU: {ibu}</p>
            <div className={`${styles.reverse} ${active ? styles.active : null } `} onClick={showReverse}>
                <h6>{tagline}</h6>
                <div className={styles.description}>
                    <p >{description}</p>
                    <p><span>pair with: </span>{food_pairing.join(', ')}</p>
                    <p><span>first brewed: </span>{first_brewed}</p>
                </div>
            </div>
            <img src={image_url ?  image_url : genericBottle} alt={`${name} beer bottle`} width="200px" height="300px"/>
        </div>
    )
}

export default Beer;
