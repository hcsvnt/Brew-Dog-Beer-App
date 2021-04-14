import * as styles from './beer.module.css';

const Beer = (props) => {
    const {id, name, abv, ibu, description, tagline, food_pairing, first_brewed, image_url} = props;
    return (
        <div className={styles.beer}>
            <h4>{name}</h4>
            <h6>{tagline}</h6>
            <p className={styles.abv}>ABV: {abv}</p>
            <p className={styles.ibu}>IBU: {ibu}</p>
            <div className={styles.reverse}>
                <h3>{name}</h3>
                <h6>{tagline}</h6>
                <p>{description}</p>
                <p>{food_pairing}</p>
                <p>{first_brewed}</p>
            </div>
            <img src={image_url} />
        </div>
    )
}

export default Beer;
