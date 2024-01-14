import Column from '../../widgets/Column';
import {
  StyledDashboardContainer,
  StyledDashboardHeader,
  StyledDashboardMain,
} from './styles';

export default function Dashboard({ configuration }) {
  const { columns } = configuration;
  return (
    <StyledDashboardContainer>
      <StyledDashboardHeader>
        <h1>Dashboard</h1>
      </StyledDashboardHeader>
      <StyledDashboardMain>
        {columns.map((column, index) => (
          <Column
            key={index}
            size={column.size}
            heading={column.heading}
            widgets={column.widgets}
          />
        ))}
      </StyledDashboardMain>
    </StyledDashboardContainer>
  );
}
