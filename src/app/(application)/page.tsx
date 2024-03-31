import { Button } from "@fellipeutaka/ui/button";
import HeroSection from "./components/heroSection";
import { ModeToggle } from "../../components/setThemeToggle";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
