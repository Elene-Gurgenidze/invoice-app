import React from 'react';

const InvoiceItem = ({ invoice }) => {
  return (
    <div className="invoice-card">
      <span className="inv-id">
        <span>#</span>{invoice.id}
      </span>
      <span className="inv-date">Due {invoice.date}</span>
      <span className="inv-client">{invoice.client}</span>
      <span className="inv-amount">£{invoice.amount}</span>
      
      <div className={`status-tag ${invoice.status}`}>
        <div className="status-dot"></div>
        {invoice.status}
      </div>
      
<button className="purple-arrow-btn">
    {'>'}
</button>    </div>
  );
};

export default InvoiceItem;