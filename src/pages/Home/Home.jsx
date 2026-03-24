import Layout from "../../components/layout/Layout";
import Hero from "../../components/sections/Hero";
import ComoFunciona from "../../components/sections/ComoFunciona";
import Funcionalidades from "../../components/sections/Funcionalidades";
import PreviewMemorial from "../../components/sections/PreviewMemorial";
import FAQ from "../../components/sections/FAQ";
import CTA from "../../components/sections/CTA";

function Home() {
  return (
    <Layout>
      <Hero />
      <ComoFunciona />
      <Funcionalidades />
      <PreviewMemorial />
      <FAQ />
      <CTA />
    </Layout>
  );
}

export default Home;
