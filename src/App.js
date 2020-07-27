import React, { Component } from 'react';
import styles from './App.module.css';
import ComicBoard from './components/ComicBoard/';
import Buttons from './components/ComicButtons';

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

    // this.setDrawingState = this.setDrawingState.bind(this);
    // this.setMouseDownState = this.setMouseDownState.bind(this);
    this.setCanvasRef = this.setCanvasRef.bind(this);
    // this.setTextState = this.setTextState.bind(this);
  }

  setAllPagesState(state) {
    this.setState({ allPages: [...this.state.allPages, state] });
  }

  setCanvasRef(ref) {
    this.setState({ canvasRef: ref });
  }

  handleAddPage = (page) => {
    this.setState({ allPages: [...this.state.allPages, page] });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.boardContainer}>
          {this.state.allPages.length > 0
            ? this.state.allPages.map((page) => (
                <ComicBoard setCanvasRef={this.setCanvasRef} />
              ))
            : 'No pages...'}
        </div>
        <Buttons addPage={this.handleAddPage} />
        {/* <div className={styles.pageView}>Pages</div> */}
      </div>
    );
  }
}
