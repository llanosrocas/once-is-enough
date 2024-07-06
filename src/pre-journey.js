import preJourneyCoords from './geo/pre-journey.json' assert { type: 'json' };

export const preJourneyPathLayer = L.featureGroup([
  L.polyline(
    preJourneyCoords.features.map(({ geometry }) =>
      L.GeoJSON.coordsToLatLng(geometry.coordinates),
    ),
    { opacity: 0.75, color: '#57A6A1' },
  ),
]);
