type Mods = Record<string, boolean | string>;

export function classnames(
  cls: string,
  additional: string[] = [],
  mods: Mods = {}
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([, value]) => !!value)
      .map(([className]) => className),
  ].join(" ");
}

