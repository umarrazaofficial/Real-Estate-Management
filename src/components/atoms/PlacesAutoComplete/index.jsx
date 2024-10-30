/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';

import Field from '../Field';
import { FiSearch } from 'react-icons/fi';
import SearchIcon from '../../../assets/searchIcon.svg';

let autoComplete;
const PlacesAutoComplete = ({ search = '', onChange = () => {}, ...rest }) => {
  const [query, setQuery] = useState('');
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    setQuery(search);
  }, [search]);

  const handlePlaceSelect = async () => {
    const place = autoComplete?.getPlace();

    if (!place || !place.address_components || !place.geometry) {
      console.error('No place details available or incomplete place data.');
      return;
    }
    const { address_components, geometry, place_id, formatted_address } = place;
    const address = {};
    address_components?.forEach(({ short_name, types }) => {
      if (types.includes('administrative_area_level_1')) {
        address.state = short_name;
      } else if (types.includes('administrative_area_level_2')) {
        address.county = short_name;
      } else if (types.includes('locality')) {
        address.city = short_name;
      } else address[types[0]] = short_name;
    });
    setQuery(formatted_address);
    onChange({
      target: {
        value: {
          ...address,
          place_id,
          latlng: {
            lat: geometry?.location?.lat(),
            lng: geometry?.location?.lng(),
          },
          formatted_address,
        },
        name: rest.name,
      },
    });
  };

  const handleScriptLoad = () => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      // {
      //   componentRestrictions: { country: ["pk"] },
      // }
    );
    autoComplete.addListener('place_changed', () => handlePlaceSelect());
    autoCompleteRef?.current?.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      handleScriptLoad();
    }, 3000);
  }, []);

  return (
    <Field
      rounded
      {...rest}
      ref={autoCompleteRef}
      onChange={event => {
        setQuery(event.target.value);
      }}
      placeholder="Search location"
      value={query}
      prefix={<img src={SearchIcon} alt="SearchIcon" width={20} height={20} />}
    />
  );
};
export default PlacesAutoComplete;
