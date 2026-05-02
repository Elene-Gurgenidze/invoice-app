import React from 'react'; // 👈 გამოიყენე import და არა require
import InvoiceItem from './InvoiceItem';

const InvoicesList = ({ invoices }) => { // 👈 ფიგურული ფრჩხილები აუცილებელია
  // უსაფრთხოებისთვის, რომ map-მა შეცდომა არ ამოაგდოს
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