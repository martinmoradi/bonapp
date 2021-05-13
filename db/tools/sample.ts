export const sample = (arg: []) => {
  const randomIndex = Math.floor(Math.random() * arg.length)
  return arg[randomIndex]
}
