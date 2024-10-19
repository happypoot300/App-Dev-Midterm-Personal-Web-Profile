import Style from "./../css modules/contactpage.module.css";
import { Container, Alert } from "react-bootstrap";

export default function ContactPage(props) {
  return (
    <Container fluid className={Style.Container}>
      <Alert variant="success" className="mb-5">
        <h1>
          Thank you, {props.name}!
          <br />
          Your message has been sent!
          <br />
        </h1>
      </Alert>

      <Alert variant="success">
        <h1 className="text-start">
          Name: {props.name}
          <br />
          <hr />
        </h1>

        <h1 className="text-start">
          Email: {props.email}
          <br />
          <hr />
        </h1>

        <h1 className="text-start">Message: {props.message}</h1>
      </Alert>
    </Container>
  );
}
