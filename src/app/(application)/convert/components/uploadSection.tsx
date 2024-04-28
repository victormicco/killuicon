"use client";

import Dropzone from "../../../../components/dropzone";

export default function UploadSection() {
  return (
    <div>
      <div />
      <main className="flex flex-col w-full items-center py-6">
        <section className="w-full max-w-3xl px-4 space-y-4">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Conversor de Arquivos</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Converta extensões de audios, vídeos e imagens de forma rápida.
            </p>
          </div>
          <div className="flex flex-col space-y-2 gap-y-8">
            <Dropzone />
          </div>
        </section>
      </main>
    </div>
  );
}
