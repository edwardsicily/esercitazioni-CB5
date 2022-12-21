import "./Text.css";

const variantObj = {
  body: "text-md",
  text: "text-xl mb-sm",
};

export function Text(props) {
  const { as = "div", variant = "body", content = "default" } = props;
  const Elem = as;
  return <Elem className={`Text ${variantObj[variant] ?? ""}`}>{content}</Elem>;
}
