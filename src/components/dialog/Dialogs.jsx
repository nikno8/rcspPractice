// Dialogs.js
import React from 'react';
import DialogItem from './DialogItem';
import './dialogListStyles.css'; // Импорт стилей

const Dialogs = () => {
  const dialogs = [
    { id: 1, name: 'Слейвик' },
    { id: 2, name: 'Стасс' },
    { id: 3, name: 'Whatisslove' },
    { id: 4, name: 'Санчо' },
  ];

  return (
    <div className="dialog-list">
      {dialogs.map(dialog => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
      ))}
    </div>
  );
}

export default Dialogs;
