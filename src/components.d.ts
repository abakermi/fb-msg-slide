/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface FbMsgSlide {}
}

declare global {


  interface HTMLFbMsgSlideElement extends Components.FbMsgSlide, HTMLStencilElement {}
  var HTMLFbMsgSlideElement: {
    prototype: HTMLFbMsgSlideElement;
    new (): HTMLFbMsgSlideElement;
  };
  interface HTMLElementTagNameMap {
    'fb-msg-slide': HTMLFbMsgSlideElement;
  }
}

declare namespace LocalJSX {
  interface FbMsgSlide {}

  interface IntrinsicElements {
    'fb-msg-slide': FbMsgSlide;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'fb-msg-slide': LocalJSX.FbMsgSlide & JSXBase.HTMLAttributes<HTMLFbMsgSlideElement>;
    }
  }
}


