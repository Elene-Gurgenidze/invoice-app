import { useState } from "react";
import "../App.css";

const InvoiceEdit = ({ invoice, onClose }) => {
  const [form, setForm] = useState({
    client: invoice.client,
    email: "",
    street: "",
    city: "",
    postCode: "",
    country: "",
    date: invoice.date,
    status: invoice.status,
    items: [
      { name: "Banner Design", qty: 1, price: 156 },
      { name: "Email Design", qty: 2, price: 200 }
    ]
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateItem = (index, field, value) => {
    const updated = [...form.items];
    updated[index][field] = value;
    setForm({ ...form, items: updated });
  };

  const addItem = () => {
    setForm({
      ...form,
      items: [...form.items, { name: "", qty: 1, price: 0 }]
    });
  };

  const removeItem = (index) => {
    setForm({
      ...form,
      items: form.items.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="edit-overlay">
      <div className="edit-drawer">

        <h2>Edit #{invoice.id}</h2>

        <h4>Bill From</h4>
        <input placeholder="Street Address" className="invoice-input" />
        <div className="row">
          <input placeholder="City" className="invoice-input" />
          <input placeholder="Post Code" className="invoice-input" />
          <input placeholder="Country" className="invoice-input" />
        </div>

        <h4>Bill To</h4>

          <input
            name="client"
            value={form.client}
            onChange={handleChange}
            placeholder="Client Name"
            className="invoice-input"
          />
          <br />
          <input placeholder="Client Email" className="invoice-input" />
          <input placeholder="Street Address" className="invoice-input" />

        <div className="row">
          <input placeholder="City" className="invoice-input" />
          <input placeholder="Post Code" className="invoice-input" />
          <input placeholder="Country" className="invoice-input" />
        </div>

        <div className="row">
          <input type="date" className="invoice-input"/>
          <select className="invoice-input">
            <option>Net 30 Days</option>
            <option>Net 7 Days</option>
            <option>Net 1 Day</option>
          </select>
        </div>

        <input placeholder="Project Description" className="invoice-input" />

        <h4>Item List</h4>

        {form.items.map((item, i) => (
          <div key={i} className="item-row">
            <input
              value={item.name}
              onChange={(e) => updateItem(i, "name", e.target.value)}
              className="invoice-input"
            />
            <input
              type="number"
              value={item.qty}
              onChange={(e) => updateItem(i, "qty", e.target.value)}
              className="invoice-input"
            />
            <input
              type="number"
              value={item.price}
              onChange={(e) => updateItem(i, "price", e.target.value)}
              className="invoice-input"
            />
            <span>{item.qty * item.price}</span>
            <button onClick={() => removeItem(i)}>x</button>
          </div>
        ))}

        <button onClick={addItem}>+ Add New Item</button>


        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button className="save">Save Changes</button>
        </div>

      </div>
    </div>
  );
};

export default InvoiceEdit;