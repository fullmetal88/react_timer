import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Navigation from 'navigation';
import Main from 'components/Main';

$(document).foundation();
import styles from 'foundationStyles';
import main from 'customStyles';

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  },
});

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>, document.querySelector('#app')
);
