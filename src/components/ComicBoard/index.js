import React, { Component } from "react";
import "./ComicBoard.module.css";

class ComicBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false,
      lineLoc: [],
    };
    this.canvasRef = React.createRef();
    this.ctx = null;
    this.renderLocationInterval = 0;

    this.AllLocations = [];
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    this.ctx = canvas.getContext("2d");
    this._OFFSET = {
      top: this.canvasRef.current.offsetTop,
      left: this.canvasRef.current.offsetLeft,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.ctx && this.state.mouseDown) {
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
    this.AllLocations.forEach((location) => {
      this.draw(location);
    });

    if (this.ctx) {
      this.ctx.beginPath();
    }
  };

  draw = ({ clientX, clientY }) => {
    if (this.props.drawingState) {
      const ctx = this.ctx;
      const X = clientX + this._OFFSET.left;
      const Y = clientY - this._OFFSET.top;

      ctx.lineTo(X, Y);
      ctx.moveTo(X, Y);
      ctx.stroke();
    }
  };

  render() {
    const { drawingState } = this.props;
    return (
      <div>
        <canvas
          ref={this.canvasRef}
          height={300}
          width={300}
          onMouseDown={(e) => {
            if (this.props.drawingState) {
              this.beginDraw(e);
              this.setState({
                mouseDown: true,
              });
            }
          }}
          onMouseMove={(e) => {
            if (drawingState && this.state.mouseDown) {
              this.draw(e);
              const { clientX, clientY } = e;
              this.AllLocations.push({ x: clientX, y: clientY });
            }
          }}
          onMouseUp={(e) => {
            this.setState({
              mouseDown: false,
            });
          }}
        ></canvas>
      </div>
    );
  }
}

export default ComicBoard;
