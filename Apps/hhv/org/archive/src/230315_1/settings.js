const mapData = {
  projection: 'EPSG:2039',
  latestWkid: 2039,
  centerX: 202998.6,
  centerY: 593927.5,
  extent: true, // determine if there is an extent to the app. if false - next for parameters are irelevant
  minx: 131057.07,
  miny: 532475.14,
  maxx: 314659.42,
  maxy: 701339.38,
  min_zoom: 12, 
  max_zoom: 22,
  default_zoom: 12.2
}


const settings = {
  defaultLanguage: 'HE',
  isMapComparison: true,
  version: '1.0.0',
  email: 'office@inter-town.com',
  login: true,
  basepath: 'hhv/org',
  LayersOpacity: 0.75,                // use 0 to 1
  defaultBuffer: 50,
  maxBuffer: 2000,
  stepBuffer: 5,
  minBuffer: 0,
  isZoomGeolocation: true,
  zoomGeolocation: 18,
}

const languageMenu = {
  HE: true,
  EN: true
}

export {
  mapData,
  settings,
  languageMenu
}
