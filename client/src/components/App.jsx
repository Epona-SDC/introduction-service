import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './Introduction.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: []
    }
  }

  getPhotosAndIntro () {
    let endPoint = window.location.href.split('=')[1];
    return $.ajax({
      method: 'GET',
      url: `http://localhost:3002/api/intro/${endPoint}`,
      success: function(data) {
        this.setState({
          intro: data
        })
      }.bind(this),

    })
  }

  componentDidMount () {
    // this.setState({intro:[]});
    this.getPhotosAndIntro();
  }
  render () {
    return (
      <div>
        <Introduction info={this.state.intro}/>
      </div>
    )
  }
}
export default App;

export {App};