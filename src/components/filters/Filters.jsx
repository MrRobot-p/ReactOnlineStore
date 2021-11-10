import React from "react";
import FilterEstate from '../filter-estate/FilterEstate';
import FilterCamera from '../filter-camera/FilterCamera';
import FilterLaptop from '../filter-laptop/FilterLaptop';
import FilterCar from '../filter-car/FilterCar';
import FilterSlider from '../filter-slider/FilterSlider';
import FilterCategories from '../filter-categories/FilterCategories';

const Filters = () => {
     return (
        <section className="onlineshop-app__filter filter">
            <h2 className="title filter__title">Фильтр</h2>
            <form className="filter__form" action="#" method="post">
                <FilterCategories />
                <FilterSlider />
                <FilterEstate />
                <button className="button filter__button" type="submit">Показать</button>
            </form>
        </section>
    );
};

export default Filters;