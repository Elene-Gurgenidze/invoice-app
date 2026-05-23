import React from 'react';
import { useNavigate } from 'react-router-dom';

const InvoiceItem = ({ invoice }) => {
  const navigate = useNavigate();

  // თარიღის ლამაზი ფორმატირება (მაგ: 19 Aug 2021)
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  // 1. თარიღის განსაზღვრა
  const displayDate = invoice.paymentDue || invoice.date || invoice.createdAt;

  // 2. კლიენტის სახელის განსაზღვრა
  const displayClient = invoice.clientName || invoice.client || 'No Name';

  // 3. უსაფრთხო თანხის გამოთვლის ლოგიკა (NaN-ის საწინააღმდეგოდ)
  const getInvoiceTotal = () => {
    // ა) თუ პირდაპირ არსებობს რიცხვითი მნიშვნელობა total ან amount
    if (invoice.total !== undefined && !isNaN(Number(invoice.total))) {
      return Number(invoice.total);
    }
    if (invoice.amount !== undefined && !isNaN(Number(invoice.amount))) {
      return Number(invoice.amount);
    }
    
    // ბ) თუ ველები არ არსებობს, მაგრამ გვაქვს items მასივი, შევაჯამოთ შიგნიდან
    if (invoice.items && Array.isArray(invoice.items) && invoice.items.length > 0) {
      return invoice.items.reduce((sum, item) => {
        const itemTotal = item.total || (Number(item.quantity || 0) * Number(item.price || 0));
        return sum + (isNaN(Number(itemTotal)) ? 0 : Number(itemTotal));
      }, 0);
    }

    // გ) უკიდურეს შემთხვევაში დავაბრუნოთ 0
    return 0;
  };

  const displayTotal = getInvoiceTotal();

  return (
    <div className="invoice-card" onClick={() => navigate(`/invoice/${invoice.id}`)}>
      <span className="inv-id">
        <span>#</span>{invoice.id}
      </span>
      
      {/* თარიღი */}
      <span className="inv-date">
        Due {formatDate(displayDate)}
      </span>
      
      {/* კლიენტის სახელი */}
      <span className="inv-client">
        {displayClient}
      </span>
      
      {/* ჯამური თანხა (ყოველთვის ვაჩვენებთ ვალიდურ ციფრს) */}
      <span className="inv-amount">
        £{displayTotal.toFixed(2)}
      </span>
      
      {/* სტატუსი */}
      <div className={`status-tag ${invoice.status || 'pending'}`}>
        <div className="status-dot"></div>
        {invoice.status ? invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1) : 'Pending'}
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