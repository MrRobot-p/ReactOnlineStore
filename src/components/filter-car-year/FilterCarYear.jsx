import React from "react";

const FilterCarYear = () => {
    return (
        <div className="filter__select-wrapper">
            <label htmlFor="resolution-video">Минимальный год выпуска</label>
            <select id="car_year" name="car_year">
                <option value="1900" defaultValue>1900</option>
                <option value="1940">1940</option>
                <option value="1960">1960</option>
                <option value="1980">1980</option>
                <option value="2000">2000</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
            </svg>
        </div>
    );
};

export default FilterCarYear;
