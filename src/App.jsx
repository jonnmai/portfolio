import styles from "./App.module.scss";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Myself } from "./components/Myself/Myself";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Studies } from "./components/Studies/Studies"

function App() {

  return (
    <>
    <div className={ styles.app }>
      <Navbar />
      <Myself />
      <About />
      <Studies />
      <Projects />

    </div>
    <Contact />
    </>
  )
}

export default App
