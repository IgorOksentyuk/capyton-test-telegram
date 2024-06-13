export function formatPoints(points: number): string {
  const pointsString = points.toString();
  const match = pointsString.match(/^(.*?)(000+)$/);
  const formattedPoints = match ? `${match[1]} ${match[2]}` : pointsString;

  return formattedPoints;
}
