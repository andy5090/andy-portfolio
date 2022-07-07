import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`    

    ${reset};    

    * {
        box-sizing:border-box;        
    }
    html {
        height: 100%;
    }
    body {
        font-family: Lucida Console, monospace;    
        overflow: hidden;
        height: inherit;
    }

    #root {
        height: inherit;

        --green-color: #5bf870;
	    --green-bg: #05321e;
	    --red-color: #c0100a;
	    --red-bg: #1b0302;
	    --blue-color: #a5a5ff;
	    --blue-bg: #4242e7;
	    --off: #050505;
	    --dark: #111;
	    --term: "> ";
    }       
    
`;

export default GlobalStyle;
