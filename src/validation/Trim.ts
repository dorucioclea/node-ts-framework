import { Transform, TransformOptions } from 'class-transformer';

/* tslint:disable-next-line:function-name */
export function Trim(options?: TransformOptions) {
  return Transform(value => value.trim(), options);
}
