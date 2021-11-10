import React from "react";
import FilterEstateType from '../filter-estate-type/FilterEstateType';
import FilterEstateMinSquare from '../filter-estate-minSquare/FilterEstateMinSquare';
import FilterEstateRoomsCount from '../filter-estate-roomsCount/FilterEstateRoomsCount';

const FilterEstate = () => {
    return (
        <div className="filter__estate">
            <FilterEstateType />
            <FilterEstateMinSquare />
            <FilterEstateRoomsCount />
        </div>
    );
};

export default FilterEstate;