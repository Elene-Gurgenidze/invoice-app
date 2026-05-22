import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/InvoicesHeader';
import InvoicesList from './components/InvoicesList';
import { ALL_INVOICES } from './data';
import InvoiceEdit from './components/invoiceEdit';
import InvoiceCreate from './components/InvoiceCreate';
import './App.css';

function App() {
  const [activeFilters, setActiveFilters] = useState([]);

  const filteredInvoices = ALL_INVOICES.filter(invoice => {
    if (activeFilters.length === 0) return true;
    return activeFilters.includes(invoice.status);
  });

  const [isEditing, setIsEditing] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header
          count={filteredInvoices.length}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
          onNewInvoice={() => setIsCreating(true)}
        />

        <InvoicesList invoices={filteredInvoices} />

        {isEditing && (
          <InvoiceEdit
            invoice={selectedInvoice}
            onClose={() => setIsEditing(false)}
          />
        )}

        {isCreating && (
          <InvoiceCreate
            onClose={() => setIsCreating(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
