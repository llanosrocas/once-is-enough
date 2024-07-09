import L from 'leaflet';
import preJourneyCoords from './geo/pre-journey.json' with { type: 'json' };
import { arrowConfig } from './ui/arrows';

export const preJourneyPathLayer = L.featureGroup([
  L.polyline(
    preJourneyCoords.features.map(({ geometry }) =>
      L.GeoJSON.coordsToLatLng(geometry.coordinates),
    ),
    { opacity: 0.75, color: '#eada30' },
  ).arrowheads(arrowConfig),
]);
