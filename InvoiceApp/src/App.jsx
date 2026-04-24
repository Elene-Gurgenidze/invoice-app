import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/InvoicesHeader';
import InvoicesList from './components/InvoicesList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <InvoicesList />
      </main>
    </div>
  );
}

export default App;