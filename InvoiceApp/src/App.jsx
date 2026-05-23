import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'; 
import Sidebar from './components/Sidebar';
import Header from './components/InvoicesHeader';
import InvoicesList from './components/InvoicesList';
import InvoiceDetails from './components/InvoiceDetails'; 
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
        <Routes>
          <Route path="/" element={
            <>
              <Header 
                count={filteredInvoices.length} 
                activeFilters={activeFilters} 
                setActiveFilters={setActiveFilters} 
              />
              <InvoicesList invoices={filteredInvoices} />
            </>
          } />
          <Route path="/invoice/:id" element={<InvoiceDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;