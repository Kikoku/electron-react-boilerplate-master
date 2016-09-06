import React from 'react';
import UploadContainer from './UploadContainer';

const style = {
  input: {
    backgroundColor: '#fff'
  },
  col: {
    marginTop: '10px',
    marginBottom: '10px'
  }
}

const EventContainer = ({title, sanctionnumber, onFileMount, fileName, eventguid, onFileSubmit, submitted, mounted}) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      Event
    </div>
    <div className="panel-body">
      <div className="row">
        <div className="col-md-12" style={style.col}>
          <UploadContainer
            onChangeHandler={onFileMount}
            fileName={fileName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" style={style.col}>
          <div className="input-group input-group-lg">
            <span className="input-group-addon">
              Title
            </span>
            <input
              type="text"
              value={title}
              className="form-control"
              style={style.input}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6" style={style.col}>
          <div className="input-group input-group-sm">
            <span className="input-group-addon">
              Sanction Number
            </span>
            <input
              type="text"
              value={sanctionnumber}
              className="form-control"
              style={style.input}
              disabled
            />
          </div>
        </div>
        <div className="col-md-6" style={style.col}>
          <div className="input-group input-group-sm">
            <span className="input-group-addon">
              Event Id
            </span>
            <input
              type="text"
              value={eventguid}
              className="form-control"
              style={style.input}
              disabled
            />
          </div>
        </div>
        <div className="col-xs-12" style={style.col}>
          <button
            className="btn btn-primary pull-right"
            onClick={onFileSubmit}
            disabled={submitted || mounted == false ? true : false}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default EventContainer;
