// DialogItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './dialogItemStyles.css'; 

const DialogItem = ({ id, name }) => {
  const path = `/dialogs/${id}`;
  
  return (
    <div className="dialog-item">
      <Link to={path} className="dialog-item-link">{name}</Link>
    </div>
  );
}

export default DialogItem;
