import React, { useState } from "react";

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export const Slider = (props :any) => {
   const [value, setValue] = useState(props.size);
   const [min, setMin] = useState(20);
   const [max, setMax] = useState(1000);

   const CheckChange = (props :any) => {
      // 親コンポーネントから受け取った関数を使って、inputの値を渡す
      const handleInputChange = (event :any) => {
        const value = event.target.value;
        props.handleValueChange(value);
      };
   }  

   return (
      <div>
         <Form>
            <Form.Group>
               <Col>
                  <RangeSlider
                     value={value}
                     onChange={e => setValue(Number(e.target.value))}
                     max={max}
                     min={min}
                     variant='warning'
                  />
               </Col>
            </Form.Group>
         </Form>
      </div>
   );
};

export default Slider;
