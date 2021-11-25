import VnNative3RedirectInterface from "./interface";
export default class VnNative3RedirectCore implements VnNative3RedirectInterface {
    to(url: string): void;
    back(): void;
}
