import * as S from './background.style';
import { node, string } from 'prop-types';

const Background = ({ children, id }) => {
  return <S.Background image={id}>{children}</S.Background>;
};

Background.defaultProps = {
  children: node,
  name: string,
  id: string.isRequired,
};

export default Background;
