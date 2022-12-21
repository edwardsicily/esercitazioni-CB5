import "./Button.css";

export function Button(data) {
  const log = () => {
    console.log(data);
  };
  const { className = "", variant = "none", ...otherAttributes } = data;

  return (
    <button
      className={`btn btn--variant-${variant} ${className}`}
      {...otherAttributes}
    >
      Click
    </button>
  );
}
