import { Col, Container, Button, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col className="text-center">
            <div className="title">FREE FILMS</div>
            <div className="title"> FOR YOU EVERYDAY</div>
            <div className="introButton mt-4">
              <Button variant="dark" href="#superhero">
                Let See More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
