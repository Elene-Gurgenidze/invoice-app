import React from 'react'; 
import InvoiceItem from './InvoiceItem';

const InvoicesList = ({ invoices }) => { 
  if (!invoices || !Array.isArray(invoices)) {
    return <div>Loading...</div>;
  }

  return (
    <div className="invoices-list">
      {invoices.map((invoice) => (
        <InvoiceItem key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
};

export default InvoicesList;