import React, { useState, createContext, useContext } from 'react';
import * as styles from './filters.module.css';

const Filters = () => {
    const [ABVfilter, setABVFilter] = useState("");

    let optionsABV = "";

    function filterABV(e) {
        const value = e.target.value;
        console.log(value)
        
        
        switch (value) {
            case "all":
                optionsABV = "";
                break;
            case "weak":
                optionsABV = "abv_lt=4.6";
                break;
            case "medium":
                optionsABV = "abv_gt=4.5&abv_lt=7.6";
                break;
            case "strong":
                optionsABV = "abv_gt=7.5";
                break;
        }
        
        setABVFilter(optionsABV);
        console.log(`filter = ${ABVfilter}`);
    }

    const FilterContext = React.createContext(ABVfilter);

    return (
        <div className={styles.container}>
            <p>filters go here</p>
            
            <div className={styles.filter}>
                <p>ABV</p>
                <form id="filterABV" className={styles.filter__form} onChange={filterABV}>
                    <label>
                    <input
                        type="radio"
                        name="filter-abv"
                        className={styles.filter__all}
                        id="abvAll"
                        value="all"
                        // checked
                    />
                    <span className={styles.filter__all}>All</span>
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="filter-abv"
                        // class="beer"
                        id="abvWeak"
                        value="weak"
                    />
                    <span>weak</span>
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="filter-abv"
                        // class="beer"
                        id="abvMedium"
                        value="medium"
                    />
                    <span>medium</span>
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="filter-abv"
                        // class="beer"
                        id="abvStrong"
                        value="strong"
                    />
                    <span>strong</span>
                    </label>
                </form>
            </div>
            <div className={styles.filter}>
                <p>IBU</p>
                <form id="filterIBU" className={styles.filter__form}>
                    <label>
                    <input
                        type="radio"
                        name="filter-ibu"
                        className={styles.filter__all}
                        id="ibuAll"
                        value="all"
                        // checked
                    />
                    <span className={styles.filter__all}>All</span>
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="filter-ibu"
                        // class="beer"
                        id="ibuWeak"
                        value="weak"
                    />
                    <span>weak</span>
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="filter-ibu"
                        // class="beer"
                        id="ibuMedium"
                        value="medium"
                    />
                    <span>medium</span>
                    </label>
                    <label>
                    <input
                        type="radio"
                        name="filter-ibu"
                        // class="beer"
                        id="ibuStrong"
                        value="strong"
                    />
                    <span>strong</span>
                    </label>
                </form>
            </div>
            <div className={styles.filter__text}>
              <p>Page: <span id="pageNumber"></span></p>
            </div>
            <div className={styles.filter}>
              <button id="prevPage" className={styles.page__btn} disabled>
                {/* <i class="far fa-caret-square-left"></i> */}
                <span>left</span>
              </button>
              <button id="nextPage" className={styles.page__btn}>
                {/* <i class="far fa-caret-square-right"></i> */}
                <span>right</span>
              </button>
            </div>

            


        </div>
    )
}

export default Filters;