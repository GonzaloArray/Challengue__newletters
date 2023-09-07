import { ReactNode } from "react"

export const Title = ({children}: {children: ReactNode}) => {
  return (
    <h2 className="font-bold text-4xl text-gray-700">{children}</h2>
  )
}
