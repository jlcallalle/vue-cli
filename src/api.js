const url =
  'https://api.coincap.io/v2' /* https://api.coincap.io/v2/assets?limit=20 */

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets
}
