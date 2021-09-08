import "./button.scoped.css";

function button(props) {
  return (
    <button
      href={props.href}
      className={`coolBeans ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default button;
