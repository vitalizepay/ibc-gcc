import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IBC Dubai - Indian Business Circle | Meet. Connect. Grow.</title>
        <meta 
          name="description" 
          content="Join Dubai's premier Indian business networking community. Connect with 500+ entrepreneurs and industry leaders. Exclusive events, partnerships, and growth opportunities." 
        />
        <meta name="keywords" content="Indian Business Circle, IBC Dubai, business networking Dubai, Indian entrepreneurs UAE, business community Dubai" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Benefits />
          <Events />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;