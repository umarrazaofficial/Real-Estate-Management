/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import GoogleMap from '../GoogleMap';
import { GeoCode } from '../../../helpers/common';
import PlacesAutoComplete from '../PlacesAutoComplete';
import { MapHolder } from './GoogleLocationSelector.styles';
import Button from '../../molecules/Button';
import { useForm } from '../../molecules/Form';
import Form from '../../molecules/Form/Form';

const GoogleLocationSelector = ({
  onChange = () => {},
  value = {},
  getImage = false,
  title,
  storeNameField,
  onClick,
  setCurrentAddress,
  open,
  selectedAddress,
  setNewlyCreatedStore,
  onSubmit,
  ...rest
}) => {
  const [marker, setMarker] = useState(null);
  const [address, setAddress] = useState({});
  const [isLoading, isSetLoading] = useState(false);

  const map = useRef(null);
  const { form } = useForm();

  const handleCheck = e => {
    e.preventDefault();
    // onClick();
    onSubmit();
    setCurrentAddress(null);

    if (Object.keys(address).length > 0) {
      setCurrentAddress(address);
    }
  };

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setMarker({
            lat: selectedAddress ? selectedAddress?.latlng?.lat : position.coords.latitude,
            lng: selectedAddress ? selectedAddress?.latlng?.lng : position.coords.longitude,
          });
          map.current?.panTo({
            lat: selectedAddress ? selectedAddress?.latlng?.lat : position.coords.latitude,
            lng: selectedAddress ? selectedAddress?.latlng?.lng : position.coords.longitude,
          });
        },
        error => {
          console.log(error);
          if (error.code === error.PERMISSION_DENIED) {
            console.error('User denied the request for Geolocation.');
            // Inform the user and use the fallback location
            setMarker({ lat: 31.51942739999999, lng: 74.3490935 });
          } else {
            console.error('Error getting the location');
            // Handle other errors
          }
        },
        { enableHighAccuracy: true },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        getUserLocation();
      }, 1000);
    } else {
      setMarker({});
    }
  }, [open]);

  useEffect(() => {
    if (value?.place_id && value.place_id !== address.place_id) {
      GeoCode({ placeId: value?.place_id })
        .then(res => {
          setMarker(res.latlng);
          setAddress(res);
          setCurrentAddress(res);
          // eslint-disable-next-line no-unused-expressions
          onChange({ target: { value: { ...res }, name: rest.name } });
        })
        .catch(() => {
          console.log({
            type: 'warning',
            message: 'Please Select A Valid Location',
          });
        });
    }
  }, [value?.place_id, open]);

  const onLoad = React.useCallback(_ => {
    map.current = _;
  }, []);

  const onUnmount = React.useCallback(() => {
    map.current = null;
  }, []);

  const handleInputChange = selectedAddre => {
    setAddress(selectedAddre?.target?.value);
    setMarker({
      lat: selectedAddre?.target?.value?.latlng?.lat,
      lng: selectedAddre?.target?.value?.latlng?.lng,
    });
  };
  const handleMapClick = React.useCallback(
    ({ placeId }) => {
      if (!placeId) {
        console.log({
          type: 'error',
          message: 'Please Select A Valid Location',
        });
        return;
      }
      GeoCode({
        placeId,
      })
        .then(res => {
          setMarker(res.latlng);
          setAddress(res);
          map.current.panTo(res.latlng);
          // eslint-disable-next-line no-unused-expressions
          onChange({ target: { value: { ...res }, name: rest.name } });
        })
        .catch(() => {
          console.log({
            type: 'error',
            message: 'Please Select A Valid Location',
          });
        });
    },
    [onChange],
  );
  return (
    <MapHolder storeNameField={storeNameField}>
      <div className="map">
        <div className="search">
          <PlacesAutoComplete
            search={address?.formatted_address ?? selectedAddress?.street_address}
            onChange={handleInputChange}
            value={value}
            selectedAddress={selectedAddress}
          />
        </div>
        <GoogleMap
          marker={marker}
          center={marker}
          onClick={handleMapClick}
          onLoad={onLoad}
          open={open}
          onUnmount={onUnmount}
        />
      </div>
      <Form form={form} onSubmit={onSubmit}>
        <div className="input-holder">
          <Button
            sm
            htmlType={isLoading ? 'button' : 'submit'}
            width="198px"
            loader={isLoading}
            onClick={storeNameField ? null : handleCheck}>
            {storeNameField ? 'Select Location' : 'Save Location'}
          </Button>
        </div>
      </Form>
    </MapHolder>
  );
};
export default GoogleLocationSelector;
