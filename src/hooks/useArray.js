import { useState } from "react"

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray(a => [...a, element])
  }
  function remove(index) {
    setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
  }
  function update(index, newElement) {
    setArray(a => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ])
  }
  return { array, set: setArray, push, remove, update }
}