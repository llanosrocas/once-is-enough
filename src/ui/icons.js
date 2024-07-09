import L from 'leaflet';

export const iconConfig = {
  iconSize: [24, 24],
  popupAnchor: [0, -12],
};

export const icons = {
  yacht: L.icon({
    iconUrl: 'yacht.svg',
    ...iconConfig,
  }),
  anchor: L.icon({
    iconUrl: 'anchor.svg',
    ...iconConfig,
  }),
  sight: L.icon({
    iconUrl: 'sight.svg',
    ...iconConfig,
  }),
  none: L.divIcon({ className: 'marker-hidden' }),
};
