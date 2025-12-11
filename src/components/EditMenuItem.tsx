import { useState } from "react";
import { MenuItem } from "../types/MenuItem";

interface EditMenuItemProps {
  item: MenuItem;
  onUpdate: (item: MenuItem) => void;
  onClose: () => void;
}

function EditMenuItem({ item, onUpdate, onClose }: EditMenuItemProps) {
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

  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(item.price.toString());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onUpdate({
      ...item,
      name,
      category,
      price: Number(price),
    });
  };

  return (
    <div className="card p-3 shadow-sm mb-3">
      <h5>Edit Menu Item</h5>

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
          <button className="btn btn-primary w-50 me-2">Save Changes</button>

          <button
            type="button"
            className="btn btn-secondary w-50"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}
export default EditMenuItem;
