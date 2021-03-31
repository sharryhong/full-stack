import React from 'react';
import styled from 'styled-components';

interface IContainerProps {
  isBlue: boolean
}

const Container = styled.span<IContainerProps>`
  color: ${props => props.isBlue ? 'red' : '#333'}
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isBlue={count > 10}>{count}</Container>
)

export default Number;