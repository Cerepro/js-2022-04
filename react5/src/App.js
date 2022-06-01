import {Gruesse, LoginControl, Mailbox, messages,NutzerGruessung} from "./Components/Uebung5a";

function App() {
  return (
   <div>
     <h2>Aufgabe 1</h2>
     <Gruesse isLoggedIn={false} />

     <h2>Aufgabe 2</h2>

     <LoginControl />
     <h2> Aufgabe 3 </h2>

     <Mailbox ungeleseneNachrichten={messages} />
     <h2 >Aufgabe 4 </h2>
     //ToDo: Schreibe hier deinen Code!

    </div>
  );
}

export default App;
