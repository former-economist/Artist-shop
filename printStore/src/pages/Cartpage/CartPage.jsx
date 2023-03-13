import React, { Fragment } from "react";
import CartList from "./CartList";
import bwArmy from '../../assets/pictures/bwArmy.png'
import bwBattle from '../../assets/pictures/bwBattle.png'
import bwBegger from '../../assets/pictures/bwBeggar.png'
import bwFamine from '../../assets/pictures/bwFamine.png'
import bwFeces from '../../assets/pictures/bwFeces.png'
import bwFlaying from '../../assets/pictures/bwFlaying.png'

const intital_data = [
  {
    id: "e1",
    image: bwArmy,
    title: "untitled",
    media: "Digital print",
    price: 100,
  },
  {
    id: "e2",
    image: bwBattle,
    title: "untitled",
    media: "Digital print",
    price: 100,
  },
  {
    id: "e6",
    image: bwFlaying,
    title: "untitled",
    media: "Book",
    price: 100,
  },
];

const CartPage = () => {
  return (
    <Fragment>
      <CartList items={intital_data}/>
    </Fragment>
  )
}

export default CartPage;
