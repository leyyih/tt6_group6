import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const rate = [
  {
    "id": 1,
    "base_currency": "SGD",
    "exchange_currency": "CAD",
    "rate": 0.9255
  },
  {
    "id": 2,
    "base_currency": "SGD",
    "exchange_currency": "CNH",
    "rate": 4.7868
  },
  {
    "id": 3,
    "base_currency": "SGD",
    "exchange_currency": "EUR",
    "rate": 0.7086
  },
  {
    "id": 4,
    "base_currency": "SGD",
    "exchange_currency": "HKD",
    "rate": 5.5830
  },
  {
    "id": 5,
    "base_currency": "SGD",
    "exchange_currency": "JPY",
    "rate": 97.5303
  },
  {
    "id": 6,
    "base_currency": "SGD",
    "exchange_currency": "NZD",
    "rate": 1.1612
  },
  {
    "id": 7,
    "base_currency": "SGD",
    "exchange_currency": "NOK",
    "rate": 7.2912
  },
  {
    "id": 8,
    "base_currency": "SGD",
    "exchange_currency": "GBP",
    "rate": 0.5974
  },
  {
    "id": 9,
    "base_currency": "SGD",
    "exchange_currency": "SEK",
    "rate": 7.5168
  },
  {
    "id": 10,
    "base_currency": "SGD",
    "exchange_currency": "THB",
    "rate": 25.7275
  },
  {
    "id": 11,
    "base_currency": "SGD",
    "exchange_currency": "USD",
    "rate": 0.7113
  }
]

const Dashboard= ({}) => {
    return (
      <Container className="mt-3 exchange">
        <h2>Base Currency SGD</h2>
        <Row>
        {rate.map((each) => (
          <Col key={each.id} className="d-flex justify-content-around mt-3" lg={2} md={3} sm={6}>
            <Card style={{ width: '18rem', backgroundColor:'rgb(248, 240, 212)', borderColor:'white'}}>
              <Card.Body>
                <Card.Title>{each.exchange_currency}</Card.Title>
                <Card.Text>Rate: {each.rate}</Card.Text>
              </Card.Body>
            </Card>
          </Col>

        ))
        }


        </Row>
      </Container>
    )
  }
  
  export default Dashboard