import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Dashboard= ({people}) => {
    return (
      <Container className="mt-3 currency">
        <Row>
          <Col key="d" className="d-flex justify-content-around mt-3" lg={2}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>CAD</Card.Title>
                  <Card.Text>Rate: 0.9255</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col key="d" className="d-flex justify-content-around mt-3" lg={2}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>CAD</Card.Title>
                  <Card.Text>Rate: 0.9255</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col key="d" className="d-flex justify-content-around mt-3" lg={2}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>CAD</Card.Title>
                  <Card.Text>Rate: 0.9255</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col key="d" className="d-flex justify-content-around mt-3" lg={2}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>CAD</Card.Title>
                  <Card.Text>Rate: 0.9255</Card.Text>
                </Card.Body>
              </Card>
          </Col>
          <Col key="d" className="d-flex justify-content-around mt-3" lg={2}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>CAD</Card.Title>
                  <Card.Text>Rate: 0.9255</Card.Text>
                </Card.Body>
              </Card>
          </Col>          <Col key="d" className="d-flex justify-content-around mt-3" lg={2}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>CAD</Card.Title>
                  <Card.Text>Rate: 0.9255</Card.Text>
                </Card.Body>
              </Card>
          </Col>
        </Row>
      </Container>
    )
  }
  
  export default Dashboard