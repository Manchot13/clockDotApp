import React, { useState } from "react";

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export const Slider = () => {
  const [values, setValues] = useState([20, 50]); // Initialize with min and initial value
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(1000);
  const handleStyle = {
    width: 10,
    height: 10,
    borderRadius: 0,
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Col>
            <RangeSlider
              values={values} // Use values prop
              onChange={(values) => setValues(values)} // Update values state directly
              max={max}
              min={min}
              handleStyle={handleStyle}
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Slider;
