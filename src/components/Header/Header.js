import { useSelector } from "react-redux";
import './Header.sass';

function Header() {
  const score = useSelector((state) => state.cards.score);
  const isOver = useSelector((state) => state.cards.isOver);

  return (
    <div className="header">
      {isOver ? (
        <button className="header__button">Play Again!</button>
      ) : (
        <span className="header__score">Score: {score}</span>
        
      )}
      <button className="header__button">Restart!</button>
    </div>
  );
}

export default Header;