import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Ecommerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
