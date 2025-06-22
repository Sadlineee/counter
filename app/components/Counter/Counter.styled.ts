import styled from 'styled-components'

export const CounterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  aspect-ratio: 2 / 1;
  margin-top: 35vh;
  padding: 10px;
  height: 7.5rem;
  background-color: ${({ theme }) => theme.colors.bg};

  &::before, &::after {
    z-index: -1;
    content: '';
	  position: absolute;
    top: -6px;
	  left: -6px;
    height: calc(100% + 12px);
	  width: calc(100% + 12px);
	  background-image: linear-gradient(45deg, #ff3c41, #ff8a25, #ffe04f, #4fff88, #56ffef, #37b4ff, #c05aff, #ff3c41, #ff8a25, #ffe04f, #4fff88, #56ffef, #37b4ff, #c05aff);
    background-size: 500%;
	  animation: position 12s linear infinite alternate;
  }
    
  &::after {
    filter: blur(10px);
  }

  @keyframes position {
    0%, 100% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
  }
`

export const CountValue = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const CountButton = styled.button`
  aspect-ratio: 2 / 1;
  height: 2rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.bg};
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: none;

  &:active {
    color: #37B4FF;
    box-shadow: 0 0 25px #37B4FF;
    transform: scale(0.95);
  }
`