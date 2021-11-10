import React from "react";
import SortingForm from '../sorting-form/SortingForm';
import CardsList from '../cards-list/CardsList';
import Pagination from '../pagination/Pagination';
import FavoritesEmpty from '../favorites-empty/FavoritesEmpty';

const CatalogList = (props) => {
    return (
        <section className="onlineshop-app__results results">
          <SortingForm />
          <CardsList cards={props.cards}/>
          <Pagination />
        </section>
    );
};

export default CatalogList;