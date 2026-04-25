
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
         likes: 0,
         dislikes: 0
        };
  }
  render() {
    return (
     <div className='content-rating'>
         <p>Are you ready to traverse the dungeon, and perhaps see the horrors of waking freedom?</p>
         <div className='rating-buttons'>
         </div>
     </div>
    );
  }
}

export default ContentRating;
