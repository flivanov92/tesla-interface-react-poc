import * as S from './background.style';
import { shape, string, arrayOf } from 'prop-types';
import { Panel } from '..';

const Background = ({ section }) => {
  const { id, link, text, who, buttonList } = section;
  return (
    <S.Background image={id} link={link} id={id}>
      <Panel text={text} title={who} link={link} />
    </S.Background>
  );
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

Background.propTypes = {
  section: shape({
    id: string.isRequired,
    link: string.isRequired,
    text: string.isRequired,
    who: string.isRequired,
    buttonList: arrayOf(string),
  }),
};

export default Background;
