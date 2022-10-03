import { getPost } from "../service/api";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Row, Col, Container } from "react-bootstrap";
function PostView() {
  const [post, setPost] = useState("");
  useEffect(() => {
    Postdata();
  }, []);
  const Postdata = async () => {
    let res = await getPost();
    console.log(res);
    setPost(res);
  };
  const doter = (string, limit) => {
    return string.length > limit ? string.substring(0, limit) + "..." : string;
  };
  return (
    <>
      <Container>
        <Row className="mt-5">
          {post &&
            post.data.map((value, index) => (
              <Col key={index} xs={12} md={4} lg={4}>
                <Card className="mt-5" key={index}>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8000/images/${value.photo}`}
                    style={{ height: "12rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{value.heading}</Card.Title>
                    <Card.Text className="h6">
                      {doter(value.data, 100)}
                    </Card.Text>

                    <Button href={`/fullpost/${value._id}`} variant="primary">
                      Read Full
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}

export default PostView;
