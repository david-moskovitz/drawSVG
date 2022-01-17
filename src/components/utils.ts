interface Path {
  type: string;
  x?: number;
  y?: number;
}
export const joinPath = (paths: Path[]): string => {
  return paths
    .map((path) => {
      if (path.type === "Z") {
        return "Z";
      }
      return `${path.type}${path.x} ${path.y}`;
    })
    .join(" ");
};
