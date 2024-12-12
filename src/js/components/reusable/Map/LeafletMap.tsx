import React from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';

import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';
import MarkerRetina from 'leaflet/dist/images/marker-icon-2x.png';

Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerRetina,
  iconUrl: MarkerIcon,
  shadowUrl: MarkerShadow,
});

import Container from '../Container';

export interface Position {
  lat: number;
  lng: number;
}

export interface MapMarker {
  link?: string;
  position: Position;
  markerChild?: React.ReactNode;
}

interface Props {
  className?: string;
  center?: Position;
  markers?: MapMarker[];
  zoom?: number;
  onCenterChange?: (position: Position) => void;
  onZoomChange?: (zoom: number) => void;
}

const MapMarkerComponent = ({ link, position, markerChild }: MapMarker) => {
  return (
    <Marker position={position}>
      <Popup>
        <a href={link}>
          <Container.FlexCols className="text-center items-center justify-center top-[48px]">
            {markerChild}
          </Container.FlexCols>
        </a>
      </Popup>
    </Marker>
  );
};

const Map = ({
  center,
  markers,
  zoom,
  className,
  onCenterChange,
  onZoomChange,
}: Props) => {
  const mapMarkers = markers?.map((marker, index) => (
    <MapMarkerComponent key={index} {...marker} />
  ));

  console.log('center', center);

  return (
    <MapContainer
      scrollWheelZoom
      center={[center?.lat ?? 51.505, center?.lng ?? -0.09]}
      zoom={zoom ?? 10}
      className={className}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker
        onCenterChange={onCenterChange}
        onZoomChange={onZoomChange}
      />

      {mapMarkers}
    </MapContainer>
  );
};

interface LocationMarkerProps {
  onCenterChange?: (position: Position) => void;
  onZoomChange?: (zoom: number) => void;
}

const LocationMarker = ({
  onCenterChange,
  onZoomChange,
}: LocationMarkerProps) => {
  const handleZoomChange = () => {
    const zoom = map?.getZoom();
    if (zoom && onZoomChange) {
      onZoomChange(zoom);
    }
  };

  const map = useMapEvents({
    moveend: () => {
      if (onCenterChange) {
        const center = map.getCenter();
        onCenterChange(center);
      }
    },
    zoomend: () => {
      if (onZoomChange) {
        handleZoomChange();
      }
    },
  });

  return null;
};

export default Map;
