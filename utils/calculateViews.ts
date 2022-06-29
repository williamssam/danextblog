export const calculateViews = (value: number) => {
  if (value < 1000) {
    return value
  } else if (value >= 1000) {
    return `${value / 1000}k`
  } else if (value >= 1000000) {
    return `${value / 1000000}M`
  }
}
