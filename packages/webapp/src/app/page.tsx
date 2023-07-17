'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import { decrement, increment } from '@/store/slices/testSlice'

const Page = () => {
  const counterValue = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <>
      <p>{counterValue}</p>
      <button onClick={() => dispatch(increment())}>Increment!!!</button>
      <button onClick={() => dispatch(decrement())}>Decrement!!!</button>
    </>
  )
}

export default Page
