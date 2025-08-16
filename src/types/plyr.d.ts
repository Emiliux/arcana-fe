declare namespace Plyr {
  interface Source {
    src: string;
    type: string;
    size?: string | number;
  }

  interface Options {
    controls?: string[];
    settings?: string[];
    i18n?: any;
    tooltips?: any;
    keyboard?: any;
    [key: string]: any;
  }
}

declare class Plyr {
  constructor(element: string | HTMLElement, options?: Plyr.Options);
  destroy(): void;
  play(): Promise<void>;
  pause(): void;
  stop(): void;
  restart(): void;
  rewind(time: number): void;
  forward(time: number): void;
  setVolume(volume: number): void;
  getVolume(): number;
  muted: boolean;
  currentTime: number;
  duration: number;
  paused: boolean;
  ended: boolean;
  ready: boolean;
  on(event: string, callback: Function): void;
  off(event: string, callback?: Function): void;
  once(event: string, callback: Function): void;
  [key: string]: any;
}
