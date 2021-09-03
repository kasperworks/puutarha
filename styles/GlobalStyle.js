import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --black: #0E1111;
      --white: #FBFBFB;
      --background: #2E3541;
      --codeblock: #252B35;
      --darkgreen: #235353;
      --green: #93c763;
      --brightgreen: #78FF93;
      --accent: #EE1E3C;
      --darkred: #BA1830;
      --grey: #8CA3AD;
      --lightgrey: #EBEEF1;
      --yellow: #FFF96B;
      --purple: #9752FF;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--background);
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
      padding: 8px;
      border-radius: 4px;
      box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
    }

    code {
      font-family: source-code-pro, Menlo, Consolas, monospace;
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
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
    }

    a {
      color: var(--accent);
    }

    html:focus-within {
      scroll-behavior: smooth;
    }

    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    .flow {
        --flow-space: 1em;
    }

    .flow > * + * {
        margin-top: 1em;
        margin-top: var(--flow-space);
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
      color: var(--brightgreen);
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
