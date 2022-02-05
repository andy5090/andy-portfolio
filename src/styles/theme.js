import { css } from "styled-components";

const BOX_BORDER = "1px solid rgba(150, 150, 150, 0.3)";
// const BOX_SHADOW = "rgba(150, 150, 150, 0.3) 2px 1px 3px";
const BORDER_RADIUS = "4px";

const BasicTheme = {
  card: css`
    border: ${BOX_BORDER};
    border-radius: ${BORDER_RADIUS};
    background-color: var(--base-color);
  `,
};

export default BasicTheme;
