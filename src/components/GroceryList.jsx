import { useState } from "react";
import Item from "./Item";

export default function GroceryList({ items, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState('input');
  
    function handleSortChange(e) {
      setSortBy(e.target.value);
    }
  
    let sortedItems;
  
    switch (sortBy) {
      case 'name':
        sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
        break;
  
      case 'checked':
        sortedItems = [...items].sort((a, b) => (a.checked ? -1 : 1));
        break;
  
      default:
        sortedItems = items;
        break;
    }
  
    return (
      <>
        <div className="list">
          <ul>
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            ))}
          </ul>
        </div>
  
        <div className="actions">
          <select value={sortBy} onChange={handleSortChange}>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
          </select>
          <button onClick={onClearItems}>Bersihkan Daftar</button>
        </div>
      </>
    );
  }