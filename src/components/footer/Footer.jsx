import React from 'react';
import "./footerStyle.css"

const Footer = () => {
  return (
    <footer class = "footer">
      <p>&copy; {new Date().getFullYear()} Рецензии фильмов</p>
    </footer>
  );
}

export default Footer;
