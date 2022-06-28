import { Command } from "@oclif/core";
import { prompt } from "enquirer";
import prettier from "../controllers/packages/prettier";
import tailwindcss from "../controllers/packages/tailwindcss";
import createReactApp from "../controllers/projectControllers/react";

export default class React extends Command {
  static description = "describe the command here";
  static args = [
    {
      name: "projectName",
      description: "The name of the project to be created",
      required: true,
    },
  ];
  async run(): Promise<void> {
    const { args } = await this.parse(React);
    const { dependencies }: { dependencies: any } = await prompt({
      name: "dependencies",
      type: "multiselect",
      message: "Select dependencies to be initialized:",
      choices: ["Tailwind CSS", "Prettier"],
    });
    createReactApp(args.projectName);
    for(let t of dependencies){
      switch(t)
      {
        case "Tailwind CSS":
          tailwindcss(args.projectName);
          break;
        case "Prettier":
          prettier(args.projectName);
          break;
      }
    };
  }
}
