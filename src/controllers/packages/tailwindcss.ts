import { execSync } from "child_process";

const tailwindcss = (projectName: string): void => {
  execSync(`./${projectName} npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`);
};

export default tailwindcss;
