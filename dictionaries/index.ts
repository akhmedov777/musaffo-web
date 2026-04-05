import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  uz: () => import("./uz").then((m) => m.default),
  ru: () => import("./ru").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
