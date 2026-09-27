import ButtonEvent from "./components/ButtonEvent"
import ClickCounter from "./components/ClickCounter"
import FormHandleChange from "./components/FormHandleChange"
import FormState from "./components/FormState"
import FormSubmit from "./components/FormSubmit"
import Greeting from "./components/Greeting"
import GreetingName from "./components/GreetingName"
import LoginLogout from "./components/LoginLogout"

function App() {
  return (
    <>
      <Greeting />
      <ButtonEvent />
      <ClickCounter />
      <LoginLogout />
      <GreetingName />
      <FormSubmit />
      <FormState />
      <FormHandleChange />
    </>
  )
}

export default App
