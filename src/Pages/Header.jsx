import React from "react";
import "../CSS/headers.css"

const Header = () => {
  return (
    <div className="MainContainerForHeader">
      <div className="name">
        <h1>Suraj Badwaik</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      <div className="Links">
        <div><a href=""><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" /></a></div>
        <div><a href=""><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a></div>
      </div>

      <div className="Profile"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGVp96kYGZNIw/profile-displayphoto-shrink_800_800/0/1650721151933?e=1661990400&v=beta&t=92ris4bErPuoELyzji-72LwOh-jZtDFYNxW6TToH010" alt="" /></div>
    </div>
  );
};

export default Header;
