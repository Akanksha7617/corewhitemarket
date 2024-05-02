import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import Small from "../components/smallslie/Small";
import Camera from "../components/Camera";
import Constslider from "../components/Constslider";





const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <Constslider/>
 
     <SliderHome />
     
    
      
      <Wrapper />
      <Small/>
      {/* <Camera /> */}
      <Section
        title="Best selling"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
      <Camera/>
      <Section
        title="Mobile & Accessories"
        bgColor="white"
        productItems={newArrivalData}
      />
      {/* <Section title="Best Sales" bgColor="#f6f9fc" productItems={bestSales} /> */}
    </Fragment>
    
  );
};

export default Home;
