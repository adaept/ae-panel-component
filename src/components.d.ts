/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AePanelComponent {
    /**
    * Title for the panel
    */
    'aetitle': string;
    /**
    * Show/Hide the panel
    */
    'toggle': () => Promise<void>;
  }
}

declare global {


  interface HTMLAePanelComponentElement extends Components.AePanelComponent, HTMLStencilElement {}
  var HTMLAePanelComponentElement: {
    prototype: HTMLAePanelComponentElement;
    new (): HTMLAePanelComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ae-panel-component': HTMLAePanelComponentElement;
  }
}

declare namespace LocalJSX {
  interface AePanelComponent extends JSXBase.HTMLAttributes<HTMLAePanelComponentElement> {
    /**
    * Title for the panel
    */
    'aetitle'?: string;
  }

  interface IntrinsicElements {
    'ae-panel-component': AePanelComponent;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


