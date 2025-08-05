import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import TechFeatures from "@/components/TechFeatures";
import OrderTracking from "@/components/OrderTracking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />
      <TechFeatures />
      <OrderTracking />
      <Footer />
    </div>
  );
};

export default Index;
