import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Container } from 'react-bootstrap'

function Blog() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('https://api.spaceflightnewsapi.net/v3/blogs')
            .then((response) => response.json())
            .then((items) => {
                // console.log('render')
                setArticles(items)
            })
    }

    // console.log(articles)

    return (
        <Card style={{ marginLeft: '5rem', marginTop: '3rem', marginBottom: '2rem', width: '65%', height: '100%', borderRadius: '10px' }}
            text={"light"} bg={"success"}>
            <Container style={{ padding: '50px' }}>

                <div  >
                    <h2 className="blog-title" >Blog Page</h2>
                    {
                        articles.map((item, index) => {
                            const { id, title, url, imageUrl, summary } = item;
                            // console.log(imageUrl)

                            return (
                                <h4 key={id} style={{ marginBottom: '20px' }}>
                                    <Link to={{
                                        pathname: `/blog/${id}`,
                                        state: { articles: item, },
                                    }}
                                        style={{ textDecoration: 'none', color: 'white' }}>
                                        Article: <span style={{ color: 'yellow', fontSize: '1.4rem' }}>{title} </span>
                                    </Link>
                                </h4>
                            )
                        })
                    }
                </div>
            </Container>

        </Card>






    )
}

export default Blog
