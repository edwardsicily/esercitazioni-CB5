import "./Button.css";

export function Button() {
  const log = () => {
    console.log("Hello World");
  };
  return (
    <button className="btn" onClick={log}>
      Click Me!
    </button>
  );
}
