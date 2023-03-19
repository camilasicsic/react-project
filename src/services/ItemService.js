
import { db } from "./Firebase";
import { collection, doc, query, where, writeBatch, addDoc } from "firebase/firestore";

export const getItems = (category) => {
  return category ? query(collection(db, "ItemList"), where("category", "==", category), where("stock", "!=", 0)) : query(collection(db, "ItemList"), where("stock", "!=", 0));
}

export const getItemList = () => {
  return collection(db, "ItemList");
}

export const addItem = (item) => {
  const itemList = getItemList();
  return addDoc(itemList, item);
}

export const getItem = (itemId) => {
  return doc(db, "ItemList", itemId);
}

export const updateStock = async (cartItems) => {
  const batch = writeBatch(db);
  cartItems.forEach((item) => {
    batch.update(
      getItem(item.id),
      { 'stock': item.stock - item.quantity }
    );
  });
  await batch.commit();
};