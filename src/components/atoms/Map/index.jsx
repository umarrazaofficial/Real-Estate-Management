import { useEffect, useRef, useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { MapMainWrapper, MapSkeletons, StyledMAp } from './MAp.styles';
import worldMill from '@react-jvectormap/world/dist/worldMill.json';
import marker from '../../../../src/assets/marker.svg';
import StoreSlider from '../StoreSlider';
import businessService from '../../../services/businessService';
import storeService from '../../../services/storeService';

export const markerPositions = [
  {
    id: 1,
    lat: 31.380313,
    lng: 73.183812,
    name: 'Pizza Hut Lahore',
    business: 'Business 1',
    stores: 10,
  },
  {
    id: 2,
    lat: 40.712776,
    lng: -74.005974,
    name: 'KFC New York',
    business: 'Business 2',
    stores: 13,
  },
  {
    id: 3,
    lat: 51.507351,
    lng: -0.127758,
    name: 'Burger King London',
    business: 'Business 3',
    stores: 12,
  },
  {
    id: 4,
    lat: 35.689487,
    lng: 139.691711,
    name: "Domino's Tokyo",
    business: 'Business 4',
    stores: 5,
  },
  {
    id: 5,
    lat: -33.86882,
    lng: 151.20929,
    name: 'Subway Sydney',
    business: 'Business 5',
    stores: 7,
  },
  {
    id: 6,
    lat: 48.856613,
    lng: 2.352222,
    name: 'Starbucks Paris',
    business: 'Business 6',
    stores: 9,
  },
  {
    id: 7,
    lat: 55.755825,
    lng: 37.617298,
    name: 'Taco Bell Moscow',
    business: 'Business 7',
    stores: 2,
  },
  {
    id: 8,
    lat: -23.55052,
    lng: -46.633308,
    name: "Wendy's São Paulo",
    business: 'Business 8',
    stores: 5,
  },
  {
    id: 9,
    lat: 19.432608,
    lng: -99.133209,
    name: "Dunkin' Donuts Mexico City",
    business: 'Business 9',
    stores: 3,
  },
  {
    id: 10,
    lat: 39.904202,
    lng: 116.407394,
    name: 'Popeyes Beijing',
    business: 'Business 10',
    stores: 7,
  },
];

export default function Map() {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    filterText: 'ACTIVE',
  });
  const [selectedStore, setSelectedStore] = useState();
  const sliderRef = useRef(null);
  const { businesses_data } = businessService.GetBusinesses(searchQuery);
  // const business_data = data?.businesses_data?.businesses;
  const handleButtonClick = index => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  function handleMarkerClick(event, index) {
    setSelectedStore(index);
    handleButtonClick(index);
  }

  return (
    <MapMainWrapper>
      <h1 className="heading">Active businesses</h1>
      {!markerPositions ? (
        <MapSkeletons />
      ) : (
        <StyledMAp>
          <VectorMap
            zoomMax={30}
            zoomMin={1}
            zoomOnScroll={true}
            zoomButtons={false}
            map={worldMill}
            backgroundColor=""
            containerStyle={{
              width: '100%',
              height: '100%',
            }}
            markerStyle={{
              initial: {
                fill: '#5E32CA',
                stroke: '#383f47',
                image: marker, // Use custom marker image for all markers
                'background-size': 'contain',
                width: '30px',
                height: '30px',
              },
            }}
            containerClassName="map"
            // onRegionTipShow={function noRefCheck() {}}

            markers={markerPositions?.map(elem => ({
              latLng: [elem?.lat, elem?.lng],
              name: elem.name,
            }))}
            regionStyle={{
              initial: {
                fill: 'var(--primary-50)',
                'fill-opacity': 1,
                stroke: '#265cff',
                'stroke-width': 0,
                'stroke-opacity': 0,
              },
              hover: {
                fill: 'var(--primary)',
                stroke: 'var(--primary-50)',
              },
              selected: {
                fill: 'var(--primary-50)', // Color for selected regions
              },
            }}
            selectedRegions={[]}
            onMarkerTipShow={event => {
              event.preventDefault(); // Prevent the tooltip from being displayed
            }}
            onMarkerClick={handleMarkerClick}
          />
        </StyledMAp>
      )}
      <StoreSlider data={businesses_data} selected={+selectedStore} refrence={sliderRef} />
    </MapMainWrapper>
  );
}