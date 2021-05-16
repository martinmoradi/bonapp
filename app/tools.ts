export function sample<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

export function range(start: number, end?: number) {
  const numbers: number[] = []
  if (!end) {
    for (let i = 0; i < start; i++) {
      numbers.push(i)
    }
  } else {
    for (let i = start; i < end; i++) {
      numbers.push(i)
    }
  }
  return numbers
}

export function times(count: number) {
  const numbers: number[] = []
  for (let i = 0; i < count; i++) {
    numbers.push(i)
  }
  return numbers
}
