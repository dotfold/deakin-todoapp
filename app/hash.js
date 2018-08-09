/**
 * Generate a 6 char hexadeciaml hash. There is a possibility of collision,
 * but for the purpose of this app it's not a concern.
 */
const generateId = () => {
  return Math.random().toString(16).substr(2, 8)
}

export { generateId }
