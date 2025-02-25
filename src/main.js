import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/img/vite.svg'
import { loadHeader, loadFooter } from './loadComponents.js'

document.querySelector('#app').innerHTML = `
  <header id="header"></header>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <footer id="footer"></footer>
`

setupCounter(document.querySelector('#counter'))
loadHeader()
loadFooter()