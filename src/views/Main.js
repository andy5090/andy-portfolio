import styled from "styled-components";

const Container = styled.div`
  height: inherit;
  font-size: 60px;

  --color: var(--green-color);
  --bg: var(--green-bg);
`;

const CRT = styled.div`
  /* min-width: 80ch;
  height: calc(80ch * 0.8); */
  /* font-size: max(1rem, 2.2vmin); */
  height: inherit;
  position: relative;
  background: var(--bg);
  background-image: radial-gradient(ellipse, var(--bg) 0%, var(--off) 90%);
  animation: on 2s linear;
  transition: all 0.5s;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color);
`;

const Scanlines = styled.div`
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.25) 50%
  );
  background-size: 100% 8px;
  z-index: 2;
  pointer-events: none;
`;

const Scanline = styled.div`
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  animation: scanline 8s linear infinite;

  @keyframes scanline {
    0% {
      bottom: 100%;
    }
    80% {
      bottom: 100%;
    }
    100% {
      bottom: 0%;
    }
  }
`;

const Main = () => {
  return (
    <Container>
      <CRT>
        <Scanlines />
        <Scanline />
        Andy Lee's Portfolio
      </CRT>
    </Container>
  );
};

export default Main;
