import "./layout.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import { TodoList } from "../todolist/TodoList";
export function Layout(props) {
  const { children, tohide = true } = props;

  return (
    <>
      <Header />
      <TodoList />
      {tohide ? <Footer /> : null}
    </>
  );
}
