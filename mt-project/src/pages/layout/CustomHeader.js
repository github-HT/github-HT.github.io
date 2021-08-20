import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Tooltip } from 'antd'
import { Header } from 'antd/lib/layout/layout'

export default class CustomHeader extends Component {

    toGit () {
        window.open("https://github.com/github-HT/github-HT.github.io")
    }

    render() {
        console.log('header render');
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="is-flex align-items-center">
                <div className="logo" />
                <div className="spacer"/>
                <Tooltip title="View in GitHub">
                    <Button shape="circle" icon={(<i className="iconfont icon-GitHub" />)} size="large" onClick={this.toGit} />
                </Tooltip>
            </Header>
        )
    }
}
