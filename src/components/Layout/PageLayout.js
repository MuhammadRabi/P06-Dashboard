import React from "react"

const PageLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen overflow-hidden bg-zinc-100">
      {children}
    </div>
  )
}

export default PageLayout
