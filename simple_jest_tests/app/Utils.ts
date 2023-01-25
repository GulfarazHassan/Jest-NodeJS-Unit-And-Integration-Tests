import { parse, UrlWithParsedQuery } from "url";

export class Utils {

    public static parseUrl(url: string): UrlWithParsedQuery {
        if (!url) throw new Error("Invalid url")
        return parse(url, true)
    }

    public static toUpperCase(arg: string) {
        return arg.toUpperCase();
    }
}