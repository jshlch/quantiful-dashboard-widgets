import Loader from '../../components/Loader';
import { useOnMount } from '../../hooks/ref';
import { useGet } from '../../hooks/useGet';
import {
  StyledNumberContainer,
  StyledNumberTitle,
  StyledNumberCounter,
  StyledNumberBackgroundIcon,
} from './styles';

export default function Number({
  api,
  title,
  backgroundIcon,
  backgroundColor,
}) {
  const { getData, data, isLoading } = useGet(api);

  useOnMount(() => {
    getData();
  });

  return (
    <StyledNumberContainer backgroundColor={backgroundColor}>
      <StyledNumberTitle>{title}</StyledNumberTitle>
      {isLoading ? (
        <>
          <br />
          <Loader />
        </>
      ) : (
        <StyledNumberCounter>
          {data?.pokemon_species_details?.length}
        </StyledNumberCounter>
      )}
      {backgroundIcon && (
        <StyledNumberBackgroundIcon
          alt="background-icon"
          src={backgroundIcon}
        />
      )}
    </StyledNumberContainer>
  );
}
