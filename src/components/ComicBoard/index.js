import React, { Component } from 'react';
import styles from './ComicBoard.module.css';
import AddText from '../AddText';
import CanvasDraw from 'react-canvas-draw';
class ComicBoard extends Component {
  constructor(props) {
    super(props);
    this.HEIGHT = props.height || 350;
    this.WIDTH = props.height || 500;
    this.lineWidth = props.lineWidth || 1;
    this.lineColour = props.lineColor || 'black';

    this.canvasRef = React.createRef();
    this.ctx = null;

    this.AllLocations = [];
    this.AllTexts = []; /// pageno,text,location,styles..

    this.setMouseDownState = this.props.setMouseDownState;
    this.setCanvasRef = this.props.setCanvasRef;
    this.state = {
      text: 'hello',
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <React.Fragment>
        <div className={styles.comicBoard}>
          <CanvasDraw ref={this.canvasRef} />
          <div className={styles.buttonContainer}>
            <button className={styles.comicButtons} onClick={this.setCanvasRef}>
              edit
            </button>
            <button className={styles.comicButtons}>X</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ComicBoard;
