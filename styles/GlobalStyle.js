import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      // in use
      --black: #0E1111;
      --white: #FBFBFB;
      --grey: #8CA3AD;
      --background: #252B35;
      --codeblock: #2E3541;
      --darkgreen: #235353;
      --green: #93c763;
      --accent: #FFF96B;
      --brightgreen: #78FF93;

      // unused
      --lightgrey: #EBEEF1;
      --brightred: #d5102e;
      --purple: #9752FF;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    html {
      height: 100%;
      box-sizing: border-box;
      --scrollbarBG: #8CA3AD;
      --thumbBG: #2E3541;
      overflow: hidden;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      height: 100%;
      background-color: var(--background);
      color: var(--white);
      line-height: 1.5;
      font-size: 1rem;
      font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        scrollbar-width: thin;
      scrollbar-color: var(--thumbBG) var(--scrollbarBG);
      overflow-y: auto;
    }

    body::-webkit-scrollbar {
      width: 14px;
    }

    body::-webkit-scrollbar-track {
      background: var(--scrollbarBG);
    }

    body::-webkit-scrollbar-thumb {
      background-color: var(--thumbBG) ;
      border-radius: 2px;
      border: 2px solid var(--scrollbarBG);
    }

    main {
      min-height: 100%;
    }

    pre {
      background-color: var(--codeblock);
      padding: 10px;
      border-radius: 4px;
      box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
      overflow: auto;
    }

    code {
      font-family: source-code-pro, Menlo, Consolas, monospace;
    }


    em {
      background-color: var(--darkgreen);
      font-style: normal;
      padding: 1px 10px;
      margin: 0 -0.3rem 0rem 0.1rem;
      border-radius: 0.6rem;
      border-bottom-left-radius: 0.25rem;
      box-decoration-break: clone;
    }

    em:hover {
      background-color: var(--green);
      color: var(--codeblock);
      cursor: pointer;
    }

    li {
      list-style-type: square;
    }
    
    li:hover {
      color: var(--green);
    }

    li > a {
      text-decoration: none;
    }

    li > a:hover {
      color: var(--green);
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    ul[class],
    ol[class],
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    h1 {
      margin: 2.5rem 0;
      font-size: 2.5rem;
      color: var(--grey);
      font-family: 'Josefin Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    ul[class],
    ol[class] {
      list-style: none;
      padding: 0;
    }

    a:not([class]) {
      text-decoration-skip-ink: auto;
      text-decoration-style: dotted;
    }

    a {
      color: var(--lightgrey);
      
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    .skip-nav {
      transform: translateY(-50px);
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: var(--grey);
    }

    .token.punctuation {
      color: var(--lightgrey);
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: var(--green);
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: var(--green);
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: var(--accent);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: var(--accent);
    }

    .token.function,
    .token.class-name {
      color: var(--green);
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: var(--purple);
    }

`;

export default GlobalStyle;
