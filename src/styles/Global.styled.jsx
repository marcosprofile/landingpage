import styled from 'styled-components';
import { primary, purpleColor } from '../utils/Theme';

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: 1440px) {
    gap: 10rem;
  };
`;

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  gap: ${({ gap }) => gap};
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-gap: ${({ gap }) => gap};
`;

export const Card = styled(FlexContainer)`
  display: grid;
  place-items: center;
  max-width: 352px;
  padding: 2rem;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.16);
`;

export const StyledHeader = styled(PaddingContainer).attrs({ as: 'header' })`
  background-color: ${({ theme }) => theme.colors.bgColor};
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const Image = styled.img`
  width: ${({ width }) => width};
  object-fit: contain;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  border-radius: 48px;
  width: max-content;
  text-decoration: none;
  color: ${(props) => props.purple ? purpleColor : 'black'};
  border: ${(props) => props.purple ? '1px solid #EBEAED' : ''};
  padding: ${(props) => props.purple ? '.5rem 1.5rem' : ''};
  cursor: pointer;
  transition: all .2s linear;

  &:hover {
    background-color: ${(props) => props.purple ? purpleColor : ''};
    color: ${(props) => props.purple ? 'white' : ''};
    border: ${(props) => props.purple ? `1px solid ${purpleColor}` : ''};
  }
`;

export const Button = styled(Link).attrs({ as: 'button' })`
  font-size: 1rem;
  border: none;
  border-radius: .5rem;
  padding: 0 2rem;
  height: 48px;

  background-color: ${(props) => props.primary ? primary : "white"};
  color: ${(props) => props.primary ? "white" : "black"};

  &:hover {
    background-color: ${(props) => props.primary ? "#F06000" : ""}
  }
`;

export const ParaText = styled.div`
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ lineHeight }) => lineHeight};
  font-style: ${({ fontStyle }) => fontStyle};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  color: ${({ theme }) => theme.colors.black};
`;

export const BlueText = styled(ParaText)`
  color: ${({ theme }) => theme.colors.blue};
`;

export const PurpleText = styled(ParaText)`
  color: ${({ theme }) => theme.colors.purple};
`;

export const GrayText = styled(ParaText)`
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconContainer = styled.a`
  font-size: ${({ size }) => size};
  cursor: pointer;
  color: ${({ color, theme }) => {
    switch(color) {
      case 'white':
        return theme.colors.white;

      case 'blue':
        return theme.colors.secondary;

      default:
        return;
    };
  }};
`;