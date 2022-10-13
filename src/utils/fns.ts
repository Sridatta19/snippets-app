export const callAll =
  (...fns: any[]) =>
  (...args: any[]) =>
    fns.forEach((fn) => fn && fn(...args))

export const omit = <T extends Record<string, any>>(
  obj: T,
  names: Array<keyof T>
): {
  [K2 in Exclude<keyof T, keyof T>]: T[K2]
} => {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K]
  }
  let key: keyof typeof obj
  for (key in obj) {
    if (!names.includes(key)) {
      ret[key] = obj[key]
    }
  }
  return ret
}
export const groupBy = <T extends Record<string, any>, K extends keyof T>(
  xs: T[],
  key: K
): Record<T[K], T[]> => {
  return xs.reduce(function (rv: Record<T[K], T[]>, x: T) {
    if (x[key]) {
      ;(rv[x[key]] = rv[x[key]] || []).push(x)
    }
    return rv
  }, {} as Record<T[K], T[]>)
}

export const uniqueKeys = function <
  T extends Record<string, any>,
  K extends keyof T
>(arr: T[], key: K): Array<T[K]> {
  return arr
    .map((t) => t[key])
    .filter((val) => !!val)
    .reduce((acc: Array<T[K]>, elem: T[K]) => acc.concat(elem), [])
    .filter((el: T[K], i: number, list: Array<T[K]>) => list.indexOf(el) === i)
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
