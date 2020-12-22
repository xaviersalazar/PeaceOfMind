import React from "react";
import { Row } from "reactstrap";
import { InstagramCard } from "./InstagramCard";

export const InstagramCardRow = ({ posts }) => (
  <Row className="justify-content-center mt-3">
    {posts.map((post) => {
      return (
        <InstagramCard
          key={post.id}
          xs={post.xs}
          sm={post.sm}
          md={post.md}
          lg={post.lg}
          xl={post.xl}
          image={post.image}
          caption={post.caption}
          likes={post.likes}
          link={post.link}
        />
      );
    })}
  </Row>
);
