// types/flickity.d.ts
declare module "flickity" {
  interface FlickityOptions {
    accessibility?: boolean;
    resize?: boolean;
    wrapAround?: boolean;
    prevNextButtons?: boolean;
    pageDots?: boolean;
    percentPosition?: boolean;
    setGallerySize?: boolean;
    [key: string]: any;
  }

  class Flickity {
    constructor(element: Element | string, options?: FlickityOptions);
    x: number;
    settle(x: number): void;
    destroy(): void;
    next(): void;
  }

  export = Flickity;
}