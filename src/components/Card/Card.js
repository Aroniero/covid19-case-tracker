import React from 'react';
import {
  CardWrapper,
  CardHeader,
  CardBody,
  CardTitle,
  CardValue,
  CardDate,
} from './Card.style';
// import CountUp from 'react-countup';

const Card = ({ title, totalCases, todayCases, casesType, ...props }) => {
  return (
    <CardWrapper
      onClick={props.onClick}
      color={casesType === title ? casesType : null}
    >
      <CardHeader>{title.toUpperCase()}</CardHeader>
      <CardBody>
        <CardValue
        // start={0} end={value} duration={2} separator=','
        >
          Total: {totalCases}
        </CardValue>
        <CardValue
        // start={0} end={value} duration={2} separator=','
        >
          Today: {todayCases}
        </CardValue>
      </CardBody>
    </CardWrapper>
  );
};

export default Card;
