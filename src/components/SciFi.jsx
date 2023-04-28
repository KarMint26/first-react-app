import { Card, Col, Row, Container, Image, Button } from "react-bootstrap";
import Core from "../assets/sci-fi/Core.jpg";
import WanderingEarth from "../assets/sci-fi/WanderingEarth.jpg";
import Oblivion from "../assets/sci-fi/Oblivion.jpg";
import Film2067 from "../assets/sci-fi/2067.jpg";
import Interstellar from "../assets/sci-fi/Interstellar.jpg";
import Kin from "../assets/sci-fi/Kin.jpg";

const SciFi = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SCI-FI MOVIES</h1>
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={Core} alt="The Core" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">The Core</Card.Title>
                <Card.Text>
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
              <Image
                src={WanderingEarth}
                alt="Wandering Earth"
                className="images"
              />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">
                  The Wandering Earth
                </Card.Title>
                <Card.Text>
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
              <Image src={Oblivion} alt="Oblivion" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">Oblivion</Card.Title>
                <Card.Text>
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
              <Image src={Film2067} alt="2067 Movie" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">2067</Card.Title>
                <Card.Text>
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
              <Image src={Interstellar} alt="Interstellar" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">Interstellar</Card.Title>
                <Card.Text>
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
              <Image src={Kin} alt="Kin" className="images" />
              <div className="bg-dark px-4 py-3 text-center">
                <Card.Title className="text-center">Kin</Card.Title>
                <Card.Text>
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

export default SciFi;
