import * as S from './background.style';
import { shape, string, arrayOf } from 'prop-types';
import { Panel } from '..';

const Background = ({ section }) => {
  const { id, link, who, buttonList } = section;
  return (
    <S.Background image={id} link={link}>
      <Panel>{who}</Panel>
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
