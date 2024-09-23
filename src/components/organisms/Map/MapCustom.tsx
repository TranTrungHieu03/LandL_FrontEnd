import Map, {
  FullscreenControl,
  GeolocateControl,
  Layer,
  Marker,
  NavigationControl,
  ScaleControl,
  Source
} from 'react-map-gl'
import polyline from '@mapbox/polyline'
import { useState } from 'react'
import { getDirection } from '@/services/mapService.ts'
import { TOrderDetail } from '@/types/OrderDetailType.ts'
import { LngLat } from 'mapbox-gl'
import { FlagTriangleLeftIcon, MapPin } from 'lucide-react'

const MAP_API = import.meta.env.VITE_MAPBOX_URL || ''
const MAP_STYLE = import.meta.env.VITE_MAP_STYLE || ''

interface Props {
  order: TOrderDetail | null
}

const MapCustom = ({ order }: Props) => {
  const [map, setMap] = useState(null)
  const [routeGeoJSON, setRouteGeoJSON] = useState({
    type: 'Feature',
    geometry: {
      type: 'LineString'
    }
  })
  const lngLatSource: LngLat = new LngLat(
    Number.parseFloat(order?.deliveryInfoDetail?.longPickUp ?? '0'),
    Number.parseFloat(order?.deliveryInfoDetail?.latPickUp ?? '0')
  )

  const lngLatDestination: LngLat = new LngLat(
    Number.parseFloat(order?.deliveryInfoDetail?.longDelivery ?? '0'),
    Number.parseFloat(order?.deliveryInfoDetail?.latDelivery ?? '0')
  )
  const handleMapLoad = async (event: any) => {
    const mapInstance = event.target
    setMap(mapInstance)
    await getRoute()
  }

  const getRoute = async () => {
    const distanceQuery = await getDirection({ source: lngLatSource, destination: lngLatDestination })
    const geometry_string = distanceQuery['routes'][0]['overview_polyline'].points
    const geoJson = polyline.toGeoJSON(geometry_string)
    setRouteGeoJSON({
      type: 'Feature',
      geometry: geoJson
    })
  }
  return (
    <div className={'w-full h-full flex justify-center items-center p-4'}>
      <Map
        mapboxAccessToken={MAP_API}
        initialViewState={{
          longitude: lngLatSource.lng,
          latitude: lngLatSource.lat,
          zoom: 12
        }}
        style={{ width: 1200, height: 550, borderRadius: 10 }}
        mapStyle={MAP_STYLE}
        boxZoom={true}
        antialias={true}
        optimizeForTerrain={true}
        trackResize={true}
        attributionControl={false}
        onLoad={handleMapLoad}
      >
        {map && (
          <>
            <Source id='LineString' type='geojson' data={routeGeoJSON} />
            <Layer
              id='LineString'
              type='line'
              source='LineString'
              layout={{
                'line-join': 'round',
                'line-cap': 'round'
              }}
              paint={{
                'line-color': '#f35d2f',
                'line-width': 4
              }}
            />

            <Marker longitude={lngLatSource.lng} latitude={lngLatSource.lat}>
              <div>
                <MapPin strokeWidth={3} className={'text-orangeTheme animate-bounce'} size={24} />
              </div>
            </Marker>
            <Marker longitude={lngLatDestination.lng} latitude={lngLatDestination.lat}>
              <div>
                <FlagTriangleLeftIcon strokeWidth={3} className={'text-orangeTheme animate-bounce'} size={24} />
              </div>
            </Marker>
            <ScaleControl unit='metric' position='bottom-right' />
            <GeolocateControl
              positionOptions={{ enableHighAccuracy: true }}
              trackUserLocation={true}
              position={'bottom-right'}
            />
            <NavigationControl showCompass showZoom position='top-right' />
            <FullscreenControl />
          </>
        )}
      </Map>
    </div>
  )
}

export default MapCustom
