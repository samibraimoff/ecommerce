import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
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
