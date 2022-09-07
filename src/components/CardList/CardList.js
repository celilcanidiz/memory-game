import Card from "../Card/Card";

import { useSelector } from "react-redux";

function CardList() {
  const cards = useSelector((state) => state.cards.items);

  return (
    <div className="row my-3 gap-2 justify-content-center">
      {cards.map((card) => (
        <Card
          key={card.id}
          itemID={card.id}
          src={card.img}
          name={card.name}
          isOpen={card.isOpen}
          isMatched={card.isMatched}
        />
      ))}
    </div>
  );
}

export default CardList;