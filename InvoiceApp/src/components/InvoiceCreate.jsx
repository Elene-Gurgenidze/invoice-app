import { useState } from "react";
import "../App.css";

const InvoiceCreate = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    senderStreet: "",
    senderCity: "",
    senderPostCode: "",
    senderCountry: "",
    client: "",
    email: "",
    street: "",
    city: "",
    postCode: "",
    country: "",
    date: "",
    paymentTerms: "Net 30 Days",
    description: "",
    items: [
      { name: "", qty: 1, price: 0 }
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

  const handleSaveDraft = () => {
    if (onSave) onSave({ ...form, status: "draft" });
    if (onClose) onClose();
  };

  const handleSaveSend = () => {
    if (onSave) onSave({ ...form, status: "pending" });
    if (onClose) onClose();
  };

  return (
    <div className="edit-overlay">
      <div className="edit-drawer">

        <h2>New Invoice</h2>

        <h4>Bill From</h4>
        <input
          name="senderStreet"
          value={form.senderStreet}
          onChange={handleChange}
          placeholder="Street Address"
          className="invoice-input"
        />
        <div className="row">
          <input
            name="senderCity"
            value={form.senderCity}
            onChange={handleChange}
            placeholder="City"
            className="invoice-input"
          />
          <input
            name="senderPostCode"
            value={form.senderPostCode}
            onChange={handleChange}
            placeholder="Post Code"
            className="invoice-input"
          />
          <input
            name="senderCountry"
            value={form.senderCountry}
            onChange={handleChange}
            placeholder="Country"
            className="invoice-input"
          />
        </div>

        <h4>Bill To</h4>

        <input
          name="client"
          value={form.client}
          onChange={handleChange}
          placeholder="Client Name"
          className="invoice-input"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Client Email"
          className="invoice-input"
        />
        <input
          name="street"
          value={form.street}
          onChange={handleChange}
          placeholder="Street Address"
          className="invoice-input"
        />

        <div className="row">
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="invoice-input"
          />
          <input
            name="postCode"
            value={form.postCode}
            onChange={handleChange}
            placeholder="Post Code"
            className="invoice-input"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="invoice-input"
          />
        </div>

        <div className="row">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="invoice-input"
          />
          <select
            name="paymentTerms"
            value={form.paymentTerms}
            onChange={handleChange}
            className="invoice-input"
          >
            <option>Net 1 Day</option>
            <option>Net 7 Days</option>
            <option>Net 14 Days</option>
            <option>Net 30 Days</option>
          </select>
        </div>

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Project Description"
          className="invoice-input"
        />

        <h4>Item List</h4>

        {form.items.map((item, i) => (
          <div key={i} className="item-row">
            <input
              value={item.name}
              onChange={(e) => updateItem(i, "name", e.target.value)}
              placeholder="Item Name"
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
            <span>{(item.qty * item.price).toFixed(2)}</span>
            <button onClick={() => removeItem(i)}>x</button>
          </div>
        ))}

        <button className="add-item-btn" onClick={addItem}>+ Add New Item</button>

        <div className="actions create-actions">
          <button className="discard-btn" onClick={onClose}>Discard</button>
          <div className="actions-right">
            <button className="draft-btn" onClick={handleSaveDraft}>Save as Draft</button>
            <button className="save" onClick={handleSaveSend}>Save &amp; Send</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvoiceCreate;
