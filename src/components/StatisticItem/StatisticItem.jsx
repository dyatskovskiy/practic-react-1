import { IconContext } from "react-icons";
import PropTypes from "prop-types";
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({title, total, icon}) => {
  return (
     <StatisticBox>   
<IconContext.Provider value={{ size: 30 }}>
  {icon}
</IconContext.Provider>
    <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{ title}</StatisticText>
  </StatisticBox>
  );
};

StatisticItem.propTypes = {
   title: PropTypes.string.isRequired,
   total: PropTypes.number.isRequired,
}