import React from 'react';

const style = {
  backgroundColor: '#fff'
}

const UploadContainer = ({onChangeHandler, fileName}) => (
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
      onChange={(e) => onChangeHandler(e)}
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


export default UploadContainer;
