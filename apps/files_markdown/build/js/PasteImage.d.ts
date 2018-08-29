export declare type PasteListener = (image: HTMLImageElement, file: File) => void;
export declare class PasteImage {
    private initialized;
    private listeners;
    private listenForPaste();
    private init();
    private pasteHandler(e);
    private getURLObj();
    private createImage(source, file);
    listen(handler: PasteListener): void;
}
