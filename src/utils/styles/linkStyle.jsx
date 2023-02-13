import styled  from 'styled-components';
import colors from "./colors";
import {Link} from "react-router-dom";


export const StyledLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-weight: 500;
  font-style: normal;
  font-size: 24px;
  color : ${ colors.primary }
`
