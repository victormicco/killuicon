import ky from "ky";

import { env } from "@/constants/env.mjs";

export const apiIcon = ky.create({
  prefixUrl: env.NEXT_PUBLIC_ICON_BASE_URL,
  timeout: 180000,
});
