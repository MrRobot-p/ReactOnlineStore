import React from "react";
import FilterLaptopType from '../filter-laptop-type/FilterLaptopType';
import FilterLaptopRam from '../filter-laptop-ram/FilterLaptopRam';
import FilterLaptopDiagonal from '../filter-laptop-diagonal/FilterLaptopDiagonal';
import FilterLaptopProcessor from '../filter-laptop-processor/FilterLaptopProcessor';

const FilterLaptop = () => {
    return (
        <div className="filter__laptop">
            <FilterLaptopType />
            <FilterLaptopRam />
            <FilterLaptopDiagonal />
            <FilterLaptopProcessor />
        </div>
    );
};

export default FilterLaptop;
