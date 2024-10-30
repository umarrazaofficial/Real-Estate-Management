import React from 'react';
import 'styled-components';

import { format } from 'date-fns';
import { useContextHook } from 'use-context-hook';
import InfoCard from '../InfoCard';
import { AuthContext } from '../../../Context/authContext';
import Grid from '../Grid';
import Loaders from '../Loaders';
import DetailsCard from '../DetailsCard';
import businessService from '../../../services/businessService';

function BussniessDetails({ bussinessId }) {
  const { fetch } = useContextHook(AuthContext, ['fetch']);
  const { business_details_loading, business_details_data } = businessService.GetBusinessDetails(bussinessId, fetch);
  console.log('business_details_data', business_details_data);
  return (
    <Loaders loading={business_details_loading}>
      <DetailsCard gray>
        <Grid xs={1} sm={3} gap={20}>
          <InfoCard
            title="Created At"
            value={business_details_data && format(new Date(business_details_data?.created_at), 'MMM do yyyy hh:mm a')}
            $unStyled
          />
          <InfoCard
            title="Updated At"
            value={business_details_data && format(new Date(business_details_data?.updated_at), 'MMM do yyyy hh:mm a')}
            $unStyled
          />
          <InfoCard title="Owner First Name" value={business_details_data?.owner?.first_name} $unStyled />
          <InfoCard title="Owner Last Name" value={business_details_data?.owner?.last_name} $unStyled />
          <InfoCard title="Owner Email" value={business_details_data?.support_email} $unStyled />
          <InfoCard title="Owner Phone Number" value={business_details_data?.phone} $unStyled />
          <InfoCard title="Title" value={business_details_data?.name} $unStyled />
          <InfoCard title="ID" value={business_details_data?.id} $unStyled />
          <InfoCard title="Status" value={business_details_data?.status} $unStyled />
          <InfoCard title="Address Line 1" value={business_details_data?.address_line_1} $unStyled />
          <InfoCard title="Address Line 2" value={business_details_data?.address_line_2} $unStyled />
          <InfoCard title="Postal Code" value={business_details_data?.postal_code} $unStyled />
          <InfoCard title="City" value={business_details_data?.city} $unStyled />
          <InfoCard title="Country" value={business_details_data?.country} $unStyled />
          {business_details_data?.is_deleted && (
            <InfoCard title="Deactivation Reason" value={business_details_data?.deactivation_reason} $unStyled />
          )}
        </Grid>
      </DetailsCard>
    </Loaders>
  );
}

export default BussniessDetails;
