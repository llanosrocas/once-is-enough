import L from 'leaflet';
import journeySightCoords from './geo/journey-sight.json' with { type: 'json' };
import journeyCoords from './geo/journey.json' with { type: 'json' };
import { arrowConfig } from './ui/arrows';
import { icons } from './ui/icons';
import { buildPopup } from './ui/popup';

export const journeyPathLayer = L.featureGroup([
  // init empty line and add coords while creating journey markers to avoid remap
  L.polyline([], {
    opacity: 0.75,
    showMeasurements: true,
    measurementOptions: { showOnHover: true },
  }).arrowheads(arrowConfig),
]);

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

      journeyPathLayer
        // this feature group has only one layer so just add polyline coords
        .getLayers()[0]
        .addLatLng(L.GeoJSON.coordsToLatLng(geometry.coordinates));

      return acc;
    }, []),
  ),
);

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
