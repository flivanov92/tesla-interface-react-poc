import * as S from './panel.style';

const Panel = ({ children }) => (
  <S.Panel>
    <div>stanga</div>
    <div>dreapta</div>
    {children}
  </S.Panel>
);

export default Panel;
