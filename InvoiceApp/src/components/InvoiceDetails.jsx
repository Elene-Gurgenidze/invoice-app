import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ALL_INVOICES } from '../data';

const InvoiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const invoice = ALL_INVOICES.find(inv => inv.id === id);

  if (!invoice) return <div>Invoice not found</div>;

  return (
    <div className="invoice-view">
      <button className="go-back" onClick={() => navigate('/')}>
        Go back
      </button>

      <div className="details-header">
        <div className="status-box">
          <span>Status</span>
          <div className={`status-tag ${invoice.status}`}>
            <div className="status-dot"></div>
            {invoice.status}
          </div>
        </div>
        <div className="action-buttons">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
          <button className="paid-btn">Mark as Paid</button>
        </div>
      </div>

      <div className="details-content">
        <div className="top-section">
          <div>
            <h1><span>#</span>{invoice.id}</h1>
            <p style={{color: '#7e88c3'}}>Graphic Design</p>
          </div>
          <div className="sender-address">
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>

        <div className="middle-section">
          <div className="dates">
            <div style={{marginBottom: '30px'}}>
              <span>Invoice Date</span>
              <p>{invoice.date}</p>
            </div>
            <div>
              <span>Payment Due</span>
              <p>20 Sep 2021</p>
            </div>
          </div>
          <div className="bill-to">
            <span>Bill To</span>
            <p>{invoice.client}</p>
            <div className="client-address">
              <p>84 Church Way</p>
              <p>Bradford</p>
              <p>BD1 9PB</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="sent-to">
            <span>Sent to</span>
            <p>alexgrim@mail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;