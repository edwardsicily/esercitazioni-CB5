import "./header.scss";
import LogoIpsum from "../../../public/logo.svg";
import { Button } from "../../atoms/button/Button";
export function Header() {
  const arr = [
    {
      label: "Home",
      href: "#Home",
      id: 0,
    },
    { label: "About", href: "#About", id: 1 },
    { label: "Contacts", href: "#Contacts", id: 2 },
  ];
  return (
    <header className="header">
      <img src={LogoIpsum} alt="" className="logo" />
      <nav className="navbar">
        <ul role="menu">
          {arr.map((item) => {
            return (
              <li key={item.id} role="menuitem">
                <a href={item.href}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="auth">
        <Button content="Log In" variant="primary"></Button>
        <Button content="Sign Up" variant="primary"></Button>
      </div>
    </header>
  );
}
