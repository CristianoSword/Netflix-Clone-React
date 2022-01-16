import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : '' }>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix "/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBirB-HxWOVaHh9eFa9JLiuZi7zZtQlWx2x4tOl1CJGFtx3BlhjjlAFw4bUEQDFyqMCU&usqp=CAU" alt="usuário" />
                </a>
            </div>
        </header>


    );

}