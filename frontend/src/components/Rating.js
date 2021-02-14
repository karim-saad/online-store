import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <Row className="Rating">
      <Col xs lg="1">
        <FontAwesomeIcon
          className="Star"
          icon={rating >= 1 ? faStar : rating >= 0.5 ? faStarHalf : faEmptyStar}
        />
      </Col>
      <Col xs lg="1">
        <FontAwesomeIcon
          className="Star"
          icon={rating >= 2 ? faStar : rating >= 1.5 ? faStarHalf : faEmptyStar}
        />
      </Col>
      <Col xs lg="1">
        <FontAwesomeIcon
          className="Star"
          icon={rating >= 3 ? faStar : rating >= 2.5 ? faStarHalf : faEmptyStar}
        />
      </Col>
      <Col xs lg="1">
        <FontAwesomeIcon
          className="Star"
          icon={rating >= 4 ? faStar : rating >= 3.5 ? faStarHalf : faEmptyStar}
        />
      </Col>
      <Col xs lg="1">
        <FontAwesomeIcon
          className="Star"
          icon={rating >= 5 ? faStar : rating >= 4.5 ? faStarHalf : faEmptyStar}
        />
      </Col>
      <Col>{numReviews} reviews</Col>
    </Row>
  );
}
