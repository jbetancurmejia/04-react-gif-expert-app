
import PropTypes from 'prop-types';
import React, { Component } from 'react';


export const GifGridItem = ({title,url}) => {

  
  return <div className="card animate__animated animate__bounce animate__delay-2s">
   <img  src={url}  alt={title}  />
   <p>{title}</p>   
  </div>;
};

GifGridItem.prototypes ={  
  title:PropTypes.string.isRequiered,
  url:PropTypes.string.IsRequiered
  
}

