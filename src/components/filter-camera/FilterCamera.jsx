import React from "react";
import FilterCameraType from '../filter-camera-type/FilterCameraType';
import FilterCameraMatrix from '../filter-camera-matrix/FilterCameraMatrix';
import FilterCameraVideo from '../filter-camera-video/FilterCameraVideo';


const FilterCamera = () => {
    return (
        <div className="filter__camera">
            <FilterCameraType />
            <FilterCameraMatrix />
            <FilterCameraVideo />
        </div>
    );
};

export default FilterCamera;