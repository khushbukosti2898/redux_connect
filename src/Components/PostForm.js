import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import {post} from '../Actions'
import { connect } from 'react-redux';

class PostForm extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title,
            message
        }
        this.props.dispatch(post(data));
        this.getTitle.value = '';
        this.getMessage.value = '';
        console.log(data)
    }
    render() {
        return (<><Form class>
            <h3>Create Post</h3>
            <Row>
                <Col md={4}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Post Title" ref={(input) => this.getTitle = input} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows="3" placeholder="Enter Post" ref={(input) => this.getMessage = input} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Button variant="primary" onClick={this.handleClick}>Submit</Button>
                </Col>
            </Row>


        </Form></>)
    }
}

const select = state => state;



export default connect(select)(PostForm);