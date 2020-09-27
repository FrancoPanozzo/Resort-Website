import styled from 'styled-components';
import defaultImg from '../images/no-img.png';
const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.heroImg ? props.heroImg : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
