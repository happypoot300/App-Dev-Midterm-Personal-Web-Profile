import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Style from "./../css modules/contactpage.module.css";
import { Container, Alert } from "react-bootstrap";
import { useState } from "react";
import SubmissionSuccess from "../components/SubmissionSuccess";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleClickEvent(event) {
    event.preventDefault();
    console.log("test");
    setSubmitted(true);
  }

  if (submitted) {
    console.log("testINSIDE");
    return <SubmissionSuccess name={name} email={email} message={message} />;
  }

  return (
    <Container fluid className={Style.Container}>
      <Alert variant="secondary">
        <h1>Contact Me</h1>
        <Form
          onSubmit={(event) => handleClickEvent(event, name, email, message)}
        >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label className={Style.labelSize}>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={(event) => setName(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label className={Style.labelSize}>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label className={Style.labelSize}>Message</Form.Label>
            <Form.Control
              as="textarea"
              value={message}
              placeholder="Enter message"
              cols={30}
              rows={10}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </Form.Group>
          <div className={Style.ButtonPosition}>
            <Button
              className={Style.Button}
              variant="primary"
              size="lg"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Alert>
    </Container>
  );
}
