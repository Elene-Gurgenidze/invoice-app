import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'; 
import Sidebar from './components/Sidebar';
import InvoicesList from './components/InvoicesList';
import InvoiceDetails from './components/InvoiceDetails'; 
import InvoiceForm from './components/InvoiceForm';
import { ALL_INVOICES } from './data';
import './App.css';

function App() {
  const [invoices, setInvoices] = useState(ALL_INVOICES);
  const [activeFilters, setActiveFilters] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const filteredInvoices = invoices.filter(invoice => {
    if (activeFilters.length === 0) return true;
    return activeFilters.includes(invoice.status);
  });

  const handleAddInvoice = (newInvoice) => {
    setInvoices(prevInvoices => [newInvoice, ...prevInvoices]);
    setIsFormOpen(false);
  };

  const handleDeleteInvoice = (id) => {
    setInvoices(prevInvoices => prevInvoices.filter(invoice => invoice.id !== id));
  };

  const handleEditInvoice = (updatedInvoice) => {
    setInvoices(prevInvoices => 
      prevInvoices.map(inv => inv.id === updatedInvoice.id ? updatedInvoice : inv)
    );
    setIsFormOpen(false);
  };

  const openNewInvoiceForm = () => {
    setSelectedInvoice(null);
    setIsFormOpen(true);
  };

  const openEditInvoiceForm = (invoice) => {
    setSelectedInvoice(invoice);
    setIsFormOpen(true);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <InvoicesList 
              invoices={filteredInvoices} 
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
              onOpenForm={openNewInvoiceForm}
            />
          } />
          <Route 
            path="/invoice/:id" 
            element={
              <InvoiceDetails 
                invoices={invoices} 
                onDeleteInvoice={handleDeleteInvoice}
                onEditInvoice={openEditInvoiceForm}
              />
            } 
          />
        </Routes>
      </main>

      <InvoiceForm 
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedInvoice(null);
        }}
        onSave={selectedInvoice ? handleEditInvoice : handleAddInvoice}
        invoice={selectedInvoice}
      />
    </div>
  );
}

export default App;