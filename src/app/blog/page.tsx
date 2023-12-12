import { Typography, Row, Col, Card, Button, Image } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Blog 1",
    description: "description 1",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "description 2",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png",
  },
];

export default function Blog() {
  return (
    <div>
      <div style={styles.featuresBox}>
        {data.map((item: any, id: any) => (
          <Link href="/blog/[id]" as={`/blog/${item.id}`}>
            <div>
              <img src={item.imageUrl} />
              <Title> {item.title}</Title>
            </div>
          </Link>
        ))}
      </div>
      {/* <Row>
        <Title>A </Title>
        <Title>B</Title>
        <Title> C</Title>
      </Row> */}
      {/* <Title level={4}>Blog features</Title>
      <Typography style={{ color: "grey" }}>description</Typography> */}
      {/* <Row style={styles.marginVertical}>
        {data.map((item: any) => (
          <Col key={item.id} span={24} md={12} lg={12} xl={12}>
            <Link href={`blog/${item.id}`}>
              <Card
                style={{
                  ...styles.card,
                  ...(item.isHovered ? styles.cardHovered : {}),
                }}
                hoverable
              >
                <Row justify="center">
                  <div style={styles.featureImage}>
                    <Image preview={false} src={item.imageUrl} />
                  </div>
                </Row>

                <Title level={4} style={{ color: "white" }}>
                  {item.title}
                </Title>
                <div style={styles.featureDescription}>
                  <Typography style={{ color: "white" }}>
                    {item.description}
                  </Typography>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row> */}
      {/* <Row justify="center">
        <Link href="/all-feature">
          <Button type="primary">See more</Button>
        </Link>
      </Row> */}
    </div>
  );
}

export const styles = {
  welcome: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
  } as React.CSSProperties,
  welcomeFlexBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  } as React.CSSProperties,
  typeAnimation: {
    fontSize: "20px",
    color: "white",
    textAlign: "center",
  } as React.CSSProperties,
  featuresBox: {
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: "120px",
    marginBottom: "120px",
  } as React.CSSProperties,
  featureImage: { width: "50%", objectFit: "cover" } as React.CSSProperties,
  featureDescription: {
    color: "white",
    fontSize: "16px",
    marginBottom: "20px",
  } as React.CSSProperties,
  largeTextBox: {
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: "250px",
    marginBottom: "250px",
  } as React.CSSProperties,
  letChatBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
  } as React.CSSProperties,
  marginVertical: {
    marginTop: "20px",
    marginBottom: "20px",
  } as React.CSSProperties,

  card: {
    height: "100%",
    transition: "transform 0.3s",
  } as React.CSSProperties,
  cardHovered: {
    transform: "scale(1.1)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 1)",
  } as React.CSSProperties,
};
