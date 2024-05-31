import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Question({ question, answer, furtherInfo, onAnswerChange, onNext, onPrevious, isLast, onSubmit }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onAnswerChange(question.id, value, furtherInfo);
  };

  const handleFurtherInfoChange = (e) => {
    const { value } = e.target;
    onAnswerChange(question.id, answer, value);
  };

  return (
    <Container className='question-container'>
      <Row>
        <Col>
          <h2>{question.text}</h2>
          <Form>
            {question.options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                name="answer"
                label={option}
                value={option}
                checked={answer === option}
                onChange={handleChange}
              />
            ))}
            {question.options.includes('Other (please specify)') && (
              <Form.Group controlId="furtherInfo">
                <Form.Label>Further Information</Form.Label>
                <Form.Control
                  type="text"
                  value={furtherInfo}
                  onChange={handleFurtherInfoChange}
                />
              </Form.Group>
            )}
            <div className="d-flex justify-content-between mt-4">
              <Button variant="secondary" onClick={onPrevious} disabled={question.id === 1}>
                Previous
              </Button>
              {!isLast ? (
                <Button variant="primary" onClick={onNext}>
                  Next
                </Button>
              ) : (
                <Button variant="success" onClick={onSubmit}>
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Question;

