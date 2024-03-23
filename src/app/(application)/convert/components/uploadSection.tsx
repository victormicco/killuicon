import { Label } from "@fellipeutaka/ui/label";
import { TextFieldInput } from "@fellipeutaka/ui/textfield";
import { Select } from "@fellipeutaka/ui/select";
import { Button } from "@fellipeutaka/ui/button";
import Image from "next/image";

export default function UploadSection() {
  return (
    <div>
      <div />
      <main className="flex flex-col w-full items-center py-6">
        <section className="w-full max-w-3xl px-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Image Converter</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Convert your images to SVG, PNG, or JPG.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="images">Upload Image</Label>
              <input accept="image/*" id="images" multiple type="file" />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="format">Select Format</Label>
              <Select>
                <option value="svg">SVG</option>
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
              </Select>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 items-start justify-start gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="width">Width (px)</Label>
              <TextFieldInput
                id="width"
                placeholder="Enter width"
                type="number"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="height">Height (px)</Label>
              <TextFieldInput
                id="height"
                placeholder="Enter height"
                type="number"
              />
            </div>
          </div>
          <div className="flex w-full items-center space-x-2">
            <Button>Convert</Button>
            <Button variant="outline">Clear</Button>
          </div>
        </section>
        <section className="w-full max-w-3xl border rounded-lg p-4">
          <h2 className="text-lg font-medium">Converted Images</h2>
          <div className="grid w-full grid-cols-2 items-start justify-start gap-4">
            <div className="flex flex-col space-y-1">
              <Label htmlFor="width1">Width (px)</Label>
              <TextFieldInput
                id="width1"
                placeholder="Enter width"
                type="number"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <Label htmlFor="height1">Height (px)</Label>
              <TextFieldInput
                id="height1"
                placeholder="Enter height"
                type="number"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-3 items-start justify-start gap-4">
            <div className="flex flex-col space-y-1">
              <Image
                alt="Image"
                className="rounded-md overflow-hidden object-cover"
                src="https://i.pinimg.com/originals/9f/99/59/9f9959c3e16d740c62fb1fe250ed67c3.gif"
                height={500}
                width={500}
              />
              <Button className="w-full" size="sm">
                Download
              </Button>
            </div>
            <div className="flex flex-col space-y-1">
              <Image
                alt="Image"
                className="rounded-md overflow-hidden object-cover"
                src="https://i.pinimg.com/originals/9f/99/59/9f9959c3e16d740c62fb1fe250ed67c3.gif"
                height={500}
                width={500}
              />
              <Button className="w-full" size="sm">
                Download
              </Button>
            </div>
            <div className="flex flex-col space-y-1">
              <Image
                alt="Image"
                className="rounded-md overflow-hidden object-cover"
                src="https://i.pinimg.com/originals/9f/99/59/9f9959c3e16d740c62fb1fe250ed67c3.gif"
                height={500}
                width={500}
              />
              <Button className="w-full" size="sm">
                Download
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
