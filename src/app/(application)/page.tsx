import { Button } from "@fellipeutaka/ui/button";
import HeroSection from "./components/heroSection";
import { ModeToggle } from "../../components/setThemeToggle";
import Navbar from "../../components/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
