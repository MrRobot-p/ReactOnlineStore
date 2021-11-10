import Header from '../header/Header';
import Filters from '../filters/Filters';
import CatalogList from '../catalog-list/CatalogList';

const App = (props) => {
  console.log(props.cards);
  return (
    <section className="onlineshop-app">
          <Header />
          <div className="onlineshop-app__wrapper">
            <Filters />
            <CatalogList cards={props.cards}/>
          </div>
        </section>
  );
}

export default App;
