import React, { Component } from 'react'
import { connect } from 'react-redux'
import {HomeStateType} from '../../store/reducers/homeReducer'

interface Props {
  
}
interface State {
  
}

export class Home extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state: HomeStateType) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
