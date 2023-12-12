import { Row, Typography } from "antd";
import Title from "antd/es/typography/Title";

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
      <div style={styles.row}>
        <Title style={{ marginRight: "10px" }}>WE</Title>
        <Title>develop</Title>
      </div>
      <div style={styles.row}>
        <img
          src="https://cdn.discordapp.com/attachments/854388429075513344/1184217668841119864/utotech-logo.png?ex=658b2ba5&is=6578b6a5&hm=5c2b6871f1a80cf3125d910cf5fb0d6f884898720dee3aed23f9d8b411987ca6&"
          width={60}
          height={60}
        />
        <p>digital products</p>
      </div>
      <div style={styles.row}>
        <Title style={{ marginRight: "10px" }}>from</Title>
        <Title>begin</Title>
      </div>
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
  row: { width: "100%", display: "flex", justifyContent: "center" },
};
