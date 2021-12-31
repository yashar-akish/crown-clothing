import React from 'react';


import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) =>  {

  return(
    <div 
      style={{backgroundImage: `url(${imageUrl})`}}
      className={`${size} menu-item`}
      > 
      {/* the way we use to apply css style dynamically in react javascript, using ` and url()
      applying two different class css */}
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
};

export default MenuItem;