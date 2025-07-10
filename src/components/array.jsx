import { useState } from "react";

export default function ArrayComponent() {
  const [searchItem, setSearchItem] = useState("");
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Reebok",
    "Under Armour",
    "New Balance",
    "Asics",
    "Skechers",
    "Fila",
    "Saucony",
  ];
  const show = brands.filter((brand) =>
    brand.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div className="flexing">
        {show.map((item, index) => (
          <div key={index} className="array">
            {item}
          </div>
        ))}
      </div>
    </>
  );
}
