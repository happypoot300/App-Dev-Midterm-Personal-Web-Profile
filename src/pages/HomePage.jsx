import { Container, Alert, Row, Col } from "react-bootstrap";
import Style from "./../css modules/homepage.module.css";

export default function HomePage() {
  return (
    <div className={Style.Container}>
      <Container fluid className="d-flex flex-column align-items-center">
        <Alert variant="secondary" className="h-100 w-md-50 w-sm-10 mt-5 mb-5">
          <h1 className="text-wrap">Welcome to My Profile!</h1>
          <hr />
        </Alert>
        <Alert variant="secondary" className="w-10 h-100 ">
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
    </div>
  );
}
