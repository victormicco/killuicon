import { Metadata } from "next";
import UploadSection from "./components/uploadSection";

export const metadata: Metadata = {
  title: "Killuicon | Convert",
  description: "Consiga qualquer ícone",
};

export default function Page() {
  return (
    <>
      <UploadSection />
    </>
  );
}
