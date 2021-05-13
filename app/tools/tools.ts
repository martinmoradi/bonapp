export const sample = (arg: [any]) => {
  const randomIndex = Math.floor(Math.random() * arg.length)
  return arg[randomIndex]
}
