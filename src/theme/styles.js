import styled from 'styled-components';
import { backgroundColor } from './colours';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 100%;
  background: ${backgroundColor};
  display: flex;
  flex-direction: column;
  ${props => ({
    width: props.smallDetail ? '230px' : '100%',
    'margin-left': props.marginLeft ? '20px' : '0',
  })}
`;

export const AppContainer = styled.div`
  width: 100%;
  background: ${backgroundColor};
  display: flex;
  flex-direction: row;
  margin-top: 3px;
`;
