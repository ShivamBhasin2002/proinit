import { execSync } from "child_process";
import * as fs from "fs";

const createNextApp = (projectName: string): void => {
  execSync(`npx create-react-app ${projectName}`);
  fs.rmSync(`./${projectName}/src`, { recursive: true, force: true });
  fs.mkdirSync(`./${projectName}/src`);
  fs.mkdirSync(`./${projectName}/src/api`);
  execSync('git init');
};

export default createNextApp;
