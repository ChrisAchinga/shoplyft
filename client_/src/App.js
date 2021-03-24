import Footer from './components/Footer'
import Header from './components/Header'

// screens
import HomeScreen from './screens/HomeScreen'

// styles
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeScreen />
      </main>
      <Footer />
    </div>
  )
}

export default App
