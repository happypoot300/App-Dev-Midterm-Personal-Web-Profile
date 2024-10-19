import { Alert, Container } from "react-bootstrap";
import Style from "./../css modules/skillspage.module.css";
export default function SkillsPage() {
  return (
    <div className={Style.Container}>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Alert variant="secondary" className="col-sm-3 w-sm-auto mt-5">
          <h1>My Skills</h1>

          <Container fluid className="d-flex flex-column align-items-center">
            <div className={Style.Skills}>
              <ul className={Style.liSize}>
                <li>JavaScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
              <div className={Style.Skills}>
                <ul className={Style.liSize}>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>Laravel</li>
                  <li>Java</li>
                </ul>
              </div>
              <div className={Style.Skills}>
                <ul className={Style.liSize}>
                  <li>Lua</li>
                  <li>Phyton</li>
                  <li>C</li>
                  <li>C++</li>
                </ul>
              </div>
            </div>
          </Container>
        </Alert>
      </Container>
    </div>
  );
}
