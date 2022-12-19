import { useReducer } from "react";
import { cards } from "../data/general";
import { CardItem } from "./CardItem";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === payload
            ? {
                ...card,
                item: card.item + 1,
                totalPrice: card.totalPrice + card.price,
              }
            : { ...card }
        ),
      };
    }
    case "DEC": {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === payload
            ? {
                ...card,
                item: card.item - 1,
                totalPrice: card.totalPrice - card.price,
              }
            : { ...card }
        ),
      };
    }
    default: {
      return state;
    }
  }
};
export const CardList = () => {
  const [state, dispatch] = useReducer(reducer, { cards });
  const increasePriceHandler = (id) => {
    dispatch({ type: "ADD", payload: id });
  };
  const decreasePriceHandler = (id) => {
    dispatch({ type: "DEC", payload: id });
  };
  return (
    <div>
      {state.cards.map((card) => {
        return (
          <CardItem
            key={card.id}
            {...card}
            onIncreasePrice={increasePriceHandler}
            onDecrease={decreasePriceHandler}
          />
        );
      })}
    </div>
  );
};
