import { Container, Alert } from "react-bootstrap";
import Style from "./../css modules/homepage.module.css";

export default function HomePage() {
  return (
    <Container fluid className={Style.Container}>
      <Alert variant="secondary">
        <h1>Welcome to My Profile!</h1>
        <hr />
      </Alert>

      <Alert variant="secondary">
        <p>
          Hello, I’m Rexie Ryl Nadela. A passionate tech enthusiast and a
          surreal art lover. <br />
          In my spare time, I dive into the world of 3D art. <br />
          It is where I express my ideas and recreate objects
          <br />
          bringing them to the digital space.
        </p>
      </Alert>
    </Container>
  );
}
