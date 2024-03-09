import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="flex justify-between text-center text-gray-400 text-sm pt-8 pb-8">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;