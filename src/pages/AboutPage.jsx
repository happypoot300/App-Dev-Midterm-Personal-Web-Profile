import { Container, Alert } from "react-bootstrap";
import Style from "./../css modules/aboutpage.module.css";

export default function AboutPage() {
  return (
    <div className={Style.Container}>
      <Container fluid className="d-flex flex-column align-items-center">
        <Alert variant="secondary" className="h-100 col-md-6 w-sm-auto mt-5">
          <h1 className="text-wrap">About Me</h1>
          <p className="text-wrap">
            Hi! My name is Rexie Ryl Nadela, A 3rd year student at Pamantasan ng
            Cabuyao currently majoring in BS Computer Science. I'm passionate
            about dissecting technology, learning how it works, and putting it
            back together.
            <br />
            <br />
            Ever since I was little, I have always been curious about how a
            computer device functions not just on the basic level but also in
            its deeper and more complex parts. My passion for dissecting and
            understanding how each component works led me to pursue my studies
            in Computer Science. Throughout my journey in PNC, I've experienced
            a lot of things such as building a simple program into a more
            complex management system, building a game using a phone, or
            managing to build this website from basic knowledge of the
            programming languages needed.
            <br />
            <br />
            Beyond academic works, I particularly enjoy 3d modeling using a
            software called Blender. It is what I do in my free time, seeking
            out objects in the real world that I could recreate and model in the
            digital world. This interest of mine has personally taught me many
            things that are valuable for my future endeavors.
          </p>
        </Alert>
      </Container>
    </div>
  );
}
