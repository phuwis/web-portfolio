import Title from "antd/es/typography/Title";
import { Parallax } from "react-parallax";

export const HomeComponents = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={styles.row}>
          <a style={styles.greenTextContent}>WE</a>
          <div style={{ width: "20px" }} />
          <a style={styles.textContent}>develop</a>
        </div>
        <div style={styles.row}>
          <img
            style={{ objectFit: "cover" }}
            src="https://cdn.discordapp.com/attachments/854388429075513344/1185259895549857812/vecteezy_a-man-hold-a-smartphone-one-line-self-drawing-ultra-high_14214268.gif?ex=658ef64c&is=657c814c&hm=21c058f9439eeafa6e3ae72511ced3d5cffa46d78efadd2e35a4829e5cf8b160&"
            width={150}
            height={150}
          />
          <a style={styles.textContent}>digital products</a>
        </div>
        <div style={styles.row}>
          <a style={styles.textContent}>from</a>
          <div style={{ width: "20px" }} />
          <div id="scroll-container">
            <div id="scroll-text">
              This is scrolling text.
              <br />
              This is scrolling text.
              <br />
              This is scrolling text.
            </div>
          </div>

          {/* <Title>begin</Title> */}
        </div>
      </div>

      <img
        src="https://cdn.discordapp.com/attachments/854388429075513344/1185276218917015612/vecteezy_3d-city-rotating-animation-loop_11647710.gif?ex=658f057f&is=657c907f&hm=23086590f324cbeea095c9098d73131ea35f9c4d93ef229418a6dbaf4f8daa6b&"
        style={styles.welcome}
      />
    </div>
  );
};

const styles = {
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6rem",
    minHeight: "100vh",
  },
  welcome: {
    width: "100%",
  },
  row: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  textContent: {
    fontSize: "6rem",
    fontWeight: "100",
  },
  greenTextContent: {
    color: "#0E6865",
    fontSize: "6rem",
    fontWeight: "100",
  },
  telImg: {
    width: "200px",
    height: "300px",
    objectFit: "cover",
  },
};
