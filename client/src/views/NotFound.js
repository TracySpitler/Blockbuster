import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NotFound extends Component {

  handleMovement = (e) => {
    var pageX = $(document).width();
    var pageY = $(document).height();
    var mouseY=0;
    var mouseX=0;

    // verticalAxis
    mouseY = e.pageY;
    var yAxis = (pageY/2-mouseY)/pageY*300;
    // horizontalAxis
    mouseX = e.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    $('.box__ghost-eyes').css({ 'transform': 'translate('+ xAxis +'%,-'+ yAxis +'%)' });
  };

  render() {
    return (
      <div className="background" style = {{ background: '#28254C',
                height: '100vh',
                width: '100vw',
              }} onMouseMove={this.handleMovement}>

        <div className="box">
          <div className="box__ghost">
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="symbol"></div>
            <div className="box__ghost-container">
              <div className="box__ghost-eyes">
                <div className="box__eye-left"></div>
                <div className="box__eye-right"></div>
              </div>
              <div className="box__ghost-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="box__ghost-shadow"></div>
          </div>

          <div className="box__description">
            <div className="box__description-container">
              <div className="box__description-title">Whoops!</div>
              <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
            </div>
            <a href="/" className="box__button text-center">Take Me Home</a>
          </div>

        </div>
      </div>
    );
  }
}

export default NotFound;
