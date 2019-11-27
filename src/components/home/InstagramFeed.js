import React, { Component } from "react";
import { Col, NavLink } from "reactstrap";
import InstagramCardRow from "../common/InstagramCardRow";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 0 5rem;
  }
`;

const ColoredCol = styled(Col)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const Hr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const InstaLink = styled(NavLink)`
  && {
    padding: 0 1rem;
    color: #0984e3;
  }
`;

export default class InstagramFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingPosts: true,
      hasError: false,
      posts: []
    };
  }

  getPosts = async () => {
    return await axios.get("https://www.instagram.com/peaceofmindmassage/");
  };

  componentDidMount = () => {
    this.getPosts()
      .then(res => {
        const response = res.data
          .match(
            /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
          )[1]
          .slice(0, -1);
        const json = JSON.parse(response);

        if (json) {
          let posts = [];
          let data = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
            0,
            12
          );

          for (let post of data) {
            const node = post.node;

            if (
              node.__typename &&
              node.__typename === "GraphImage" &&
              node.__typename === "GraphSidecar"
            ) {
              continue;
            }

            posts.push({
              id: node.id,
              xs: 12,
              md: 6,
              lg: 4,
              xl: 2,
              image: node.thumbnail_resources[4].src,
              likes: node.edge_liked_by.count,
              caption: node.edge_media_to_caption.edges[0].node.text,
              link: `https://www.instagram.com/p/${node.shortcode}`
            });
          }

          if (posts.length > 6) {
            posts = posts.slice(0, 6);
          }

          this.setState({
            isLoadingPosts: false,
            posts: posts
          });
        }
      })
      .catch(error => {
        console.log("An error occurred fetching the posts!" + error);

        this.setState({
          hasError: true
        });
      });
  };

  render() {
    const { isLoadingPosts, posts } = this.state;

    return (
      <MainContainer className="w-100">
        <ColoredCol xs={12} className="text-center">
          <h1 className="text-center">Follow us on Instagram!</h1>
          <Hr />

          {isLoadingPosts ? (
            <h4>Loading @peaceofmindmassage posts...</h4>
          ) : (
            <div className="mt-5">
              <p className="d-inline">
                Some of the latest from{" "}
                <InstaLink
                  className="d-inline p-0"
                  href="https://www.instagram.com/peaceofmindmassage/"
                  target="_blank"
                >
                  @peaceofmindmassage
                </InstaLink>
              </p>
              <InstagramCardRow posts={posts} />
            </div>
          )}
        </ColoredCol>
      </MainContainer>
    );
  }
}
