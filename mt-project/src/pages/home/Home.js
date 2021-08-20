
import { Card, Col, Row, Tooltip, Skeleton, Space } from 'antd'
import { getActivityList } from '../../api/api'


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Home extends Component {
  static propTypes = {
    activityList: PropTypes.array,
    dispatch: PropTypes.func
  }

  componentDidMount() {
    this.getActivitys();
  }

  async getActivitys() {
    const { dispatch } = this.props
    const params = await getActivityList();
    dispatch({
      type: 'SET_ACTIVITY_LIST',
      activityList: params.data.data,
    })
  }

  linkTo(url) {
    location.href = url;
  }

  render() {
    const { Meta } = Card
    const { activityList } = this.props;
    return (
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        {activityList.map((item, i) => {
          return (
            <Col key={'CardList' + i}>
              <Card
                onClick={e => this.linkTo(item.url)}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="" style={{ height: 240, height: 240 }} src={item.img_url} />}
              >
                <Meta
                  title={(<div className="text-beyond-hidden">{item.title}</div>)}
                  description={(
                    <Tooltip title={item.subtitle} placement="bottom" >
                      <div className="text-beyond-hidden">{item.subtitle}</div>
                    </Tooltip>
                  )}
                />
              </Card>
            </Col>
          )
        })}
        {activityList.length === 0 ? (
          <Col >
            <Card
              style={{ width: 240 }}
              cover={<Skeleton.Image style={{ width: 240, height: 240 }} />}
            >
              <Skeleton paragraph={{ rows: 1 }} />
            </Card>
          </Col>
        ) : ""}
      </Row>
    )
  }
}

const mapStateToProps = (state) => ({
  activityList: state.Home.activityList
})

const mapDispatchToProps = {
  getActivityList
}

export default connect(mapStateToProps)(Home)


