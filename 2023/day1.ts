/**
 * Advent of code 2020 day 1
 * https://adventofcode.com/2023/day/1
 */
import parseFile from "./utils/parseFile";

// Break the content into an array of lines
const extractDigitsFromLines = (lines: string[]) => {
    return lines.map((line) => {
        if (line === '') {
            return ["0", "0"];
        }
        const results = line.match(/\d/g);
        if (results === null) {
            throw new Error(`no digit found in line "${line}"`);
        }

        return results;
    })
}

// Sum up the first and last digit in each line
const sumOfFirstAndLastDigitInLine = (numberLines: string[][]) => {
    return numberLines.map((numbers) => {
        const first = numbers[0];
        const last = numbers[numbers.length - 1];

        return parseInt(`${first}${last}`);
    })
}

const main = () => {
    const lines = parseFile("2023/day1.txt");

    const numberLines = extractDigitsFromLines(lines);

    const linesSummedUp = sumOfFirstAndLastDigitInLine(numberLines);

    console.log(`Answer is: ${linesSummedUp.reduce((a, b) => a + b)}`);
}

main();
