import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { PlayRequest } from './grpc/mainv3_pb';
import { RacoonGameClient } from './grpc/mainv3_grpc_web_pb';

const client = new RacoonGameClient("http://localhost:8080", null, null);



function App() {

  useEffect(() => {

    (async () => {
      const req = new PlayRequest();
      console.log(client);
      req.setPlayername('nick');
      req.setDeckid(1);
      req.setMode(1);
      client.searchGame(req, {
        "authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMGUzYjkxLWQwNmUtNGVhZS05N2VkLTliNDQzZDUwZWFmZCIsInVzZXIiOnRydWUsImV4cCI6MTY1MDAyNzUzMSwiaWF0IjoxNjQ5ODU0NzMxLCJpc3MiOiJSYWNvb24ifQ.EF_-dQ8lsprAU7EG1gAdYyjo-ggMIFymDhkYLDlN55Hhd1o524OkCke7u1Bg6WiaSrDFb6xLYaxYuQ0FznFKGAtQNUxpIHCtLzgs8-OMPFjabKgQPbBp6c7obIr71ZHcteRRXZ8wNdViub62_CCnelsrc3rdNElhJJzXXd1hxvFeqbQlI9yj0OBWS91L6ypjMk3sJzVucrfzJHh6myFFlJDGlHYVFt61E2xS0SQJYsJeYcP3yfJVPiOaPiNUCmysYweQ03EH-U9p5IhPKdUm35L8JynVTPOX2Vuukw3XGmY1_xjr6sNPnAzx4T9XEHiXq0gcy38LHbZ_JgP-AfCBsw",
        "Access-Control-Allow-Origin": "*",
        "origin": "http://localhost",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
      }, (err, resp) => {
        if(err) return console.log(err);
        console.log('eureka');
        console.log(resp);
      });
    })();

  }, []);

  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    >
    Learn React
    </a>
    </header>
    </div>
  );
}

export default App;
