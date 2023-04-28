import { Card, Col, Row, Container, Image, Button } from "react-bootstrap";
import Spiderman from "../assets/superhero/Spiderman.png";
import darkNight from "../assets/superhero/DarkNight.jpg";
import AntMan from "../assets/superhero/AntMan.jpg";
import Hulk from "../assets/superhero/Hulk.jpg";
import SangChi from "../assets/superhero/SangChi.jpg";
import Thor from "../assets/superhero/Thor.jpeg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={Spiderman} alt="Spiderman" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">
                  The Amazing Spiderman
                </Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Watch Now</Button>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={darkNight} alt="Dark Night" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">The Dark Night</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Watch Now</Button>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={AntMan} alt="AntMan" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">AntMan</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Watch Now</Button>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={Hulk} alt="Hulk" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">Hulk</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Watch Now</Button>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={SangChi} alt="SangChi" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">Sang-Chi</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Watch Now</Button>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={Thor} alt="Thor" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">Thor</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="danger">Watch Now</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
