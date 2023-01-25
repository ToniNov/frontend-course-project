import {StringMap, TOptions} from "i18next";

export type i18translateType = {
    t: (key: string | TemplateStringsArray | (string | TemplateStringsArray)[], options?: string | TOptions<StringMap> | undefined) => string
}