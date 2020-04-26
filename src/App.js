import React, { Component } from "react";
import "./App.css";
import ComicBoard from "./components/ComicBoard/";
import Buttons from "./components/ComicButtons";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDrawing: false,
      currentPageId: null,
    };

    this.setDrawingState = this.setDrawingState.bind(this);
    this.fetchDrawingState = this.fetchDrawingState.bind(this);
  }

  setDrawingState(state) {
    this.setState({ isDrawing: state });
  }

  fetchDrawingState() {
    return this.state.isDrawing;
  }

  render() {
    return (
      <div>
        <div>ComicStripMaker</div>
        <ComicBoard
          drawingState={this.state.isDrawing}
          setDrawingState={this.setDrawingState}
        />
        <Buttons
          setDrawingState={this.setDrawingState}
          drawingState={this.state.isDrawing}
        />
      </div>
    );
  }
}
