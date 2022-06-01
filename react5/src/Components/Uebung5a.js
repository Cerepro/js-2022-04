import React from 'react';
/**
 * 1) Vertausche false mit true in der App.js und schaue dir an, wie sich die Ausgabe ändert.
 */
function NutzerGruss(props) {
  return <h1>Willkommen zurück!</h1>;
}

function GastGruss(props) {
  return <h1>Bitte registrieren Sie sich.</h1>;
}

export function Gruesse(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <NutzerGruss />;
  }
  return <GastGruss />;
}


/**
 * 2) Schreibe deine If-Else Abfrage in der Funktion Gruesse2.
 */
 export class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
        <div>
          <Gruesse2 isLoggedIn={isLoggedIn} />
          {button}
        </div>
    );
  }
}

function NutzerGruss2(props) {
  return <h1>Willkommen zurück!</h1>;
}

function GastGruss2(props) {
  return <h1>Bitte registrieren Sie sich.</h1>;
}

function Gruesse2(props) {

  const isLoggedIn = props.isLoggedIn;
  //ToDo: Schreibe hier deinen Code!

}





function LoginButton(props) {
  return (
      <button onClick={props.onClick}>
        Login
      </button>
  );
}

function LogoutButton(props) {
  return (
      <button onClick={props.onClick}>
        Logout
      </button>
  );
}

export default LoginControl

/**
 * 3) Benutze hier den && Operator.
 */
export function Mailbox(props) {
  const ungeleseneNachrichten = props.ungeleseneNachrichten;
  return (
      <div>

        <h1>Willkommen zu deiner Mailbox!</h1>
        {//ToDo: Hier die Bedingung und den Operator einfügen
            <h2>
              Du hast {ungeleseneNachrichten.length} ungelesene Nachrichten.
            </h2>
        }
      </div>
  );
}

export const messages = ['React', 'Re: React', 'Re:Re: React'];


/**
 * 4) Benutze ? und : in deiner render Funktion.
 */

export class NutzerGruessung extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    }
  }

  //ToDo: Schreibe hier deinen Code statt des Rückgabewerts null!
    render(){
      return null
    }
}




