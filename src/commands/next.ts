import { Command } from "@oclif/core";
import { prompt } from "enquirer";
import createNextApp from "../controllers/projectControllers/next";

export default class Next extends Command {
  static description = "describe the command here";
  static args = [
    {
      name: "projectName",
      description: "The name of the project to be created",
      required: true,
    },
  ];
  async run(): Promise<void> {
    const { args } = await this.parse(Next);
    const { dependencies }: { dependencies: ArrayBuffer } = await prompt({
      name: "dependencies",
      type: "multiselect",
      message: "Select dependencies to be initialized:",
      choices: ["Tailwind CSS", "Prettier"],
    });
    createNextApp(args.projectName);
  }
}
