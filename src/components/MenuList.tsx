import { MenuItem } from "../types/MenuItem";

interface MenuListProps {
  items: MenuItem[];
  onUpdate: (item: MenuItem) => void;
  onDelete: (id: string) => void;
}

function MenuList({ items, onUpdate, onDelete }: MenuListProps) {
  return (
    <div className="card p-3 shadow-sm">
      <h5>Menu List</h5>

      <div className="table-responsive">
        <table className="table table-striped table-bordered mt-2 w-100">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price(₱)</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-muted">
                  No items added yet.
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => onUpdate(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuList;
