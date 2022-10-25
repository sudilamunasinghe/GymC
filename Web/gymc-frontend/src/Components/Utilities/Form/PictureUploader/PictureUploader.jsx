import React from 'react';
import $ from 'jquery';
import AvatarEditor from 'react-avatar-editor'

export default class PictureUploader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picture: false,
      src: false
    }
  }

  handlePictureSelected(event) {
    var picture = event.target.files[0];
    var src = URL.createObjectURL(picture);

    this.setState({
      picture: picture,
      src: src
    });
  }
  ///avatart editor part

  onClickSave = () => {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = this.editor.getImage()

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = this.editor.getImageScaledToCanvas()
    }
  }

  setEditorRef = (editor) => (this.editor = editor)

  renderPreview() {
    if (this.state.src) {
      return (
        // <img src={this.state.src}/>
        <AvatarEditor
          ref={this.setEditorRef}
          image={this.state.src}
          width={75}
          height={75}
          border={50}
          scale={1.2}
        />
      );
    } else {
      // return (
      //   <p>
      //     No Preview
      //   </p>
      // );
    }
  }

  upload() {
    var formData = new FormData();

    formData.append("file", this.state.picture);

    $.ajax({
      url: "../../../../../../images/",
      method: "POST",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function (response) {
        // Code to handle a succesful upload
      }
    });
  }

  render() {
    return (
      <div>
        
        <div>
          {this.renderPreview()}
        </div>
        {/* <button
          onClick={this.upload.bind(this)}>
          Upload
        </button> */}
        <input
        className='form-group'
          type="file"
          onChange={this.handlePictureSelected.bind(this)}
        />
      </div>
    );
  }
}