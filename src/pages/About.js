import "./About.css";
import profile_pic_name from "../assets/profile_pic_name.jpg";
import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
            <div className="split left">
              <div className="centered">
                <img 
                  // className={profile_pic_name}
                  src = {profile_pic_name}
                  // Image goes here
                  alt="Profile Pic"
                  ></img>
              </div>
            </div>
            <div className="split right">
              <div className="centered">
                <div className="name_title">Victor Escudero</div>
                <div className="brief_description">
                Hello, my name is Victor Escudero. I love to play guitar, code, play sports, 
                and longboard. I am currently and undergrad at University of 
                Illinois at Chicago and I am studying Computer Science. 
                Looking forward to meeting all of you guys!!!
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}