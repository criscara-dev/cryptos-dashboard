import React, { Component } from "react";

import moment from "moment";
import styled from "styled-components";
import cryptoCompare from "../api/cryptoCompare";

export default class News extends Component {
  state = {
    news: []
  };

  getLatestNews = async () => {
    const link = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${process.env.REACT_APP_API_URL}`;
    const response = await cryptoCompare.get(link);
    this.setState({
      news: response.data.Data
    });
  };

  componentDidMount() {
    this.getLatestNews();
  }

  render() {
    const { news } = this.state;
    return (
      <React.Fragment>
        <Intro>Last news:</Intro>
        <Center>
          {news.splice(0, 20).map(data => (
            <NewsContainer key={data.id}>
              <img src={`${data.source_info.img}`} alt={`coin ${data.id}`} />
              <Data>
                <Title>{data.title}</Title>
                <Body>
                  {data.body.slice(0, 200)}{" "}
                  <a
                    href={`${data.url}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ...READ MORE
                  </a>
                </Body>
                <Spans>
                  <Span source>{data.source}</Span>
                  <Span>{moment.unix(data.published_on).calendar()}</Span>
                  <Span>CAT:{data.categories}</Span>
                </Spans>
              </Data>
            </NewsContainer>
          ))}
        </Center>
      </React.Fragment>
    );
  }
}

const Center = styled.div`
  display: grid;

  justify-content: center;
`;

const NewsContainer = styled.div`
  display: flex;
  width: 80vw;
  margin: 1rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const Data = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Spans = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const Title = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Body = styled.div`
  padding: 1rem;
  line-height: 1.5;
  color: #929eaa
  text-decoration:none;
  > a {
    color: #928fff;
  }
`;

const Span = styled.div`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  &:nth-of-type(2) {
    color: #6e748e;
  }
  &:last-of-type {
    color: #6e748e;
  }
  color: ${props => (props.source ? "#24baa0" : "#000")};
`;

const Intro = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 2rem auto;
`;
