import { type Options } from "ky";
import { apiIcon } from "../lib/ky";

export const getIconService = {
  async getIcon(domain: any) {
    const response = await apiIcon.get(`icon/${domain}`, {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<any>();
    return data;
  },
};
