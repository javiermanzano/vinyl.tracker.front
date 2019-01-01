import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Container = styled.div`
  width: 100%;
  background: rgba(251, 251, 251);
  display: flex;
`;

export const FooterContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Div = styled.div`
  width: 100%;
`;

export const BottomInfo = styled.ul`
  list-style: none;
`;

export const Li = styled.li`
  position: absolute;
  bottom: 10px;
`;

export const Copyright = styled.a`
  color: #2D2F3B;
  font-size: 14px;
  line-height: 14px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px;
  ${props => props.alignment && css`
    float: ${props.alignment || 'left'};
  `}
`;

export const FormRow = styled.div`
  display: flex;
  ${props => props.margin && `
    margin: ${props.margin};
  `}
`;
