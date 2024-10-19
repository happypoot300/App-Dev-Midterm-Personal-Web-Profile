import Style from "./../css modules/contactpage.module.css";
import { Container, Alert } from "react-bootstrap";

export default function ContactPage(props) {
  return (
    <div className={Style.Container}>
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center"
      >
        <Alert variant="success" className="col-md-10 col-12 w-sm-auto mt-5">
          <h1>
            Thank you, {props.name}!
            <br />
            Your message has been sent!
            <br />
          </h1>
        </Alert>

        <Alert variant="success" className="col-md-10 col-12 w-sm-auto mt-5">
          <p className="text-start text-wrap">
            Name: {props.name}
            <br />
            <hr />
          </p>

          <p className="text-start text-wrap">
            Email: {props.email}
            <br />
            <hr />
          </p>

          <p className="text-start text-wrap">Message: {props.message}</p>
        </Alert>
      </Container>
    </div>
  );
}
