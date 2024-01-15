import List from '../List';
import Number from '../Number';
import MaleIcon from '../../assets/icons/male-icon.png';
import FemaleIcon from '../../assets/icons/female-icon.png';
import {
  StyledColumnContainer,
  StyledColumnHeading,
  StyledColumnContent,
} from './styles';

export default function Column({ size, heading, widgets }) {
  const getBackgroundColor = (title) => {
    const _title = title.toLowerCase().split(' ');
    return _title.includes('male')
      ? '#0478E4'
      : _title.includes('female')
      ? '#F24444'
      : '#646464';
  };

  const getBackgroundIcon = (title) => {
    const _title = title.toLowerCase().split(' ');
    return _title.includes('male')
      ? MaleIcon
      : _title.includes('female')
      ? FemaleIcon
      : null;
  };

  const getColumnType = () => (widgets ? widgets[0].type : null);

  return (
    <StyledColumnContainer
      size={size}
      className="animate__animated animate__fadeInUp"
    >
      <StyledColumnHeading>
        <h2>{heading}</h2>
      </StyledColumnHeading>
      <StyledColumnContent type={getColumnType()}>
        {widgets?.map((widget, index) => {
          switch (widget.type) {
            case 'list':
              return (
                <List
                  key={index}
                  title={widget.title}
                  subtitle={widget.subtitle}
                  api={widget.api}
                />
              );

            case 'number':
              return (
                <Number
                  key={index}
                  api={widget.api}
                  title={widget.title}
                  backgroundIcon={getBackgroundIcon(widget.title)}
                  backgroundColor={getBackgroundColor(widget.title)}
                />
              );

            default:
              return null;
          }
        })}
      </StyledColumnContent>
    </StyledColumnContainer>
  );
}
