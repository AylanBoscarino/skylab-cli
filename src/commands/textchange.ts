import Command from "@oclif/command";
import { IArg } from "@oclif/parser/lib/args";
import { cli } from "cli-ux";
import * as fs from "fs";
import path from "path";

const appJson = "app.json";
const packageJson = "package.json";
const settingsGraddle = "android/settings.gradle";
const buck = "android/app/BUCK";
const appBuildGraddle = "android/app/build.gradle";
const androidManifest = "android/app/src/main/AndroidManifest.xml";
const strings = "android/app/src/main/res/values/strings.xml";

/**
 * Moves the $file to $dir
 * @param file string - starting file path
 * @param dir2 string - the directory to wich the file shall be moved
 */
function moveFile(file: string, dir2: string) {
    const dest = path.resolve(dir2);
    const origin = path.resolve(file);

    const finalDirName = path.resolve(path.dirname(dir2));
    fs.mkdir(finalDirName, () => {
        // Do nothing
    });
    fs.renameSync(origin, dest);
}

export function changeProjectName(newName = ""): void {
    const rawAppJson = fs.readFileSync(appJson);
    const oldName = JSON.parse(rawAppJson.toString()).name;

    const oldMainActivity = `android/app/src/main/java/com/${oldName}/MainActivity.java`;
    const oldMainApplication = `android/app/src/main/java/com/${oldName}/MainApplication.java`;

    const newMainActivityPath = `android/app/src/main/java/com/${newName}/MainActivity.java`;
    const newMainApplicationPath = `android/app/src/main/java/com/${newName}/MainApplication.java`;

    moveFile(oldMainActivity, newMainActivityPath);
    moveFile(oldMainApplication, newMainApplicationPath);

    const lista = [
        appJson,
        packageJson,
        settingsGraddle,
        buck,
        appBuildGraddle,
        androidManifest,
        strings,
        newMainActivityPath,
        newMainApplicationPath,
    ];

    lista.map((fileName: string) => {
        fs.readFile(fileName, "utf8", (error: Error, code: string) => {
            if (error) {
                return console.error({ error });
            }

            const newText = code.replace(new RegExp(oldName, "g"), newName);
            fs.writeFile(fileName, newText, "utf8", (error) => {
                if (error) {
                    return console.error({ error });
                }
            });
        });
    });
}

export default class TextChange extends Command {
    public static args: IArg[] = [{ name: "newName", description: "Project name", required: true }];
    public run(): any {
        const { args } = this.parse(TextChange);
        changeProjectName(args.newName)
    }
}
