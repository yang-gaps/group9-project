import { useState } from "react";
import AddMenuItem from "./components/AddMenuItem";
import MenuList from "./components/MenuList";
import EditMenuItem from "./components/EditMenuItem";
import { MenuItem } from "./types/MenuItem";

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);

  const addMenuItem = (item: Omit<MenuItem, "id">) => {
    const newItem: MenuItem = { id: crypto.randomUUID(), ...item };
    setMenuItems([...menuItems, newItem]);
    setShowAddForm(false);
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    setMenuItems(prev =>
      prev.map(item => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditingItem(null);
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Café Menu Management System</h2>

      {showAddForm && !editingItem && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <AddMenuItem
              onAdd={addMenuItem}
              showForm={showAddForm}
              setShowForm={setShowAddForm}
            />
          </div>
        </div>
      )}

      {editingItem && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-6">
            <EditMenuItem
              item={editingItem}
              onUpdate={updateMenuItem}
              onClose={() => setEditingItem(null)}
            />
          </div>
        </div>
      )}

      {!showAddForm && !editingItem && (
        <>
          <div className="row justify-content-center mb-2">
            <div className="col-md-10 d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => setShowAddForm(true)}>
                Add Menu Item
              </button>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-10">
              <MenuList
                items={menuItems}
                onUpdate={(item) => setEditingItem(item)}
                onDelete={deleteMenuItem}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default App;