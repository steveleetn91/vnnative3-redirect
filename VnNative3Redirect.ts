import VnNative3RedirectInterface from "./interface";

export default class VnNative3RedirectCore implements VnNative3RedirectInterface {
    to(url : string) : void {
        let app : any;
        app = window;
        app.location.replace(`/${url}`);
    }
    back() : void {
        let app : any;
        app = window;
        app.history.go(-1);
    }
}