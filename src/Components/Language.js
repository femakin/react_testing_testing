import React, { Component } from 'react'

 class Language extends Component {
  render() {
      console.log(this.props.name)
    return (
        <div className='language-item'>
        <div className='language-name'>{this.props.name} </div>
        
        <img className='language-image' src={this.props.image} alt=""/>
        {/* <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' alt=""/> */}
      </div>
    )
  }
}

export default Language
