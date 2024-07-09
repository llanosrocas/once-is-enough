import L from 'leaflet';

export const initialZoom = 10;
export const map = L.map('map', {
  center: [-38.12689188044293, 144.82814048484795],
  zoom: initialZoom,
  preferCanvas: true,
  fullscreenControl: true,
  fullscreenControlOptions: {
    position: 'topleft',
  },
});
