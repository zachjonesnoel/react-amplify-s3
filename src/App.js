import './App.css';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import {AmplifyS3Album} from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <AmplifyAuthenticator>
        <header className="App-header">
          <AmplifySignOut />
          <AmplifyS3Album />
        </header>
      </AmplifyAuthenticator>
    </div>
  );
}

export default App;
