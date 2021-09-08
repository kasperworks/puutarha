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
      font-size: 125%;
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
      box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.15);
      overflow: auto;
    }

    code {
      font-family: source-code-pro, Menlo, Consolas, monospace;
      font-size: 1.15rem;
      @media (max-width: 780px) {
        font-size: 1rem;
      }
      @media (max-width: 500px) {
        font-size: 0.9rem;
      }
    }


    em {
      font-style: normal;
      background: url('/static/brush-stroke-banner.svg');
      background-repeat: no-repeat;
      background-size: 100% 120%;
      cursor: pointer;
      padding: 15px 10px 15px 3px;
      margin: -15px -10px -15px -3px;
    }

    li {
      list-style: square;
    }
    

    em > a {
      text-decoration: none;
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
      margin: 0.9375em 0 0 0; 
      font-size: 2.25rem;
      line-height: 1.33em;
      color: var(--accent);
      text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05), 0px -5px 35px rgba(255, 255, 255, 0.15);
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
