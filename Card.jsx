import "../css/card.css";

export default function Card() {
  return (
    <div className="container">
      <div className="left">
        <div className="title">course</div>
        <div className="txt">
          <h3>javaScript FUndamentals</h3>
        </div>
        <button className="chapters">view all chapters ➡</button>
      </div>
      <div className="right">
        <div className="top">
          <p>CHAPTER 4</p>
          <div className="counter"></div>
        </div>
        <div className="right-title">Callbacks & closures</div>
        <button className="continue">Continue</button>
      </div>
    </div>
  );
}
