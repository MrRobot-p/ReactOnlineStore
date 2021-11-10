import React from "react";

const FilterCameraMatrix = () => {
    return (
        <div className="filter__select-wrapper filter__select-wrapper--min-resolution">
            <label htmlFor="resolution-matrix">Минимальное разрешение матрицы</label>
            <select id="resolution-matrix" name="resolution-matrix">
                <option value="1mp" defaultValue>1 МП</option>
                <option value="3mp">3 МП</option>
                <option value="5mp">5 МП</option>
                <option value="7mp">7 МП</option>
                <option value="10mp">10 МП</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
            </svg>
        </div>
    );
};

export default FilterCameraMatrix;
