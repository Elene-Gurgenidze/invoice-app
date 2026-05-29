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
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1l4 4-4 4" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/>
        </svg>
      </button>
    </div>
  );
};

export default InvoiceItem;
