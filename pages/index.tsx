import { Layout } from "../components/layout/Layout";
import People from "../components/people/People";
import Slider from "../components/slide/Slider";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <People />
    </Layout>
  );
}
