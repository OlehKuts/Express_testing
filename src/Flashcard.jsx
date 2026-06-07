export const Flashcard = ({ flashcard, flip }) => {
  const { question, correct, id } = flashcard;
  return (
    <div className={`card ${flip ? "flip" : ""}`}>
      <div className="front">
        <div className="cardHeader">Запитання {id + 1} / 5</div>
        {question}
      </div>
      <div className="back">{correct}</div>
    </div>
  );
};
