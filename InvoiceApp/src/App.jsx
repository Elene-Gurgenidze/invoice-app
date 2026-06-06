import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'; 
import Sidebar from './components/Sidebar';
import InvoicesList from './components/InvoicesList';
import InvoiceDetails from './components/InvoiceDetails'; 
import InvoiceForm from './components/InvoiceForm';
import { ALL_INVOICES } from './data';
import './App.css';

function App() {
  const [invoices, setInvoices] = useState(() => {
    const savedInvoices = localStorage.getItem('invoices');
    return savedInvoices ? JSON.parse(savedInvoices) : ALL_INVOICES;
  });
  const [activeFilters, setActiveFilters] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  const filteredInvoices = invoices.filter(invoice => {
    if (activeFilters.length === 0) return true;
    return activeFilters.includes(invoice.status);
  });

  const handleAddInvoice = (newInvoice) => {
    setInvoices(prevInvoices => {
      const updated = [newInvoice, ...prevInvoices];
      localStorage.setItem('invoices', JSON.stringify(updated));
      return updated;
    });
    setIsFormOpen(false);
  };

  const handleDeleteInvoice = (id) => {
    setInvoices(prevInvoices => {
      const updated = prevInvoices.filter(invoice => invoice.id !== id);
      localStorage.setItem('invoices', JSON.stringify(updated));
      return updated;
    });
  };

  const handleEditInvoice = (updatedInvoice) => {
    setInvoices(prevInvoices => {
      const updated = prevInvoices.map(inv => inv.id === updatedInvoice.id ? updatedInvoice : inv);
      localStorage.setItem('invoices', JSON.stringify(updated));
      return updated;
    });
    setIsFormOpen(false);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setInvoices(prevInvoices => {
      const updated = prevInvoices.map(inv => inv.id === id ? { ...inv, status: newStatus } : inv);
      localStorage.setItem('invoices', JSON.stringify(updated));
      return updated;
    });
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
                onUpdateStatus={handleUpdateStatus}
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