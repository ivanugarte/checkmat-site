import { Layout } from "../components/layout/Layout";
import Slider from "../components/slide/Slider";
import ImageTop from "../components/imageTop/ImageTop";

export default function Home() {
  return (
    <div className="fondoPantalla">
    <Layout>
      {/* <ImageTop /> */}
      <Slider />
      {/* <Projects /> */}
      {/* <About /> */}
      {/* <Card /> */}
    </Layout>
    </div>
  );
}
