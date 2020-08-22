import React from 'react';
import {
  CardWrapper,
  CardHeader,
  CardBody,
  CardTitle,
  CardValue,
  CardDate,
} from './Card.style';

const Card = ({ title, totalCases, todayCases, casesType, ...props }) => {
  return (
    <CardWrapper
      onClick={props.onClick}
      color={casesType === title ? casesType : null}
    >
      <CardHeader>{title.toUpperCase()}</CardHeader>
      <CardBody>
        <CardValue
          prefix='Total: '
          start={0}
          end={totalCases ? totalCases : 0}
          duration={1}
          separator=','
        />
        <CardValue
          prefix='Today: '
          start={0}
          end={todayCases ? todayCases : 0}
          duration={1}
          separator=','
        />
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
