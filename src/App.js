import React, { Component } from "react";
import "./App.css";
import ComicBoard from "./components/ComicBoard/";
import Buttons from "./components/ComicButtons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawing: false,
      isText: false,
      currentPageId: null,
      mouseDown: false,
      canvasRef: null,
      allPages: [],
    };

    this.setDrawingState = this.setDrawingState.bind(this);
    this.setMouseDownState = this.setMouseDownState.bind(this);
    this.setCanvasRef = this.setCanvasRef.bind(this);
    this.setTextState = this.setTextState.bind(this);
  }

  setAllPagesState(state) {
    /// [{
    //  pageNo:0,
    //  LineLocations:[]...
    //  Textlocations:[]
    // }]
    this.setState({ allPages: [...this.state.allPages, state] });
  }

  setDrawingState(state) {
    this.setState({ isDrawing: state });
  }

  setTextState(state) {
    this.setState({ isText: state });
  }

  setMouseDownState(state) {
    this.setState({ mouseDown: state });
  }

  setCanvasRef(ref) {
    this.setState({ canvasRef: ref });
  }

  componentDidMount() {
    window.addEventListener("mouseup", () => {
      // console.log("mouseup");
      this.setMouseDownState(false);
    });
  }

  render() {
    return (
      <div>
        <div>ComicStripMaker</div>
        <ComicBoard
          drawingState={this.state.isDrawing}
          setDrawingState={this.setDrawingState}
          setMouseDownState={this.setMouseDownState}
          mouseDown={this.state.mouseDown}
          setCanvasRef={this.setCanvasRef}
          setTextState={this.setTextState}
          textState={this.state.isText}
        />
        <Buttons
          setDrawingState={this.setDrawingState}
          drawingState={this.state.isDrawing}
          canvasRefState={this.state.canvasRef}
          setTextState={this.setTextState}
          textState={this.state.isText}
        />
      </div>
    );
  }
}
