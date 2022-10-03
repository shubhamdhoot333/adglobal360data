import { getPostUser, deletePost } from "../service/api";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useCookies } from "react-cookie";
import { Card, Row, Col, Container } from "react-bootstrap";
function BlogView() {
  const [post, setPost] = useState("");
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies(["user"]);
  let token_value = cookies.jwtoken;
  useEffect(() => {
    Postdata();
  }, []);
  const Postdata = async () => {
    let res = await getPostUser(token_value);
    console.log(res);
    setPost(res);
  };
  const doter = (string, limit) => {
    return string.length > limit ? string.substring(0, limit) + "..." : string;
  };

  const deletePosts = async (id) => {
    console.log(">>", id);
    let res = await deletePost(id);
    console.log(res);
    Postdata();
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
                      View Post
                    </Button>
                    <Button
                      variant="primary"
                      className="mx-5"
                      onClick={() => {
                        deletePosts(value._id);
                      }}
                    >
                      Delete Post
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

export default BlogView;
