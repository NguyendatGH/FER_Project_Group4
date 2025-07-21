import React from 'react';
import SingleBrand from './SingleBrand';
import brandsData from './brandsData';
import '../../css/components/Brands.css';

const Brands = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <div className="flex-wrap">
          <div className="w-full">
            <div className="brands-container">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;