import React from 'react'
import { Typography, Row, Col, Card } from 'antd';
import moment from 'moment'
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi"
import Loader from './Loader';

const { Text, Title } = Typography;  

const News = ({ simplified }) => {

  const newsCount = simplified ? 6 :  49; // Show 6 cards if simplified is true, else show 12
  const { data: cryptoNews } = useGetCryptoNewsQuery({ count: newsCount });

  if(!cryptoNews?.data) return <Loader />;

  return (
    <Row gutter={[24,24]}>
      {cryptoNews?.data?.slice(0, newsCount).map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                <a href={news.url} target='_blank' rel='noreferrer'>
                  <div className='news-image-container'>
                    <Title className='news-title' level={4}>{news.title}</Title>
                    <img alt='cryptonews' style={{ maxWidth: '200px', maxHeight: "100px"}} className='newsImage'  src={news?.thumbnail}></img>
                  </div>
                  <p>{news.description}</p>
                </a>
                <div className='provider-container'>
                  <div>
                    <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                  </div>
                </div>
              </Card>
          </Col>
      ))}
    </Row>
  )
}

export default News;