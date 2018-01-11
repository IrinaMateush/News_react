import React from 'react'
import {render} from 'react-dom'
import Article from './Article' //импортим
import {articles} from './fixtures.js'

function HelloWorld(){ //описание компонента
    return <h1>"Hello world"</h1>
}
render(<Article article = {articles[0]}/>, document.getElementById("container")) //что и куда рендерить и передали статью внутрь Article, можно передавать что угодно 

//в {} в js можно писать любые выражения 