import React, { useState } from 'react';
import CustomFilters from './components/CustomFilters';
import Items from './components/Items';
import './Home.scss';

const Home = () => {
  const formDefaultValues = {
    brand: [],
    country: '',
    city: ''
  };
  const [filters, setFilters] = useState(formDefaultValues);

  return (
    <div className="home">
      <div className="home-filters">
        <CustomFilters filters={filters} setFilters={setFilters}/>
      </div>
      <div className="home-items">
        <Items filters={filters}/>
      </div>
    </div>
  );
};

export default Home;