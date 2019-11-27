import React, { Component } from "react";
import { Col, Card, CardImg, CardImgOverlay } from "reactstrap";
import styled from "styled-components";

const InstagramCardMain = styled(Card)`
  && {
    height: 100%;
    border-radius: 8px;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
  }
`;

const InstagramCardImage = styled(CardImg)`
  && {
    border-radius: 5px;
  }
`;

const InstagramOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const LikesText = styled.p`
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translateX(50%);
  font-size: 2rem;
  color: #fff;
`;

export default class InstagramCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props,
      hover: false
    };
  }

  onMouseEnter = () => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    const {
      id,
      xs,
      sm,
      md,
      lg,
      xl,
      image,
      caption,
      likes,
      link,
      hover
    } = this.state;

    return (
      <Col
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        image={image}
        caption={caption}
        likes={likes}
        link={link}
        className="mb-4"
      >
        <InstagramCardMain
          onMouseEnter={() => this.onMouseEnter()}
          onMouseLeave={() => this.onMouseLeave()}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {hover ? <InstagramOverlay /> : null}
            <InstagramCardImage top width="100%" src={image} alt={id} />
            {hover ? (
              <CardImgOverlay>
                <LikesText>
                  <i className="fas fa-heart"></i>
                  {" " + likes}
                </LikesText>
              </CardImgOverlay>
            ) : null}
          </a>
        </InstagramCardMain>
      </Col>
    );
  }
}
