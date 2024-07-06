import journeySightCoords from './geo/journey-sight.json' assert { type: 'json' };
import journeyCoords from './geo/journey.json' assert { type: 'json' };
import { icons } from './ui/icons';
import { buildPopup } from './ui/popup';

export const journeyMarkersLayer = L.markerClusterGroup({
  iconCreateFunction: cluster =>
    L.divIcon({
      className: 'marker-cluster',
      html: `
        <div class="marker-cluster-journey">${cluster.getChildCount()}</div>`,
    }),
}).addLayer(
  L.featureGroup(
    journeyCoords.features.reduce((acc, { properties, geometry }) => {
      if (properties.icon) {
        const marker = L.marker(
          L.GeoJSON.coordsToLatLng(geometry.coordinates),
          {
            icon: icons[properties.icon] || icons['yacht'],
          },
        ).bindPopup(buildPopup(properties, geometry.coordinates));

        acc.push(marker);
      }

      return acc;
    }, []),
  ),
);

const arrowConfig = {
  size: `5%`,
  frequency: '20000m',
  offsets: { end: '10px' },
};

export const journeyPathLayer = L.featureGroup([
  L.polyline(
    journeyCoords.features.map(({ geometry }) =>
      L.GeoJSON.coordsToLatLng(geometry.coordinates),
    ),
    {
      opacity: 0.75,
      showMeasurements: true,
      measurementOptions: { showOnHover: true },
    },
  ).arrowheads(arrowConfig),
]);

export const journeySightMarkersLayer = L.markerClusterGroup({
  iconCreateFunction: cluster =>
    L.divIcon({
      className: 'marker-cluster',
      html: `
        <div class="marker-cluster-sight">${cluster.getChildCount()}</div>`,
    }),
}).addLayer(
  L.featureGroup(
    journeySightCoords.features.map(({ properties, geometry }) =>
      L.marker(L.GeoJSON.coordsToLatLng(geometry.coordinates), {
        icon: icons[properties.icon] || icons['yacht'],
      }).bindPopup(buildPopup(properties, geometry.coordinates)),
    ),
  ),
);