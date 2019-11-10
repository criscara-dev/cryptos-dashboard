import React, { Component } from "react";

// libraries
import moment from "moment";

import styled from "styled-components";

export default class News extends Component {
  render() {
    const news = this.props.news;
    // console.log(news.length);
    return (
      <React.Fragment>
        <CenterAlign>
          <h3>Last 10 news:</h3>
          <NewsContainer>
            {news.splice(0, 10).map(data => (
              <NewsData>
                <span>
                  <img
                    src={`${data.source_info.img}`}
                    alt={`coin ${data.id}`}
                    width="50"
                    height="auto"
                  />
                </span>
                <span>{data.title}</span>
                <span>CAT:{data.categories}</span>
                <span>TIME: {moment.unix(data.published_on).calendar()}</span>
                <span>SOURCE{data.source}</span>
                <span>TAGS:{data.tags}</span>
                <span>
                  <a
                    href={`${data.url}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    FULL READING
                  </a>
                </span>
              </NewsData>
            ))}
          </NewsContainer>
        </CenterAlign>
      </React.Fragment>
    );
  }
}

const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  > h3 {
    font-size: 1.5rem;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 800px;
  overflow-x: scroll;
`;

const NewsData = styled.div`
  display: flex;
  flex-flow: column wrap;
  > span {
    margin: 1rem 0;
    padding: 0 0.2rem;
  }
  > span > img {
    text-align: center;
  }
`;
