import React from 'react';
import usePaintings from '../../hooks/usePaintings';
import './Product.css';
import Products from './Products';
import SearchProducts from './SearchProducts';

const Shop = () => {
  const { paintings, searchResults, handleSearchChange } = usePaintings();

  return (
    <div className='main-search-div'>
      <div className='productCard_container'>
        {
          paintings.map((painting) => (
            <Products
              key={painting.id}
              paintingData={painting}
            />
          ))
        }
      </div>
      <div className='position_sticky'>
        <div className='search-area'>
          <h2 >Find your painting </h2>
          <p> Here Total {paintings.length} paintings </p>
          <input
            onChange={handleSearchChange}
            type="text"
            style={{ border: '5px solid #aad5e8', padding: '10px 10px', margin: '20px', borderRadius: '7px', width: '80%', fontSize: '20px' }}
            placeholder='Search' />
        </div>
        <div className='search-result-area'>
          {
            searchResults.map((painting) => (
              <SearchProducts
                key={painting.id}
                paintingData={painting}
              />
            )).slice(0, 3)
          }
        </div>
      </div>
    </div>
  );
}

export default Shop;