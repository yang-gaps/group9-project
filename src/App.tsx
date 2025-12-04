import { useState } from "react";
import { MenuItem } from "./types/MenuItem";
import MenuList from "./components/MenuList";

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const updateMenuItem = (updated: MenuItem) => {
    setMenuItems((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-4">
      <MenuList
        items={menuItems}
        onUpdate={updateMenuItem}
        onDelete={deleteMenuItem}
      />
    </div>
  );
}

export default App;
