export const baseMaps = {
  Standart: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
    {
      attribution:
        "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/attributions'>CARTO</a>",
    },
  ),
  Full: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }),
  Satellite: L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
      attribution:
        'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    },
  ),
  Dark: L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    },
  ),
};

export const openSeaMap = L.tileLayer(
  'https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png',
  {
    attribution:
      'Map data: &copy; <a href="http://www.openseamap.org">OpenSeaMap</a> contributors',
  },
);
