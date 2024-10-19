import { Alert, Container } from "react-bootstrap";
import Style from "./../css modules/skillspage.module.css";
export default function SkillsPage() {
  return (
    <Container fluid className={Style.Container}>
      <Alert variant="secondary" className="mt-5">
        <h1>My Skills</h1>
        <div>
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
        </div>
      </Alert>
    </Container>
  );
}
