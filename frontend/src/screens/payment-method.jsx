import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../components/form-container";
import CheckoutSteps from "../components/checkout-steps";
import { savePaymentMethod } from "../slices/cart-slice";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const { shippingAddress } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="paymentMethod" className="my-4">
          <Form.Label>Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              id="PayPal"
              label="PayPal or Credit card"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
            />
          </Col>
        </Form.Group>
        <Button type="submit" className="my-3">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentMethod;
