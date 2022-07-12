declare module 'qs' {
  interface StringfyOptions {
    addQueryPrefix?: boolean;
  }
  interface ParseOptions {
    ignoreQueryPrefix?: boolean;
  }

  function stringfy(object: any, options?: StringfyOptions): string;
  function parse<T = any>(str: string, options?: ParseOptions): T;
}
