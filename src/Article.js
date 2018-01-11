import React from 'react'

export default function Article(props) { // сюда в props попадает все что мы передаем в компонент function components синтаксис
    console.log("______", props) // посмотреть что мы передали в props из index.js
    const {article} = props; //деструктуризация разобраться
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    );
}