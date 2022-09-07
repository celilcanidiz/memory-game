import { useSelector, useDispatch } from "react-redux";
import { start } from "../../redux/Slice/cardSlice";
// import './Modal.sass';

function Modal() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.cards.score);
  const isOver = useSelector((state) => state.cards.isOver);
  const isHidden = useSelector((state) => state.cards.modalHidden);

  const handleStart = () => {
    dispatch(start());
  };

  return (
    <div className={isHidden ? "modal" : "modal d-block"}>
      <div className="modal-dialog modal-dialog-centered">
        {!isOver ? (
          <div className="modal-content">
            <div className="modal-body text-center">
              <p className="txt-modal">Welcome 👋</p>
              <span>Press the button to start.</span>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-modal"
                data-bs-dismiss="modal"
                onClick={handleStart}
              >
                Start the game
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-content">
            <div className="modal-body text-center">
              <p className="txt-modal">Your score is {score}.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-modal"
                data-bs-dismiss="modal"
                onClick={handleStart}
              >
                Play again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;