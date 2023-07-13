import styled from 'styled-components';

interface Props {
  type: string
}

export const Container = styled.div`
  position: fixed;

  width: 100%;
  height: 33px;
  background-color: rgba(29, 29, 29, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 79px;
  height: 17px;
  flex-shrink: 0;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin-left: 11px;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction:row;
`

export const Button = styled.div<Props>`
  width: 40px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.type == "close" ? "red" : "gray" };

    cursor: ${props => props.type == "maximize" ? "not-allowed" : "" };
  }
`