import { Spec as VgSpec } from 'vega-typings/types/spec';

export function recListItemId(rank: number) {
  return `rec-list-item-${rank}`;
}

/**
 * Transforms the data url from the vega spec
 * to use static files from the `public` folder of this next project.
 *
 * @param spec - Vega spec to be transformed
 */
export function vegaSpecPatch(spec: VgSpec): VgSpec {
  // @ts-ignore
  const data = spec.data[0];
  // @ts-ignore
  const urlSegments = data.url.split('/');
  const dataName = urlSegments[urlSegments.length - 1];
  return { ...spec, data: [{ ...data, url: `/data/${dataName}` }] };
}
