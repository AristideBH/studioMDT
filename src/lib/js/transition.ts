import { quintOut } from 'svelte/easing';

export const enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

function clipPath(
  node: Node,
  params: { duration?: number; direction?: Direction; delay?: number; easing?: (arg1: number) => number }
) {
  let inset: string;
  const insetDir = (t: number, u: number) => {
    if (params.direction == `UP`) inset = `inset( 0% 0% ${u * 100}% 0%)`;
    else if (params.direction == `DOWN`) inset = `inset(${u * 100}% 0% 0% 0%)`;
    else if (params.direction == `LEFT`) inset = `inset( 0% ${u * 100}% 0% 0%)`;
    else if (params.direction == `RIGHT`) inset = `inset( 0% 0% 0% ${u * 100}%)`;
    return inset;
  };

  return {
    delay: params.delay || 0,
    duration: params.duration || 400,
    easing: params.easing || quintOut,
    direction: params.direction || 'DOWN',
    css: (t: number, u: number) => `
			clip-path: ${insetDir(t, u)};
			opacity: ${t}
		`
  };
}
export { clipPath };