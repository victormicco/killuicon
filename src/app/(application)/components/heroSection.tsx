"use client";
import { TextFieldInput } from "@fellipeutaka/ui/textfield";
import { Button } from "@fellipeutaka/ui/button";
import { Background } from "../../../components/background";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Form, useForm } from "@fellipeutaka/ui/form";
import { getIconService } from "../../../services";
import { apiIcon } from "../../../lib/ky";
import { Download, Search } from "lucide-react";
import Cards from "../../../components/card";
import { useLocalStorage } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { Toaster, toast } from "@fellipeutaka/ui/toast";

import Image from "next/image";
import React from "react";

export const getIconSchema = z.object({
  domain: z.string(),
});

export type GetIconSchema = z.output<typeof getIconSchema>;
export type GetIconProps = SearchIconUtilProps<GetIconSchema>;

interface IconApiResponse {
  url: string; // Assuming the API response contains a 'url' field
}

export default function HeroSection({ defaultValues }: GetIconProps) {
  const form = useForm({
    schema: getIconSchema,
    defaultValues,
  });
  const domain = form.watch("domain");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  const [imageURL, setImageURL] = useState(""); // State to store the image URL
  const ref = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearchIcon();
      }
    };

    if (ref.current) {
      ref.current.addEventListener("keypress", handleKeyPress);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("keypress", handleKeyPress);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSearchIcon() {
    try {
      setLoading(true);

      const iconDomain = form.getValues("domain"); // Accessing form value directly

      const res = await getIconService.getIcon(iconDomain);

      if (!res.ok) {
        throw new Error("Failed to fetch icon");
      }
      if (iconDomain === "") {
        throw new Error("Failed to fetch icon");
      }

      const data = await res.clone(); // Clone the response to consume it again
      const iconUrl = data.url; // Assuming the API response contains the URL of the icon

      setFormData(iconUrl); // Set the icon URL in state
      form.setValue("domain", "");
    } catch (err) {
      console.error("Error handling search icon:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Background>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 h-4/6">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-10">
                    Ache qualquer{" "}
                    <span className="underline decoration-violet-500 decoration-wavy decoration-from-font underline-offset-4">
                      ícone
                    </span>{" "}
                    com o{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-900 to-purple-600 bg-clip-text  font-extrabold tracking-tighter text-transparent">
                      Killuicon
                    </span>
                    ⚡
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Apenas coloque o domínio do site que deseja obter o ícone e
                    veja a mágica!
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2 pt-4">
                  <Form {...form}>
                    <form className="flex space-x-2">
                      <Form.Field
                        control={form.control}
                        name="domain"
                        render={({ field }) => (
                          <TextFieldInput
                            className="max-w-lg flex-1"
                            placeholder="Ex: youtube.com.br"
                            type="text"
                            {...field}
                            ref={ref}
                          />
                        )}
                      />
                      <Toaster />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={
                          domain
                            ? handleSearchIcon
                            : () => {
                                return toast.error("Digite um domínio válido!");
                              }
                        }
                      >
                        Buscar Ícone
                        <Search className="h-4 w-4 ml-3" />
                      </Button>
                    </form>
                  </Form>
                </div>
                {formData ? (
                  <Cards iconUrl={formData} />
                ) : (
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                  >
                    <Image
                      alt="Killuicon"
                      src="https://i.pinimg.com/originals/9f/99/59/9f9959c3e16d740c62fb1fe250ed67c3.gif"
                      width={500}
                      height={500}
                      className="rounded-xl pt-7 w-auto h-auto max-w-[500px] max-h-[500px]"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        </motion.div>
      </Background>
    </>
  );
}
