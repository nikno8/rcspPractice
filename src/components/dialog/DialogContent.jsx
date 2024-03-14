// DialogContent.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './dialogContent.css'; 

const DialogContent = () => {
  // Получаем параметр id из URL
  const { id } = useParams();

  // Предположим, у вас есть данные диалогов, которые вы храните в массиве или объекте
  const dialogs = [
    { id: 1, name: 'Cлейвик', content: 'Содержимое диалога для Славика' },
    { id: 2, name: 'Стасс', content: 'Содержимое диалога для Стасса' },
    { id: 3, name: 'Whatisslove', content: 'Содержимое диалога для Whatisslove' },
    { id: 4, name: 'Санчо',  content: 'Содержимое диалога для Санчо'},
    // Добавьте другие диалоги по мере необходимости
  ];

  // Находим диалог по идентификатору
  const dialog = dialogs.find(dialog => dialog.id === parseInt(id));

  if (!dialog) {
    return <div>Диалог не найден</div>;
  }

  return (
    <div className='dialog-content'>
      <h2>{dialog.name}</h2>
      <p>{dialog.content}</p>
    </div>
  );
}

export default DialogContent;
