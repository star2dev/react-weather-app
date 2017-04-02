var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>Tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react" target="_blank">React</a> - Javascript framework used, along with:
          <ul>
            <li>
              <a href="https://nodejs.org" target="_blank">Node.js</a>
            </li>
            <li>
              <a href="http://expressjs.com" target="_blank">Express</a> Web application framework
            </li>
            <li>
              <a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a> (Promise based HTTP client)
            </li>
          </ul>
        </li>
        <li>
          <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Used to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
