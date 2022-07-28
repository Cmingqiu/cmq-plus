export function createNameSpace(namespace: string) {
  const prefix = `c-${namespace}`;
  return createBEM(prefix);
}

export function createBEM(prefix: string) {
  const b = (blockName = '') => _bem(prefix, blockName, '', '');
  const e = (elementName?: string) =>
    elementName ? _bem(prefix, '', elementName, '') : '';
  const m = (modifyName?: string) =>
    modifyName ? _bem(prefix, '', '', modifyName) : '';
  const be = (blockName?: string, elementName?: string) =>
    blockName && elementName ? _bem(prefix, blockName, elementName, '') : '';
  const bm = (blockName?: string, modifyName?: string) =>
    blockName && modifyName ? _bem(prefix, blockName, '', modifyName) : '';
  const em = (elementName?: string, modifyName?: string) =>
    elementName && modifyName ? _bem(prefix, '', elementName, modifyName) : '';
  const bem = (blockName?: string, elementName?: string, modifyName?: string) =>
    blockName && elementName && modifyName
      ? _bem(prefix, blockName, elementName, modifyName)
      : '';
  return { b, e, m, be, bm, em, bem };
}

function _bem(
  prefix: string,
  blockName: string,
  elementName: string,
  modifyName: string
) {
  if (blockName) {
    prefix += `-${blockName}`;
  }
  if (elementName) {
    prefix += `__${elementName}`;
  }
  if (modifyName) {
    prefix += `--${modifyName}`;
  }
  return prefix;
}
