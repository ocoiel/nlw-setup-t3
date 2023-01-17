export function Skeleton() {
  return (
    <div className='flex h-8 w-32 animate-pulse flex-row justify-center rounded-lg bg-gray-300'></div>
  )
}

export default function Loading() {
  return <Skeleton />
}
