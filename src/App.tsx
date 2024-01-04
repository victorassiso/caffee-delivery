import { Header } from './components/header'
import { PrimaryButton } from './components/primary-button'
import { SecondaryButton } from './components/secondary-button'

function App() {
  return (
    <div>
      <Header />
      <PrimaryButton>Label</PrimaryButton>
      <SecondaryButton>Remover</SecondaryButton>
    </div>
  )
}

export default App
