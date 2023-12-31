import React from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

export const Sample = () => {

    const [ value, setValue ] = React.useState(50);
    const [ value1, setValue1 ] = React.useState(30);
    const [ value2, setValue2 ] = React.useState(30);
    const [ value3, setValue3 ] = React.useState(30);
    const [ value4, setValue4 ] = React.useState(30);
    const [ value5, setValue5 ] = React.useState(70);
    const [ value6, setValue6 ] = React.useState(70);
    const [ value7, setValue7 ] = React.useState(70);
    const [ value8, setValue8 ] = React.useState(70);

    return (
        <div>
            <RangeSlider
            value={value}
            onChange={e => setValue(Number(e.target.value))}
            />
            <Form>
            <Form.Group>
                <Col xs="9">
                <RangeSlider
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />        
                </Col>
                <Col xs="3">
                <Form.Control value={value}/>
                </Col>
            </Form.Group>
            </Form>
            <Form>
            <Form.Group>
                <Col xs="3">
                <RangeSlider
                    value={value1}
                    onChange={e => setValue1(Number(e.target.value))}
                    variant='primary'
                />        
                </Col>
                <Col xs="3">
                <RangeSlider
                    value={value2}
                    onChange={e => setValue2(Number(e.target.value))}
                    variant='secondary'
                />    
                </Col>
                <Col xs="3">
                <RangeSlider
                    value={value3}
                    onChange={e => setValue3(Number(e.target.value))}
                    variant='success'
                />        
                </Col>
                <Col xs="3">
                <RangeSlider
                    value={value4}
                    onChange={e => setValue4(Number(e.target.value))}
                    variant='danger'
                />    
                </Col>
            </Form.Group>
            <Form.Group>
                <Col xs="3">
                <RangeSlider
                    value={value5}
                    onChange={e => setValue5(Number(e.target.value))}
                    variant='warning'
                />        
                </Col>
                <Col xs="3">
                <RangeSlider
                    value={value6}
                    onChange={e => setValue6(Number(e.target.value))}
                    variant='info'
                />    
                </Col>
                <Col xs="3">
                <RangeSlider
                    value={value7}
                    onChange={e => setValue7(Number(e.target.value))}
                    variant='dark'
                />        
                </Col>
                <Col xs="3">
                <RangeSlider
                    value={value8}
                    onChange={e => setValue8(Number(e.target.value))}
                    variant='light'
                />    
                </Col>
            </Form.Group>
            </Form>
        </div>
    )
}

export default Sample