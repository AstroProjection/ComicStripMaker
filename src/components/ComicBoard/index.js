import React, { Component } from "react";
import styles from "./ComicBoard.module.css";
import AddText from "../AddText";

class ComicBoard extends Component {
  constructor(props) {
    super(props);
    this.HEIGHT = 350;
    this.WIDTH = 500;
    this.lineWidth = 1;
    this.lineColour = "black";

    this.canvasRef = React.createRef();
    this.ctx = null;

    this.AllLocations = [];
    this.AllTexts = []; /// pageno,text,location,styles..

    this.setMouseDownState = this.props.setMouseDownState;
    this.mouseDown = this.props.mouseDown;
    this.setCanvasRef = this.props.setCanvasRef;

    this.textState = this.props.textState;
    this.setTextState = this.props.setTextState;

    this.state = {
      text: "hello",
    };
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    this.setCanvasRef(canvas);
    this.ctx = canvas.getContext("2d");
    this._OFFSET = {
      top: this.canvasRef.current.offsetTop,
      left: this.canvasRef.current.offsetLeft,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.ctx && this.mouseDown) {
      // this.ctx.clearRect(0, 0, 300, 300);
      this.AllLocations.forEach((location) => this.draw(location));
    }
  }

  beginDraw = (e) => {
    const currentLocation = {
      x: e.clientX,
      y: e.clientY,
    };
    this.AllLocations = [...this.AllLocations, currentLocation];

    if (this.ctx) {
      this.ctx.beginPath();
    }
  };

  draw = ({ clientX, clientY }) => {
    if (this.props.drawingState) {
      const ctx = this.ctx;
      const X = clientX + this._OFFSET.left;
      const Y = clientY - this._OFFSET.top;

      ctx.strokeStyle = this.lineColour;
      ctx.lineWidth = this.lineWidth;
      ctx.lineTo(X, Y);
      // ctx.moveTo(X, Y);
      ctx.stroke();
    }
  };

  render() {
    const { drawingState, mouseDown, textState } = this.props;
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          height={this.HEIGHT}
          width={this.WIDTH}
          onMouseDown={(e) => {
            this.setMouseDownState(true);
            if (drawingState) {
              this.beginDraw(e);
            }
            if (textState) {
              this.addText(e);
            }
          }}
          onMouseMove={(e) => {
            if (!mouseDown) return;
            if (drawingState) {
              this.draw(e);
              const { clientX, clientY } = e;
              this.AllLocations.push({ x: clientX, y: clientY });
            }
          }}
          onMouseUp={(e) => {
            this.setMouseDownState(false);
          }}
        ></canvas>
        <div>
          {this.state.addedText.forEach((text) => {
            return `<AddText top=${text.top} left=${text.left} inputText=${text.inputText} />`;
          })}
        </div>
        <div className={styles.pageView}>Pages</div>
      </div>
    );
  }
}

export default ComicBoard;
