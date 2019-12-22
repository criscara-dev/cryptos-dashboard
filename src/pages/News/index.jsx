import React, { Component } from "react";
import moment from "moment";
import cryptoCompare from "../../api/cryptoCompare";
import { Title } from "../../components/Typography";
import { Center, NewsContainer, Data, Spans, Body, Span } from "./styles";

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
      <>
        <Title>Last news:</Title>
        <Center>
          {news.splice(0, 20).map(data => (
            <NewsContainer key={data.id}>
              <img src={`${data.source_info.img}`} alt={`coin ${data.id}`} />
              <Data>
                <Title small>{data.title}</Title>
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
      </>
    );
  }
}
