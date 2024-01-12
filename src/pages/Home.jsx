import React, { useState } from "react";
import FilterForm from "../components/home/FilterForm";
import products from "../components/home/products";
import SearchResultItem from "./SearchResultItem";

const Home = () => {
  const [searchProducts, setSearchProducts] = useState(products);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <div className="flex justify-end my-5 mx-3">
        {!showFilter ? (
          <button onClick={() => setShowFilter(!showFilter)} className="border border-blue-300 px-3 rounded-md">Filters</button>
        ) : (
          <FilterForm setSearchProducts={setSearchProducts} />
        )}
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-6 md:px-0 mx-auto">
          {searchProducts.map((product) => (
            <SearchResultItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
