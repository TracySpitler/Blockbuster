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
              
        <div class="box">
          <div class="box__ghost">
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="symbol"></div>
            <div class="box__ghost-container">
              <div class="box__ghost-eyes">
                <div class="box__eye-left"></div>
                <div class="box__eye-right"></div>
              </div>
              <div class="box__ghost-bottom">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div class="box__ghost-shadow"></div>
          </div>

          <div class="box__description">
            <div class="box__description-container">
              <div class="box__description-title">Whoops!</div>
              <div class="box__description-text">It seems like we couldn't find the page you were looking for</div>
            </div>
            <a href="/" class="box__button text-center">Take Me Home</a>
          </div>

        </div>
      </div>
    );
  }
}

export default NotFound;
