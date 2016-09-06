import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as fileUploadActions from '../actions/fileUploadActions';

const style = {
  backgroundColor: '#fff'
}

const UploadContainer = ({mountNewFile, fileName}) => (
  <div className="input-group">
    <label className="input-group-btn">
      <span
        className="btn btn-primary"
        onClick={() => {document.getElementById('uploadButton').click() }}
      >
        Browse...
      </span>
    </label>
    <input
      id="uploadButton"
      type="file"
      style={{display: 'none'}}
      onChange={(e) => mountNewFile(e.target.files[0])}
    />
    <input
      type="text"
      value={fileName}
      className="form-control"
      style={style}
      readOnly
    />
  </div>
)

export default connect(state => ({
  fileName: state.fileUpload.fileName
}),(dispatch) => ({
  mountNewFile: bindActionCreators(fileUploadActions, dispatch).mountNewFile
}))(UploadContainer);
