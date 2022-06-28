import { execSync } from "child_process";
import * as fs from "fs";

const prettier = (projectName: string): void => {
  fs.writeFileSync(`./${projectName}/prettier.conf`,'');
};

export default prettier;
