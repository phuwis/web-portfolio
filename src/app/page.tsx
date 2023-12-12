import Image from "next/image";
import styles from "./page.module.css";
import { Row } from "antd";
import Title from "antd/es/typography/Title";
import { HomeComponents } from "@/components/home";

export default function Home() {
  return (
    <div>
      <HomeComponents />
    </div>
  );
}
