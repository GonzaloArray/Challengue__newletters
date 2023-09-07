import { ReactNode } from "react"

export const DescriptionText = ({children}: {children: ReactNode}) => {
  return (
    <p className="text-sm font-semibold text-gray-700 flex gap-2 w-4/5">{children}</p>
  )
}

export const DescriptionTextModal = ({children}: {children: ReactNode}) => {
  return (
    <p className="text-sm font-semibold text-gray-700 w-4/5">{children}</p>
  )
}
