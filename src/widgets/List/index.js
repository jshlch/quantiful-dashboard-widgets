import { useOnMount } from '../../hooks/ref';
import { useGet } from '../../hooks/useGet';
import PokeballIcon from '../../assets/icons/pokeball-icon.png';
import Loader from '../Loader';
import {
  StyledListHeader,
  StyledListSubtitle,
  StyledListWrapper,
  StyledListWrapperItem,
  StyledListWrapperItemIcon,
} from './styles';

export default function List({ title, subtitle, api }) {
  const { getData, data, isLoading } = useGet(api);

  useOnMount(() => {
    getData();
  });

  return (
    <>
      <StyledListHeader>
        <h3>{title}</h3>
        <StyledListSubtitle>{subtitle}</StyledListSubtitle>
      </StyledListHeader>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledListWrapper>
          {data?.results?.map((color, index) => (
            <StyledListWrapperItem key={index}>
              <StyledListWrapperItemIcon alt="pokeball" src={PokeballIcon} />
              {color.name}
            </StyledListWrapperItem>
          ))}
        </StyledListWrapper>
      )}
    </>
  );
}
