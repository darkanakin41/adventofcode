import {readFileSync} from "fs";

const parseFile = (file: string): Array<string> => {
    return readFileSync(file, "utf8").split('\n');
}

export default parseFile;
