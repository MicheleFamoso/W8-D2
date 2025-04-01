import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
function AlertC() {
  return (
    <Container className="mt-3">
      <Alert variant={"danger"} className=" text-center fs-2 font-monospace">
        Racconti di legami,scelte e cambiamenti .
      </Alert>
    </Container>
  );
}
export default AlertC;
