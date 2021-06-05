import React, { useState } from 'react';
import CheckboxGroup from '../../../../components/FormFields/CheckboxGroup';
import Select from '../../../../components/FormFields/Select';
import { cities, countries, brands } from '../../../../services/data';
import { updateArray } from '../../../../utils/Functions';

const CustomFilters = ({filters, setFilters}) => {
    const [selectedCities, setSelectedCities] = useState(filters.cities);
    const formDefaultValues = {
        brand: [],
        country: '',
        city: ''
    };

    const onHandleChange = (e) => {
        if (e.target.name === 'brand') {
            const selectedBrands = updateArray(filters.brand, e.target.value, e.target.checked);
            setFilters({...filters, brand: selectedBrands});
        }
        else setFilters({...filters, [e.target.name]: e.target.value});

        if (e.target.name === 'country') {
            setSelectedCities(cities.filter(city => city.country === e.target.value || city.value === ''));
        }
    };

    const resetFilters = (e) => {
        e.preventDefault();
        setFilters(formDefaultValues);
        setSelectedCities(cities);
    };

  return (
    <div className="custom-filters">
      <form>
          <CheckboxGroup
            name="brand"
            label="Filter by brand"
            onChange={onHandleChange}
            selectedBrands={filters.brand}
            options={brands || []}
          />
          <Select
            name="country"
            options={countries || []}
            value={filters.country}
            onChange={onHandleChange}
            label="Filter by country"
            />
          <Select
            name="city"
            options={selectedCities || []}
            value={!filters.country || selectedCities.length === 0 ? '' : filters.cities}
            onChange={onHandleChange}
            disabled={!filters.country || selectedCities.length === 1}
            label="Filter by city"
            />
            <div className="reset" onClick={resetFilters}>
                Clear filters
            </div>
        </form>
    </div>
  );
};

export default CustomFilters;
