"use client";
import { TextFieldInput } from "@fellipeutaka/ui/textfield";
import { Button } from "@fellipeutaka/ui/button";
import { Background } from "../../../components/background";
import { useState } from "react";
import { z } from "zod";
import { Form, useForm } from "@fellipeutaka/ui/form";
import { getIconService } from "../../../services";
import { apiIcon } from "../../../lib/ky";
import { Download } from "lucide-react";

export const getIconSchema = z.object({
  domain: z.string(),
});

export type GetIconSchema = z.output<typeof getIconSchema>;
export type GetIconProps = SearchIconUtilProps<GetIconSchema>;

export default function HeroSection({ defaultValues }: GetIconProps) {
  const form = useForm({
    schema: getIconSchema,
    defaultValues,
  });
  const domain = form.watch("domain");
  const [loading, setLoading] = useState(false);

  async function handleSearchIcon() {
    try {
      setLoading(true);

      const res = await getIconService.getIcon(domain);

      if (!res.ok) {
        throw new Error("Failed to fetch icon");
      }

      const blob = await res.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "icon.png";
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);

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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 h-4/6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ache qualquer ícone com o{" "}
                  <span className="bg-gradient-to-r from-purple-500 via-purple-900 to-purple-500 bg-clip-text  font-extrabold tracking-tighter text-transparent">
                    Killuicon
                  </span>
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
                        />
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleSearchIcon}
                    >
                      Baixar Ícone
                      <Download className="h-4 w-4 ml-2 mb-1" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </Background>
    </>
  );
}
