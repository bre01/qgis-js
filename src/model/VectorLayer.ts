/**
 * Represents a vector layer in a map.
 * inherits from MapLayer. 
 * it add the following properties:
 * 
 * a Geojson string that stores the features of the layer
 * 
 * more infos to be added  
 * 
 */
import { MapLayer } from "./MapLayer";
export interface VectorLayer extends MapLayer {
  geojson: string;
}
