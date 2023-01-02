import * as S from './vshape.style';

const Vshape = ({ id, goTo }) => {
  return (
    <S.Vshape href={`#${goTo}`} id={id}>
      <svg
        width='48'
        height='48'
        viewBox='0 0 48 48'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <path d='M36.5 20.25L32 15.75L24.5 23.25L17 15.75L12.5 20.25L24.5 32.25L36.5 20.25Z' />
        </g>
      </svg>
    </S.Vshape>
  );
};

export default Vshape;
