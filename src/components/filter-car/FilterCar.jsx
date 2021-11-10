import React from "react";
import FilterCarYear from '../filter-car-year/FilterCarYear';
import FilterCarTransmission from '../filter-car-transmission/FilterCarTransmission';
import FilterCarBody from '../filter-car-body/FilterCarBody';

const FilterCar = () => {
    return (
        <div className="filter__car">
            <FilterCarYear />
            <FilterCarTransmission />
            <FilterCarBody />
        </div>
    );
};

export default FilterCar;
