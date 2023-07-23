import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { RiCoupon2Fill } from 'react-icons/ri';

import './LandingPage.css'; // Create this CSS file to add custom styles


const Home = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Retafy</h1>
        <p>Your loyalty matters. Earn points on every successful order!</p>
      </header>
      <section className="customer-retention">
        <Container>
          <Row>
            <Col md={6}>
              <h2>How it works</h2>
              <p>
                Earn points on each successful order, and redeem your points as coupon codes to use in your next purchase.
              </p>

            </Col>
            <Col md={6}>
              <RiCoupon2Fill className="coupon-icon" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="key-points">
        <Container>
          <h2>Key Points</h2>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Customer Retention</Card.Title>
                  <Card.Text>
                    Our loyalty program helps retain customers by offering rewards for their continued support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Rewards</Card.Title>
                  <Card.Text>
                    Earn points on every successful order and redeem them as coupon codes in your future purchases.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title>Boosts</Card.Title>
                  <Card.Text>
                    Special boosts and exclusive offers for our loyal customers to enhance their shopping experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Retafy. All rights reserved.</p>
        <p>
          <a href="/privacyPolicy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;