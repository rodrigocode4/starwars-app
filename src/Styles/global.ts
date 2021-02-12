import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  /* https://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    @font-face {
      font-family: "Star Jedi";
      src: url("https://db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.eot"); /* IE9*/
      src: url("https://db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
      url("https://db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.woff2") format("woff2"), /* chrome firefox */
      url("https://db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.woff") format("woff"), /* chrome firefox */
      url("https://db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
      url("https://db.onlinewebfonts.com/t/0c724f6aa457310440cf8949c615cbd7.svg#Star%20Jedi") format("svg"); /* iOS 4.1- */
}
    background: #282c35;
    line-height: 1;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  img {
    display: block;
      width: 100%;
      height: auto;
  }
    /* width */
  *::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  *::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 5px 15px 15px 5px;
  }

  /* Handle */
  *::-webkit-scrollbar-thumb {
    background: #ffe81f;
    border-radius: 15px;
  }

  /* Handle on hover */
  *::-webkit-scrollbar-thumb:hover {
    background: #c0af15;
  }

  *::-webkit-scrollbar-button:single-button {
    background-color: transparent;
    display: block;
    border-style: none;
    height: 5px;
    width: 5px;
  }
  `

export default GlobalStyle
