/* eslint-disable @next/next/no-img-element */
import { Button } from "@fellipeutaka/ui/button";
import { Card } from "@fellipeutaka/ui/card";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { getIconService } from "../services";
import { motion } from "framer-motion";

export default function Cards({ iconUrl }: { iconUrl: string }) {
  const [title, setTitle] = useState(iconUrl);
  const [lastWord, setLastWord] = useState(iconUrl.split("/").pop());

  useEffect(() => {
    setTitle(iconUrl);
    setLastWord(iconUrl.split("/").pop());
  }, [iconUrl]);

  async function handleDownloadIcon() {
    try {
      const res = await getIconService.getIcon(iconUrl.split("/").pop());

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
    } catch (err) {
      console.error("Error handling search icon:", err);
    }
  }

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="w-64 max-w-sm rounded-xl border-t dark:border-gray-800 backdrop-blur-sm">
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
          <div className="relative aspect-square">
            <img
              alt="Image"
              className="object-cover rounded-3xl p-5"
              src={iconUrl}
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
            />
          </div>
        </motion.div>
        <Card.Content className="p-6">
          <div className="grid gap-2">
            <Card.Title className=" w-20 text-center text-lg ml-10">
              {lastWord}
            </Card.Title>
            <Card.Description className="text-sm"></Card.Description>
          </div>
        </Card.Content>
        <Card.Footer className="p-6 flex justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button onClick={handleDownloadIcon}>
              Baixar ícone
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </Card.Footer>
      </Card>
    </motion.div>
  );
}
