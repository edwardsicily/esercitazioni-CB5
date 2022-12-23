import "./Button.css";

export function Button(data) {
  const {
    content = "Click",
    className = "",
    variant = "none",
    ...otherAttributes
  } = data;

  return (
    <button
      className={`btn btn--variant-${variant} ${className}`}
      {...otherAttributes}
    >
      {content}
    </button>
  );
}
