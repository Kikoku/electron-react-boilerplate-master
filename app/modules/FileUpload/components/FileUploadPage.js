import React, {Component} from 'react';
import PlayersContainer from './PlayersContainer';
import RoundsContainer from './RoundsContainer';
import EventContainer from './EventContainer';
import ErrorContainer from './ErrorContainer';
import LoaderOverlay from './LoaderOverlay';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as fileUploadActions from '../actions/fileUploadActions';

const style={
  row: {
    marginTop: '10px',
    marginBottom: '10px'
  }
}

class FileUploadPage extends Component {
  render() {
    return (
      <div>
        <nav
        style={{
          background:'#3B3738',
          width: '100%',
          fontFamily: 'proxima-nova, "Helvetica Neue", Helvetica, Arial, sans-serif',
          color: 'white',
          fontSize: 26,
          lineHeight: "50px"
        }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <img
                  src='balance.png'
                  style={{
                    width: 80,
                    padding: '10px 10px 10px 0'
                  }}
                  alt="Balance Logo"
                />Balance
              </div>
            </div>
          </div>
        </nav>
        <section>
          <LoaderOverlay
            enabled={this.props.state.mounting}
          />
          <div className="container">
            <div className="row" style={style.row}>
              <div className="col-xs-12">
                <EventContainer
                  title={this.props.state.title}
                  sanctionnumber={this.props.state.sanctionnumber}
                  onChangeHandler={(e) => this.props.actions.mountNewFile(e.target.files[0])}
                  fileName={this.props.state.fileName}
                  eventguid={this.props.state.eventguid}
                />
                {
                  this.props.state.errors.map((error, i) => (
                    <ErrorContainer error={error} />
                  ))
                }
              </div>
            </div>
            <div className="row" style={style.row}>
              <div className="col-xs-12">
              <PlayersContainer
                players={this.props.state.players}
              />
              </div>
            </div>
            <div className="row" style={style.row}>
              <div className="col-xs-12">
                <RoundsContainer
                  rounds={this.props.state.rounds}
                  matches={this.props.state.matches}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default connect(state => ({
  state: state.fileUpload
}),(dispatch) => ({
  actions: bindActionCreators(fileUploadActions, dispatch)
}))(FileUploadPage);
