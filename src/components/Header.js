import React from 'react';
import Navigation from './Navigation';


export default function PortfolioContainer({currentPage, handlePageChange}) {

  return (
<header>
      {/* Pass state and handler to NavTabs */}      
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
</header>
  )
}
