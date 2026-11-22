export {};

declare global {
  interface WowInstance {
    init(): void;
  }

  interface WowConstructor {
    new (options?: {
      live?: boolean;
      boxClass?: string;
      animateClass?: string;
      offset?: number;
      mobile?: boolean;
      resetAnimation?: boolean;
    }): WowInstance;
  }

  interface Window {
    /** set by ThemeScripts once the shared jQuery/Slick/Bootstrap stack is ready */
    __mkThemeReady?: boolean;
    WOW?: WowConstructor;
    Prism?: {
      highlightAll?: () => void;
    };
  }
}