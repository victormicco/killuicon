/* eslint-disable @next/next/no-img-element */
import { Button } from "@fellipeutaka/ui/button";
import { Card } from "@fellipeutaka/ui/card";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { getIconService } from "../services";

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
    <Card className="w-64 max-w-sm rounded-xl border-t dark:border-gray-800 backdrop-blur-sm">
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
      <Card.Content className="p-6">
        <div className="grid gap-2">
          <Card.Title className="text-base w-20">{lastWord}</Card.Title>
          <Card.Description className="text-sm"></Card.Description>
        </div>
      </Card.Content>
      <Card.Footer className="p-6 flex justify-center">
        <Button onClick={handleDownloadIcon}>
          Baixar ícone
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </Card.Footer>
    </Card>
  );
}
