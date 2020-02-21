import styled from 'styled-components';

const StatusBlock = styled.div`
  background-color: ${({theme, status}) => theme.statusColours[status]};
  width: ${({theme}) => theme.spacing[6]}px;
  height: ${({theme}) => theme.spacing[4]}px;
  border: 1px solid ${({theme, status}) => theme.statusBorders[status]};
  border-radius: 6px;
`;

export default StatusBlock;
