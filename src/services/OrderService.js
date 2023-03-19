import { db } from './Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
export const getOrderList = () => {
  return collection(db, 'Orders');
};

const getReadyOrder = (cartItems, user) => {
  const cartOrderedItems = cartItems.map((item) => {
    return {
      price: item.price,
      quantity: item.quantity,
      id: item.id,
      name: item.name,
    };
  });
  return {
    buyer: user,
    items: cartOrderedItems,
    date: Timestamp.fromDate(new Date()),
    total: cartItems.reduce((acc, curr) => curr.quantity * curr.price + acc, 0),
  };
};

export const addOrder = (cartItems, user) => {
  const orderToAdd = getReadyOrder(cartItems,user);
  const orderList = getOrderList();
  return addDoc(orderList, orderToAdd);
};
