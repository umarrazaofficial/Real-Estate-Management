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

function BussniessDetails({ businessData }) {
  const { fetch } = useContextHook(AuthContext, ['fetch']);
  // const { business_details_loading, business_details_data } = businessService.GetBusinessDetails(bussinessId, fetch);
  // console.log('business_details_data', business_details_data);
  return (
    <Loaders loading={!businessData}>
      <DetailsCard gray>
        <Grid xs={1} sm={2} gap={20}>
          <InfoCard
            title="Created At"
            value={businessData && format(new Date(businessData?.createdAt), 'MMM do yyyy hh:mm a')}
            $unStyled
          />
          <InfoCard
            title="Updated At"
            value={businessData && format(new Date(businessData?.updatedAt), 'MMM do yyyy hh:mm a')}
            $unStyled
          />
          <InfoCard title="Property Name" value={businessData?.name} $unStyled />
          <InfoCard title="Property Location" value={businessData?.location} $unStyled />
          <InfoCard title="Property Area" value={businessData?.area} $unStyled />
        </Grid>
      </DetailsCard>
    </Loaders>
  );
}

export default BussniessDetails;
