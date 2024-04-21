import Search from "./components/Search"
import useForecast from "./hooks/useForecast"
import Forecast from "./components/Forecast"
import BackButton from "./components/BackButton"
import { useState } from "react"

const App = (): JSX.Element => {
  const {
    term,
    options,
    forecast,
    onInputChange,
    onOptionSelect,
    onSubmit,
    resetForecast
  } = useForecast()

  const [showForecast, setShowForecast] = useState<boolean>(false)

  const handleBackButton = () => {
    resetForecast()
    setShowForecast(false)
    onInputChange("")
  }

  const submitSearch = () => {
    setShowForecast(true)
    onSubmit()
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {showForecast && forecast ? (
        <div className="relative">
          <BackButton onClick={handleBackButton} />
          <Forecast data={forecast} />
        </div>
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={submitSearch}
        />
      )}
    </main>
  )
}

export default App
