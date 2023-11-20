export const colorsRange: string[] = ["#F8B351", "#127EC0", "#DF5995"];

export function getRandomColor(colors: string[]): string {
  return colors[Math.floor(Math.random() * colors.length)];
}
