type Mods = Record<string, boolean | string>;

/**
 * Create string of classnames using params
 * @param cls - classname string
 * @param mods - object with key/value pairs where key is classname and value is of bool or string type
 * @param additional - an array of any onther classname strings
 */
export function classnames(
  cls: string,
  mods: Mods = {},
  additional: string[]
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => !!value)
      .map(([className]) => className),
  ].join(" ");
}

