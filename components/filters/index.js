import { WeakABVSVG,
        MediumABVSVG,
        StrongABVSVG,
        WeakIBUSVG,
        MediumIBUSVG,
        StrongIBUSVG, } from '../svg'
import * as styles from './filters.module.css';

const Filters = (props) => {

    const {page, beers} = props;

    let prevDisabled = false;
    let nextDisabled = false;

    function isDisabled() {
        if(page === 1) {
        prevDisabled = true;
        } else {
        prevDisabled= false;
        }

        if(beers.length < 25) {
        nextDisabled = true;
        } else {
        nextDisabled = false;
        }
    }

    isDisabled()

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.filter}>
                    <p className={styles.filter__label} >ABV</p>
                    <form id="filterABV" className={styles.filter__form} onChange={props.setABV}>
                        <label>
                        <input
                            type="radio"
                            name="filter-abv"
                            className={styles.filter__all}
                            id="abvAll"
                            value="all"
                            defaultChecked
                        />
                        <span className={styles.filter__all}>all</span>
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="filter-abv"
                            className="radioABV"
                            id="abvWeak"
                            value="weak"
                        />
                        <WeakABVSVG/>
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="filter-abv"
                            className="radioABV"
                            id="abvMedium"
                            value="medium"
                        />
                        <MediumABVSVG />
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="filter-abv"
                            className="radioABV"
                            id="abvStrong"
                            value="strong"
                        />
                        <StrongABVSVG />
                        </label>
                    </form>
                </div>
                <div className={styles.filter}>
                    <p className={styles.filter__label}>IBU</p>
                    <form id="filterIBU" className={styles.filter__form} onChange={props.setIBU}>
                        <label>
                        <input
                            type="radio"
                            name="filter-ibu"
                            className={styles.filter__all}
                            id="ibuAll"
                            value="all"
                            defaultChecked                        />
                        <span className={styles.filter__all}>all</span>
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="filter-ibu"
                            className="radioIBU"
                            id="ibuWeak"
                            value="weak"
                        />
                        <WeakIBUSVG />
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="filter-ibu"
                            className="radioIBU"
                            id="ibuMedium"
                            value="medium"
                        />
                        <MediumIBUSVG />
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="filter-ibu"
                            className="radioIBU"
                            id="ibuStrong"
                            value="strong"
                        />
                        <StrongIBUSVG />
                        </label>
                    </form>
                </div>
                <div className={styles.filter__pages}>
                    <div className={styles.filter__text}>
                    <p>Page: <span id="pageNumber">{page}</span></p>
                    </div>
                    <div >
                    <button id="prevPage" className={styles.page__btn} onClick={props.prevPage} 
                    disabled={prevDisabled}
                    >
                        {/* <i class="far fa-caret-square-left"></i> */}
                        <span>prev</span>
                    </button>
                    <button id="nextPage" className={styles.page__btn} onClick={props.nextPage} disabled={nextDisabled}>
                        {/* <i class="far fa-caret-square-right"></i> */}
                        <span>next</span>
                    </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filters;


