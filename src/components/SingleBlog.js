import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const SingleBlog = (props) => {
    const id = props.location.state.articles.id
    const title = props.location.state.articles.title
    const url = props.location.state.articles.url
    const imageUrl = props.location.state.articles.imageUrl
    const summary = props.location.state.articles.summary

    console.log(imageUrl)
    return (
        <Card style={{ marginLeft: '4rem', marginTop: '1rem', marginBottom: '2rem', width: '38rem' }} bg={"secondary"}
            text={"light"}>
            <Col xs={6} md={8}>
                <Card.Img variant="bottom" src={imageUrl} style={{ marginLeft: '6rem', marginBottom: '1rem', marginTop: '2rem', borderRadius: '10px' }}
                    className="text-center" />
            </Col>

            <Card.Title style={{ paddingLeft: '30px', paddingRight: '30px' }} >
                <h4>Id:{id}</h4>
                <h3>Title: {title}</h3>
            </Card.Title>
            <Card.Text style={{ paddingLeft: '30px', paddingRight: '30px' }} >
                <p>Single Blog Summary: {summary}</p>
            </Card.Text>

            <Link to="/blog">
                <Button variant="success" style={{ width: '8rem', marginLeft: '14rem', marginBottom: '1.5rem' }}> Back</Button>
            </Link>

        </Card>
    );
}

export default SingleBlog;
