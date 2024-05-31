import { english } from "./languages/en";
import { polish } from "./languages/pl";
import { ContentSchema } from "./schema";


export const dictionary: Record<string, ContentSchema> = {
  en: english,

  pl: polish,
};
