import React from "react";
import products from "../products";
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";

const HomeScreen = () => {
  return (
    <>
      <h2>Latest products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
