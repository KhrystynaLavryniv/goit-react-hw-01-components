import PropTypes from "prop-types";
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatsQuantity,
  StatsName,
} from "./statistics.style";

export default function Statistics(props) {
  const { title, stats } = props;

  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map((item) => (
          <StatisticsItem key={item.id}>
            <StatsName>{item.label}</StatsName>
            <StatsQuantity>{item.percentage}%</StatsQuantity>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
