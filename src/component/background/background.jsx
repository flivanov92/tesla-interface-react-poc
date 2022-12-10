import * as S from './background.style';
import { shape, node, string, arrayOf } from 'prop-types';

const Background = ({ section }) => {
  const { id, link, who, buttonList } = section;
  return <S.Background image={id}>{who}</S.Background>;
};

Background.defaultProps = {
  section: {
    id: '',
    link: '',
    text: '',
    who: '',
    buttonList: [],
  },
};

Background.protoTypes = {
  section: shape({
    children: node,
    id: string.isRequired,
    link: string.isRequired,
    text: string.isRequired,
    buttonList: arrayOf(string),
  }),
};

export default Background;
