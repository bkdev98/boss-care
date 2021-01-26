import React from 'react';

import ServiceDetailView from './ServiceDetail.view';

interface ServiceDetailContainerProps {
  route: any;
}

const ServiceDetailContainer: React.FC<ServiceDetailContainerProps> = ({route}) => {
  const {data} = route.params;
  return <ServiceDetailView data={data} />;
};

export default ServiceDetailContainer;
