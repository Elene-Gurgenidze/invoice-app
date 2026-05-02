import React, { useState } from 'react'; // აი ასე უნდა ეწეროსimport React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/InvoicesHeader';
import InvoicesList from './components/InvoicesList';
import { ALL_INVOICES } from './data';
import './App.css';

function App() {
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredInvoices = ALL_INVOICES.filter(invoice => {
    if (activeFilters.length === 0) return true;
    return activeFilters.includes(invoice.status);
  });
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header 
          count={filteredInvoices.length} 
          activeFilters={activeFilters} 
          setActiveFilters={setActiveFilters} 
        />
        
        <InvoicesList invoices={filteredInvoices} />
      </main>
    </div>
  );
}

export default App;