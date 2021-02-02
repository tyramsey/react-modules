import React from 'react';

import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


const FunctionalComponentDemo = () => {
    return (
        <Container className='main'>
            <Row>
                <Col xs='12'>
            
                <h1>Functional Component</h1>
                <p>Functional components are the primary tool in React to build a small, modular piece of your page..</p>
                <dl>
                    <dt>Can use state </dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword </dt>
                    <dd>Older class components use 'this', function components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, function components can peform side effects with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside.</dd>
                </dl>
                <h1>Functional Syntax versus Arrow Function</h1>
                </Col>
            </Row>
            <hr/>
            <h1>Challenge</h1>
            <Row>
                <Col md='6'>
                    <HelloWorldFatArrow className='logo' />
                </Col>
                <Col md='6'>
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
    return(
        <div>
            <Card>
                <img width="100%" height='280px' src="https://i.ytimg.com/vi/BwAakFVUV8/maxresdefault.jpg" alt="Card Caption"/>
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function () </pre>.</CardText>
                    <Button>Go somewhere</Button>
                </CardBody>
            </Card>
        </div>
    )
};

const HelloWorldFatArrow = () => 
    <div>
        <Card>
        <img width="100%" height='280px' src="https://i.ytimg.com/vi/BwAakFVUV8/maxresdefault.jpg" alt="Card Caption"/>
            <CardBody>
                <CardTitle>Fat Arrow</CardTitle>
                <CardSubtitle>A Js Library</CardSubtitle>
                <CardText><pre>const HelloWorld = () arrow</pre>.</CardText>
                <Button> Go somewhere...</Button>
            </CardBody>
        </Card>
    </div>