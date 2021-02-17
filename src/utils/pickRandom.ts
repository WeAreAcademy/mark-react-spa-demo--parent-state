/**
 * Typing is unimportant here, but - for the interested - it's
 *  using generic types:
 *
 * https://www.typescriptlang.org/docs/handbook/generics.html
 */
export function pickRandom<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
