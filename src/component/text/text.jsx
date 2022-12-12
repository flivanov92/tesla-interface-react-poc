import { bool, node } from 'prop-types';
import * as S from './text.style';

const Text = ({ myLink, children, myTitle }) => {
  return (
    <S.Text myLink={myLink} myTitle={myTitle}>
      {children}
    </S.Text>
  );
};

Text.defaultPops = {
  myLink: false,
  myTitle: false,
  children: null,
};

Text.propTypes = {
  myTitle: bool,
  myLink: bool,
  children: node,
};

export default Text;
