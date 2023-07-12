'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { decrement, increment } from '@/store/slices/testSlice'
import { Button, Title } from '@mantine/core'

const Page = () => {
  const counterValue = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <Title>{counterValue}</Title>
      <Button onClick={() => dispatch(increment())}>Increment!!!</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement!!!</Button>
    </>
  )
}

export default Page
