function ButtonOnClick({ event, text }) {
  return (
    <div>
      <button onClick={event}>{text}</button>
    </div>
  );
}

export default ButtonOnClick;
