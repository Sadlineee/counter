'use client'

import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { decrement, increment, incrementByAmount } from '@/features/counterSlice'
import { ButtonsBox, CountButton, CounterBox, CountValue, HomePage } from './Home.styled'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const changeCountValue = useCallback((newValue: number) => {
    localStorage.setItem('count', JSON.stringify(newValue))
  }, [])

  useEffect(() => {
    const savedCountValue = localStorage.getItem('count')
    if (savedCountValue) {
      dispatch(incrementByAmount(JSON.parse(savedCountValue)))
    }
  }, [dispatch])

  useEffect(() => {
    changeCountValue(count)
  }, [count, changeCountValue])

  return (
    <HomePage>
      <CounterBox>
        <CountValue>{count}</CountValue>
        <ButtonsBox>
          <CountButton onClick={() => dispatch(decrement())}>{`<`}</CountButton>
          <CountButton onClick={() => dispatch(increment())}>{`>`}</CountButton>
        </ButtonsBox>
      </CounterBox>
    </HomePage>
  )
}