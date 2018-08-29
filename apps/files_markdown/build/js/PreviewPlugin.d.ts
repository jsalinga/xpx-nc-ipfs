/// <reference types="jquery" />
/// <reference types="underscore" />
import Thenable = JQuery.Thenable;
import TextEditorPreviewPlugin = OCA.Files_Texteditor.TextEditorPreviewPlugin;
export declare class PreviewPlugin implements TextEditorPreviewPlugin {
    private renderer;
    private rangeConstructor;
    private initPromise;
    private textEditorOnHashChange;
    private offsetMap;
    private session;
    private previewElement;
    private scrollMode;
    init(): Promise<void>;
    initAceHooks(): void;
    initPreviewHooks(element: any): void;
    onHashChange(e: PopStateEvent): void;
    preview: ((text: string, element: any) => void) & _.Cancelable;
    initCheckboxHandler(element: any): void;
    buildOffsetMap: ((element: any) => void) & _.Cancelable;
    onScrollEditor: ((top: number) => void) & _.Cancelable;
    onScrollPreview: (() => void) & _.Cancelable;
    resetScrollMode: (() => void) & _.Cancelable;
    handleImage: (image: HTMLImageElement, file: any) => void;
    uploadImage(name: string, file: File): Thenable<void>;
    getCurrentPath(): string | undefined;
}
