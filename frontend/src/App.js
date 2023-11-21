import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/home-screen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
