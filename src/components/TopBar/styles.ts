import styled, { css } from 'styled-components';

import {
  Instagram,
  Search,
  Home,
  Message,
  Compass,
  Heart,
} from '../../styles/Icons';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  background: var(--secondary);
  padding: 0 25%;
  border-bottom: 2px solid var(--gray);

  height: 60px;

  align-items: center;
  justify-content: space-between;
`;

const iconCSS = css`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  fill: var(--gray);

  cursor: pointer;
`;

export const Logo = styled(Instagram)`
  ${iconCSS}
  color: var(--white);
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(260px, 50%);

  position: relative;
`;

export const SearchIcon = styled(Search)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: var(--gray);

  position: absolute;
  left: 30%;
`;

export const SearchInput = styled.input`
  border: 1px solid var(--gray);
  width: 80%;
  background: var(--primary);

  padding: 5px 20px;
  border-radius: 3px;

  &::placeholder {
    text-align: center;
    font-size: 15px;
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  display: flex;
  width: min(240px, 25%);

  justify-content: space-around;
  > .active {
    fill: var(--white);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const MessagesIcon = styled(Message)`
  ${iconCSS}
`;

export const ExploreIcon = styled(Compass)`
  ${iconCSS}
`;

export const NotificationsIcon = styled(Heart)`
  ${iconCSS}
`;

export const Avatar = styled.div`
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 50%;

  background: var(--content);
`;
