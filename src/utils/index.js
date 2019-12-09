const names = ["Jack", "Matt", "Carla", "Simpson", "Andro", "Jack", "Matt", "Carla", "Simpson", "Andro"];

export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names)
    }, 2000)
  })
}
