import "./layout.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
export function Layout(props) {
  const { children, tohide = true } = props;
  return (
    <>
      <Header />
      <main className="main">
        <div className="wrapper">
          <Text content="Mostra console" as="h2" />
          <Text content="Clicka i bottoni" />
          <div className="btns">
            <Button
              onClick={() =>
                console.log("HTML non è un linguaggio di programmazione")
              }
              variant="primary"
              className="main-btn"
            />
            <Button
              onClick={() =>
                console.log(
                  "JS è il miglior ed il peggior linguaggio per iniziare a programmare"
                )
              }
              variant="primary"
              className="main-btn"
            />
            <Button
              onClick={() => console.log("CSS is awesome")}
              variant="primary"
              className="main-btn"
            />
          </div>
        </div>
      </main>
      {tohide ? <Footer /> : null}
    </>
  );
}
