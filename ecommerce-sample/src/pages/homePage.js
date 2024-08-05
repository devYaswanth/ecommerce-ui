import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';


function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} ml={2}/>
      <ProductList searchTerm={searchTerm} />
    </div>
  );
}

export default HomePage;
