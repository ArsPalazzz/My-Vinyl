import React from "react";
import classes from "./../sassModules/Order.module.scss";
import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AlbumItem } from "./Albums";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./../store/index";
import {addToCard, deleteFromCard} from './../store/OrderSlice'

interface OrderProps {
  // onDelete: (id: number) => void;
  key: number;
  item: AlbumItem;
}

const Order = (props: OrderProps) => {
  const dispatch = useDispatch();
 


  return (
    <div className={classes.item}>
      <Link to="/orderPage" className={classes.linkStylesAbout}>
        <img src={props.item.image} alt="albumPhoto" />
        <h2 className={classes.pInLink}>{props.item.name}</h2>
        <p>{props.item.price}</p>
      </Link>
      <BiTrash
        className={classes.deleteIcon}
        onClick={() => dispatch(deleteFromCard(props.item.id))}
      />
    </div>
  );
};

export default Order;
