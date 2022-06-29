import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
      --black: #0E1111;
      --white: #FBFBFB;
      --grey: #8CA3AD;
      --background: #252B35;
      --codeblock: #2E3541;
      --darkgreen: #235353;
      --green: #93c763;
      --accent: #FFF96B;
      --accenthover: #EDE759;
      --accentshadow: #D8D24D;
      --brightgreen: #78FF93;
      --purple: #8745EA;
      --darkpurple: #5D4384;
      --lightgrey: #EBEEF1;
      --brightred: #d5102e;
    }

    #__next {
      display: flex;
      flex-direction: column;
    }

    html {
      height: 100%;
      box-sizing: border-box;
    }

    // Keep search-on-page jump instant, otherwise scroll smoothly

    html:focus-within {
      scroll-behavior: smooth;
    }

    // No messing with scroll behavior if reader prefers to control it

    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background-color: var(--background);
      color: var(--white);
      line-height: 1.5;
      font-size: 125%;
      font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        scrollbar-width: thin;
      scrollbar-color: var(--darkgreen) var(--codeblock);
    }

    body::-webkit-scrollbar {
      width: 14px;
    }

    body::-webkit-scrollbar-track {
      background: var(--codeblock);
    }

    body::-webkit-scrollbar-thumb {
      background-color: var(--darkgreen) ;
      border-radius: 2px;
      border: 2px solid var(--codeblock);
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
      font-size: 1rem;
      @media (max-width: 700px) {
        font-size: 0.9rem;
      }
    }

    abbr {
      text-decoration-style: double;
    }


    em {
      background: url('/static/brush-stroke-banner.svg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;   
      font-style: normal;
      cursor: pointer;
      padding: 4px 4px 15px 0;
      margin: -4px -4px -15px 0;
    }

    li {
      list-style: square;
    }

    strong {
      font-weight: 700;
      color: var(--accent);
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

    h3 {
      font-size: 1.3em;
      margin: 1em 0;
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
      color: var(--white);
    }

    small {
      font-size: 0.8rem;
    }

    .internal-link {
      text-decoration: none;
    }

    .wide-image {
      border-radius: 4px;
    }

    blockquote {
    border-left-color: var(--accent);
    border-left-width: 6px;
    border-left-style: solid;
    padding: 8px 8px 8px 14px;
    background-color: var(--codeblock);
      p {
        margin: 0;
      }
    }
    
    .react-player__preview {
      border-radius: 4px;
      background: var(--darkgreen);
      opacity: 0.6;
      border: 1px solid var(--accent);
      background-image: url('/static/images/sokoshotlankatolta_xs.jpg');
    }

    .skip-nav {
      transform: translateY(-50px);
    }

    // Burger menu styling

    .bm-burger-button {
      position: absolute;
      right: 25px;
      top: 25px;
    }

    .bm-menu-wrap {
      background: var(--codeblock);
      position: fixed;
      opacity: 0.985;
      margin-top: 25px;
    }

    .bm-menu {
      background: var(--codeblock);
      padding: 1.5em 0;
      font-size: 1.15em;
    }

    .bm-item-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;
    }

    .bm-item {
      color: var(--codeblock);
    }

    // Code block styling

    .rehype-code-title {
      font-size: 0.9rem;
      // Tame the code titles, negate video thumbnail setting
      aspect-ratio: unset !important;
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


    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: var(--accent);
    }

    .token.function,
    .token.class-name {
      color: var(--green);
    }

    .token.operator,
    .token.macro,
    .token.console,
    .token.method,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: var(--accent);
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: var(--purple);
    }

`;

export default GlobalStyle;
