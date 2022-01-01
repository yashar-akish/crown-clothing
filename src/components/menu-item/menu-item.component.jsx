import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';


import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, linkUrl, match }) =>  {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return(
    <div
      className={`${size} menu-item`} onClick={() => navigate(`${pathname}${linkUrl}`)}
      > 
      {/* the way we use to apply css style dynamically in react javascript, using ` and url()
      applying two different class css */}

      <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
};

export default MenuItem;