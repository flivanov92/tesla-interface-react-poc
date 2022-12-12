import * as S from './panel.style';
import { Text } from '..';
import { string } from 'prop-types';

const Panel = ({ title, text, link }) => {
  return (
    <S.Panel>
      <Text isTitle>{title}</Text>
      <Text>{text}</Text>
      <Text isLink>{link}</Text>
    </S.Panel>
  );
};

Panel.defaultProps = {
  title: '',
  text: '',
  link: '',
};

Panel.propTypes = {
  title: string,
  link: string,
  text: string,
};

export default Panel;
