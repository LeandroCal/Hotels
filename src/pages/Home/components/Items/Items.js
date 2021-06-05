import React, { useEffect, useState } from 'react';
import { items } from '../../../../services/data';
import { filter } from '../../../../utils/Functions';
import Item from '../../../../components/Item';
import './Items.scss';

const Items = ({filters}) => {
  const [filteredItems, setFilteredItems] = useState(items);
  
  useEffect(() => {
    setFilteredItems(filter(items, filters));
  }, [filters]);

  return (
    <div className="items">
      {filteredItems?.map(item => (
        <div key={item.id} className="items-item">
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default Items;
