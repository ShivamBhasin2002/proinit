import { exec, execSync } from "child_process";
import * as fs from "fs";

const createReactApp = (projectName: string): void => {
  execSync(`npx create-react-app ${projectName}`);
  fs.rmSync(`./${projectName}/src`, { recursive: true, force: true });
  fs.mkdirSync(`./${projectName}/src`);
  fs.mkdirSync(`./${projectName}/src/components`);
  fs.writeFileSync(
    `./${projectName}/src/index.jsx`,
    `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n\t<React.StrictMode>\n\t\t<App />\n\t</React.StrictMode>\n);`
  );
  fs.writeFileSync(
    `./${projectName}/src/App.jsx`,
    `function App() {\n\treturn (\n\t\t<div className="App">\n\t\t\tHello World\n\t\t</div>\n\t);}\nexport default App;`
  );
  fs.writeFileSync(
    `./${projectName}/src/index.css`,
    `* {\n\tmargin : 0;\n\tpadding : 0\n}`
  );
  // execSync(`./${projectName} git init`);
};

export default createReactApp;
