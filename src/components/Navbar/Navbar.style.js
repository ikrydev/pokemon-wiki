import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background: #ffffff;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 20;
  box-shadow: 0px 2px 4px rgba(60, 72, 88, 0.25);
`;

export const HeaderWrapper = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;
`;

export const LogoWrapper = styled(Link)`
  text-align: left;
  padding-left: 24px;
  text-decoration: none;
`;

export const LogoText = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #3c4858;
`;

export const BookmarkWrapper = styled(Link)`
  position: relative;
  padding-right: 24px;
  width: 50px;
`;

export const BookmarkCount = styled.div`
  position: absolute;
  right: 20px;
  top: -10px;
  color: #ffffff;
  background-color: #3c4858;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
`;
