import { useState } from 'react';
import * as styles from './beer.module.css';

const Beer = (props) => {
    const {id, name, abv, ibu, description, tagline, food_pairing, first_brewed, image_url} = props;
    const [active, setActive] = useState(false);

    function showReverse() {
        setActive(!active);
    }
    return (
        <div className={`${styles.beerCard} ${active ? styles.shadow : null }`} >
            <h4>{name}</h4>
            <h6>{tagline}</h6>
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
            <img src={image_url} />
        </div>
    )
}

export default Beer;
