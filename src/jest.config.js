module.exports = {
    // Use Babel to transform the code if you have JSX/ES6
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    // Resolve node modules for react-router-dom
    moduleNameMapper: {
      '^react-router-dom$': '<rootDir>/node_modules/react-router-dom',
    },
    // Any other configurations for Jest can go here
  };
  