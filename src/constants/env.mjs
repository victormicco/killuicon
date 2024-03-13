import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_ICON_BASE_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_ICON_BASE_URL: process.env.NEXT_PUBLIC_ICON_BASE_URL,
  },
});
