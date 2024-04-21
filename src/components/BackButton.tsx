import React from "react"

interface Props {
  onClick: () => void
}

const BackButton: React.FC<Props> = ({ onClick }): JSX.Element => {
  return (
    <button
      className="absolute z-50 top-3 left-3 text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg p-1 mb-5"
      onClick={onClick}
    >
      Back
    </button>
  )
}

export default BackButton
