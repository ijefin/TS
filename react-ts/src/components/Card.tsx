import React from "react";

interface ICard {
  cardId: number;
  stack: string;
  menu: string;
}

export const Card = ({ cardId, stack, menu }: ICard) => {
  return (
    <React.Fragment>
      <h1>Im a {cardId}</h1>
      <p>I talk about {stack}</p>
      <p>{menu}</p>
    </React.Fragment>
  );
};
