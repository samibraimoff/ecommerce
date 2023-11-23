import { Col, Row } from "react-bootstrap";
import Product from "../components/product";
import { useGetProductsQuery } from "../slices/product-api-slice";

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.error}</p>
      ) : (
        <>
          <h2>Latest products</h2>
          <Row>
            {products?.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
