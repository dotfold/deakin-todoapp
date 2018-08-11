/*

type GeoLocation = {
  timestamp: float,
  coords: {
    speed: uint,
    latitude: float,
    longitude: float,
    altitude: float,
    accuracy: float,
    altitudeAccuracy: float
  }
}

type TodoItem = {
  id: string,
  text: string.
  completed: bool,
  location: GeoLocation
}
*/

// picked by trial and error with some lat/lng values on google maps
const VARIANCE = 0.001

function range (x, y, variance) {
  const upper = y + variance
  const lower = y - variance
  return x >= lower && x <= upper
}

/**
 *  @param item TodoItem
 * Given a location, evaluate if it is close (approx +/- 50m to the current location)
 */
export async function withinBounds (item) {
  // early exit if the item wasn't tagged
  if (!item.location) return Promise.resolve(false)

  const { location: { coords: { latitude, longitude } } } = item
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(location => {
      const {
        coords: { latitude: currentLatitude, longitude: currentLongitude }
      } = location

      resolve(
        range(latitude, currentLatitude, VARIANCE) &&
          range(longitude, currentLongitude, VARIANCE)
      )
    })
  })
}
