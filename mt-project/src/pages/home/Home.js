import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Col, Row } from 'antd'
import mapImg from '../../assets/imgs/mapImg.png'

const CardList = [{
  title: "地图",
  subTitle: "就是一个地图页面！",
  imgUrl: mapImg,
  url: "https://github-ht.github.io/map/"
},
{
  title: "双色球随机取号",
  subTitle: "就是随机取号，没有其他的！",
  imgUrl: "https://github-ht.github.io/doubleColorBall/image/dounleColorBall.jpeg",
  url: "https://github-ht.github.io/doubleColorBall/"
}]

function linkTo(url) {
  // window.open(url);
  location.href = url;
}

export const Home = ({ link }) => {
  const { Meta } = Card;
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
      {CardList.map((item, i) => {
        return (
          <Col key={'CardList' + i}>
            <Card
              onClick={e => linkTo(item.url)}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.imgUrl} />}
            >
              <Meta title={item.title} description={item.subTitle} />
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

Home.propTypes = {
  link: PropTypes.string
}

const mapStateToProps = (state) => ({
  link: state.Home.link
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
