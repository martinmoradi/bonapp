export function sample<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export function pickRandomIntInRange(num: number) {
  const numbers: number[] = []
  for (let i = 0; i < num; i++) {
    numbers.push(num)
  }
  return sample(numbers)
}
