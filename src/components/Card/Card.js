import { add, check } from "../../redux/Slice/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import './Card.sass';
function Card({ itemID, name, src, isOpen, isMatched }) {
  const dispatch = useDispatch();
  const flippedCards = useSelector((state) => state.cards.flippedCards);

  const classSelector = () => {
    if (isMatched) {
      return "mycard matched";
    } else if (isOpen) {
      return "mycard opened";
    }

    return "mycard";
  };

  const clickHandle = () => {
    if (flippedCards.length !== 2) {
      dispatch(add(itemID));
    }

    if (flippedCards.length === 1) {
      setTimeout(() => {
        dispatch(check());
      }, 500);
    }
  };

  return (
    <div className="col-6 col-sm-5 col-md-3 col-lg-2">
      <div className={classSelector()} onClick={() => clickHandle()}>
        <div className="front">?</div>
        <div className="back">
          <img src={src} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default Card;