import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={backgroundColor}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi! <br />I'm Kevin Au</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1W6zOsIguLQwJJA6djm-Ts0lm2p88JhuhaPmgb1aU0F8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/background1.png)'}}> */}
              <li style={backgroundColor}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>I &#x2764; JavaScript<br /> FullStack !!<br /></h1>
                          <div style={divFlex}>
                            <img style={stackImg} src="images/mongo.png" alt="mongo"/>
                            <img style={stackImg2} src="images/node.png" alt="node"/>
                            <img style={stackImg} src="images/react.png" alt="react"/>
                            <img style={stackImg} src="images/graphql.png" alt="graphql"/>
                            <img style={stackImg} src="images/sql.png" alt="sql" />
                            <img style={stackImg3} src="images/apollo.png" alt="apollo"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>              
            </ul>
          </div>
        </section>
      </div>
    )
  }
}

const backgroundColor = {
  background: 'rgba(255,255,255,1)',
  background: '-moz-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)',
  background: '-webkit-gradient(left top, right top, color-stop(0%, rgba(255,255,255,1)), color-stop(47%, rgba(246,246,246,1)), color-stop(100%, rgba(237,237,237,1)))',
  background: '-webkit-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)',
  background: '-o-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)',
  background: '-ms-linear-gradient(left, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)',
  background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%)',
  filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 )`
}

const stackImg = {
  width: '100px',
  height: '100px'
}

const stackImg2 = {
  width: '150px',
  height: '100px'
}

const stackImg3 = {
  width: '250px',
  height: '80px'
}

const divFlex = {
  display: 'flex',
  'flex-wrap': 'wrap'
}