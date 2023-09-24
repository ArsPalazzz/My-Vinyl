import React from "react";
import classes from "./../sassModules/Counter.module.scss";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import plus from "./../images/other/plus2.svg";
import minus from "./../images/other/minus2.svg";
import { AlbumItem } from "./Albums";

interface CounterProps {
  count: number;
  id: number;
  increase: (id: number) => void;
  decrease: (id: number) => void;
}

const Counter = ({ count, id, increase, decrease }: CounterProps) => {
  return (
    <div className={classes.counterImages}>
      <img
        onClick={() => decrease(id)}
        className={classes.minus}
        id="minus"
        src={minus}
      />
      <p data-testid="count">{count}</p>
      <img onClick={() => increase(id)} className={classes.plus} src={plus} />
    </div>
  );
};

export default Counter;
