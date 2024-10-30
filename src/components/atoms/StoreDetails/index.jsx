import React from 'react';
import 'styled-components';

import { format } from 'date-fns';
import { useContextHook } from 'use-context-hook';
import InfoCard from '../InfoCard';
import { AuthContext } from '../../../Context/authContext';
import storeService from '../../../services/storeService';
import Grid from '../Grid';
import Loaders from '../Loaders';
import DetailsCard from '../DetailsCard';

function StoreDetails({ channelId }) {
  const { fetch } = useContextHook(AuthContext, ['fetch']);

  const { store_details_loading, store_details_data } = storeService.GetChannelDetails(channelId, fetch);

  return (
    <Loaders loading={store_details_loading}>
      <DetailsCard gray>
        <Grid xs={1} sm={3} gap={20}>
          <InfoCard
            title="Created At"
            value={store_details_data && format(new Date(store_details_data?.created_at), 'MMM do yyyy hh:mm a')}
            $unStyled
          />
          <InfoCard
            title="Updated At"
            value={store_details_data && format(new Date(store_details_data?.updated_at), 'MMM do yyyy hh:mm a')}
            $unStyled
          />
          <InfoCard title="Channel Name" value={store_details_data?.name} $unStyled />
          <InfoCard title="Merchant Category" value={store_details_data?.merchant_category} $unStyled />
          {/* <InfoCard title="Status" value={store_details_data?.status} $unStyled /> */}
          <InfoCard title="Channel Type" value={store_details_data?.type} $unStyled />
          {/* <InfoCard title="Postal Code" value={store_details_data?.address?.postal_code} $unStyled /> */}
          {/* <InfoCard title="Address" value={store_details_data?.address?.value} $unStyled /> */}
          {/* <InfoCard title="Latitude" value={store_details_data?.address?.latlng?.lat} $unStyled />
          <InfoCard title="Longitude" value={store_details_data?.address?.latlng?.lng} $unStyled /> */}
          {store_details_data?.is_deleted && (
            <InfoCard title="Deactivation Reason" value={store_details_data?.deactivation_reason} $unStyled />
          )}
        </Grid>
      </DetailsCard>
    </Loaders>
  );
}

export default StoreDetails;
