import { useState } from "react";
import { MenuItem } from "../types/MenuItem";

interface AddMenuItemProps {
  onAdd: (item: Omit<MenuItem, "id">) => void;
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}

function AddMenuItem({ onAdd, showForm, setShowForm }: AddMenuItemProps) {
  const categories = [
    "Beverage",
    "Coffee",
    "Tea",
    "Frappes",
    "Pastry",
    "Sandwich",
    "Dessert",
    "Pasta",
    "Others",
  ];

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onAdd({
      name,
      category,
      price: Number(price)
    });

    setName("");
    setCategory("");
    setPrice("");
  };

  if (!showForm) {
    return (
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowForm(true)}
      >
        Add Menu Item
      </button>
    );
  }

  return (
    <div className="card p-3 shadow-sm mb-3">
      <h5>Add Menu Item</h5>

      <form onSubmit={handleSubmit}>

        <div className="mb-2">
          <label className="form-label">Item Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value=""></option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="mb-2">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="any"
            min="0"
            inputMode="decimal"
            required
          />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary w-50 me-2">Add Item</button>
          <button
            type="button"
            className="btn btn-secondary w-50"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddMenuItem;
