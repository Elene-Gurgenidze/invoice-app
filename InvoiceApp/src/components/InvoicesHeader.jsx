import React from 'react';
import { useState } from 'react';

const InvoicesHeader = ({ count = 0 }) => {
  const [filterType, setFilterType] = useState("");

  return (
    <header className="invoices-header">
      <div className="header-text">
        <h1 className="header-title">Invoices</h1>
        <p className="header-subtitle">
          {count > 0 ? `There are ${count} total invoices` : 'No invoices'}
        </p>
      </div>

      <div className="header-controls">
        <div className="filter-dropdown">
          <span className="filter-text">Filter by status</span>
          {/* <select id="select" className="filter-option" name="status" onClick={console.log(event.target.value)}>
            <option value=" "></option>
            <option value="draft">draft</option>
            <option value="paid">paid</option>
            <option value="pending">pending</option> 
          </select> */}
          <svg width="11" height="7" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/>
          </svg>
        </div>

        <button className="new-invoice-btn">
          <div className="plus-icon-container">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.313 10.035v-3.722h3.722V4.313H6.313V.591H4.313v3.722H.591v2h3.722v3.722h2z" fill="#7C5DFA" fillRule="nonzero"/>
            </svg>
          </div>
          <span className="btn-text">New Invoice</span>
        </button>
      </div>
    </header>
  );
};

export default InvoicesHeader;