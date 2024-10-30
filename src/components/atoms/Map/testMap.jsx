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
  // {
  //   id: 2,
  //   lat: 40.712776,
  //   lng: -74.005974,
  //   name: 'KFC New York',
  //   business: 'Business 2',
  //   stores: 13,
  // },
  // {
  //   id: 3,
  //   lat: 51.507351,
  //   lng: -0.127758,
  //   name: 'Burger King London',
  //   business: 'Business 3',
  //   stores: 12,
  // },
  // {
  //   id: 4,
  //   lat: 35.689487,
  //   lng: 139.691711,
  //   name: "Domino's Tokyo",
  //   business: 'Business 4',
  //   stores: 5,
  // },
  // {
  //   id: 5,
  //   lat: -33.86882,
  //   lng: 151.20929,
  //   name: 'Subway Sydney',
  //   business: 'Business 5',
  //   stores: 7,
  // },
  // {
  //   id: 6,
  //   lat: 48.856613,
  //   lng: 2.352222,
  //   name: 'Starbucks Paris',
  //   business: 'Business 6',
  //   stores: 9,
  // },
  // {
  //   id: 7,
  //   lat: 55.755825,
  //   lng: 37.617298,
  //   name: 'Taco Bell Moscow',
  //   business: 'Business 7',
  //   stores: 2,
  // },
  // {
  //   id: 8,
  //   lat: -23.55052,
  //   lng: -46.633308,
  //   name: "Wendy's São Paulo",
  //   business: 'Business 8',
  //   stores: 5,
  // },
  // {
  //   id: 9,
  //   lat: 19.432608,
  //   lng: -99.133209,
  //   name: "Dunkin' Donuts Mexico City",
  //   business: 'Business 9',
  //   stores: 3,
  // },
  // {
  //   id: 10,
  //   lat: 39.904202,
  //   lng: 116.407394,
  //   name: 'Popeyes Beijing',
  //   business: 'Business 10',
  //   stores: 7,
  // },
  // // New European marker positions
  // {
  //   id: 11,
  //   lat: 52.520008,
  //   lng: 13.404954,
  //   name: "McDonald's Berlin",
  //   business: 'Business 11',
  //   stores: 8,
  // },
  // {
  //   id: 12,
  //   lat: 50.110924,
  //   lng: 8.682127,
  //   name: "Domino's Frankfurt",
  //   business: 'Business 12',
  //   stores: 6,
  // },
  // {
  //   id: 13,
  //   lat: 45.465421,
  //   lng: 9.185924,
  //   name: 'Pizza Hut Milan',
  //   business: 'Business 13',
  //   stores: 5,
  // },
  // {
  //   id: 14,
  //   lat: 41.902782,
  //   lng: 12.496366,
  //   name: 'KFC Rome',
  //   business: 'Business 14',
  //   stores: 7,
  // },
  // {
  //   id: 15,
  //   lat: 40.416775,
  //   lng: -3.70379,
  //   name: 'Burger King Madrid',
  //   business: 'Business 15',
  //   stores: 9,
  // },
  // {
  //   id: 16,
  //   lat: 48.208176,
  //   lng: 16.373819,
  //   name: 'Starbucks Vienna',
  //   business: 'Business 16',
  //   stores: 4,
  // },
  // {
  //   id: 17,
  //   lat: 59.329323,
  //   lng: 18.068581,
  //   name: 'Subway Stockholm',
  //   business: 'Business 17',
  //   stores: 6,
  // },
  // {
  //   id: 18,
  //   lat: 60.169857,
  //   lng: 24.938379,
  //   name: 'Taco Bell Helsinki',
  //   business: 'Business 18',
  //   stores: 3,
  // },
  // {
  //   id: 19,
  //   lat: 52.229676,
  //   lng: 21.012229,
  //   name: "Dunkin' Donuts Warsaw",
  //   business: 'Business 19',
  //   stores: 5,
  // },
  // {
  //   id: 20,
  //   lat: 47.497913,
  //   lng: 19.040236,
  //   name: "Wendy's Budapest",
  //   business: 'Business 20',
  //   stores: 4,
  // },
];

export default function Map() {
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    pageSize: 10,
    searchText: '',
    filterStatus: 'Active',
  });
  const [selectedStore, setSelectedStore] = useState();
  const sliderRef = useRef(null);
  // const data = businessService.GetBusinesses(searchQuery);
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

  const europeCountries = [
    'AL', // Albania
    // 'AD', // Andorra
    'AT', // Austria
    'BY', // Belarus
    'BE', // Belgium
    'BA', // Bosnia and Herzegovina
    'BG', // Bulgaria
    'HR', // Croatia
    'CY', // Cyprus
    'CZ', // Czech Republic
    'DK', // Denmark
    'EE', // Estonia
    'FI', // Finland
    'FR', // France
    'DE', // Germany
    'GR', // Greece
    'HU', // Hungary
    'IS', // Iceland
    'IE', // Ireland
    'IT', // Italy
    'XK', // Kosovo
    'LV', // Latvia
    // 'LI', // Liechtenstein
    'LT', // Lithuania
    'LU', // Luxembourg
    // 'MT', // Malta
    'MD', // Moldova
    'ME', // Montenegro
    'NL', // Netherlands
    'MK', // North Macedonia
    'NO', // Norway
    'PL', // Poland
    'PT', // Portugal
    'RO', // Romania
    'RU', // Russia (European part)
    // 'SM', // San Marino
    'RS', // Serbia
    'SK', // Slovakia
    'SI', // Slovenia
    'ES', // Spain
    'SE', // Sweden
    'CH', // Switzerland
    'UA', // Ukraine
    'GB', // United Kingdom
    // 'VA', // Vatican City
  ];
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
                fill: 'white',
                'fill-opacity': 1,
                stroke: '#265cff',
                'stroke-width': 0,
                'stroke-opacity': 0,
              },
              hover: {
                fill: 'white',
                stroke: 'var(--primary-50)',
              },
              selected: {
                fill: 'var(--primary-50)', // Color for selected regions
              },
            }}
            selectedRegions={europeCountries}
            onMarkerTipShow={event => {
              event.preventDefault(); // Prevent the tooltip from being displayed
            }}
            onMarkerClick={handleMarkerClick}
            zoom={2} // Default zoom level (adjust as needed)
            focusOn={{
              x: 0.5,
              y: 0.3,
              scale: 2, // Adjust scale to zoom into Europe region
              animate: true,
            }}
          />
        </StyledMAp>
      )}
      <StoreSlider data={markerPositions} selected={+selectedStore} refrence={sliderRef} />
    </MapMainWrapper>
  );
}
