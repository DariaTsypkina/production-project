declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare const __IS_DEV__: boolean;
declare const __API__: string;
