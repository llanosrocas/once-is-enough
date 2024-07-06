import L from 'leaflet';
import 'leaflet-arrowheads';
import 'leaflet-measure-path/leaflet-measure-path.css';
import 'leaflet-measure-path/leaflet-measure-path.js';
import 'leaflet.fullscreen/Control.FullScreen.css';
import 'leaflet.fullscreen/Control.FullScreen.js';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/leaflet.markercluster.js';
import 'leaflet/dist/leaflet.css';
import './global.scss';

import {
  journeyMarkersLayer,
  journeyPathLayer,
  journeySightMarkersLayer,
} from './journey';
import { map } from './map';
import { preJourneyPathLayer } from './pre-journey';
import { baseMaps, openSeaMap } from './tiles';
import { legend } from './ui/legend';

baseMaps.Standart.addTo(map);

journeyPathLayer.addTo(map);
journeyMarkersLayer.addTo(map);

map.addControl(legend);

L.control
  .layers(baseMaps, {
    'Nautical (requires more zoom)': openSeaMap,
    'Journey markers': journeyMarkersLayer,
    'Journey path': journeyPathLayer,
    'Journey sight markers': journeySightMarkersLayer,
    'Pre-journey path': preJourneyPathLayer,
  })
  .addTo(map);
