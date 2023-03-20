import styled  from 'styled-components';
import colors from "./colors";
import {Link} from "react-router-dom";


export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  color : ${ colors.primary };
  @media (max-width: 375px) {
            font-size: 12px;
            padding: 0px;
        }
  @media (max-width: 768px) and (min-width: 376px) {
           font-size: 16px;
  }        
`
export const StyledLinkActive = styled(Link)`
  padding: 10px 15px;
  text-decoration-line: underline;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  color : ${ colors.primary };
  @media (max-width: 375px) {
            font-size: 12px;
            padding: 0px;
        }
  @media (max-width: 768px) and (min-width: 376px) {
           font-size: 16px;
  }        
`

