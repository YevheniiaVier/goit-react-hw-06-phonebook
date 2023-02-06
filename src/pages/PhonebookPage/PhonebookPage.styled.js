import styled from 'styled-components';

export const Box = styled.div`
  padding-top: 100px;

  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[7]}px;
  margin: auto;
  display: flex;
  margin: 0 auto;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
