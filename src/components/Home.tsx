// Home.tsx

import { Container, Row, Col, Button } from "react-bootstrap";
import { Typewriter } from 'react-simple-typewriter';

import "./Home.css";

const Home: React.FC = () => {

  return (
    <Container fluid className="p-0">
      {/* Home Section */}
      <section
        id="home"
        className="text-center d-flex flex-column justify-content-center align-items-center home-section"
      >
        <h1 className="text-dark" style={{ fontSize: "10rem" }}>
        <span className="light-purple">Puppod-Webdev</span>
        </h1>
        <h1>
        <span style={{ color: '#6448E3', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[ "Manav Khanvilkar",
            "Soham Salunke",
            "Emily Wang",
            "Andrew Kang",
            "Whoever else i missed"]}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
        <Row className="justify-content-center mt-4">
          <Col className="d-flex justify-content-center mb-6">
            <Button
              href="https://www.linkedin.com/in/manav-khanvilkar/"
              className="light-purple-button custom-button-long"
            >
              Button Example
            </Button>
          </Col>
        </Row>  
      </section>
    </Container>
  );
};

export default Home;