/**
 * Advent of code 2020 day 1
 * https://adventofcode.com/2023/day/1
 */
import parseFile from "./utils/parseFile";

const numberFromString: Record<string, string> = {
    'one': 'o1ne',
    'two': 't2wo',
    'three': 't3hree',
    'four': 'f4our',
    'five':'f5ive',
    'six': 's6ix',
    'seven': 's7even',
    'eight': 'e8ight',
    'nine': 'n9ine',
}

// Break the content into an array of lines
const extractDigitsFromLines = (lines: string[]) => {
    return lines.map((line) => {
        if (line === '') {
            return ["0", "0"];
        }
        const results = line.match(/\d/g);
        if (results === null) {
            console.error(`no digit found in line "${line}"`);
            return ["0", "0"];
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

const replaceStringsWithNumbers = (lines: string[]) => {
    lines.forEach((line, index) => {
        let newLine = line
        Object.keys(numberFromString).forEach((number) => {
            newLine = newLine.replace(new RegExp(number, 'gi'), numberFromString[number].toString());
        })
        lines[index] = newLine
    })
}

const first = (file:string) => {
    const lines = parseFile(file);

    const numberLines = extractDigitsFromLines(lines);

    const linesSummedUp = sumOfFirstAndLastDigitInLine(numberLines);

    console.log(`First Answer is: ${linesSummedUp.reduce((a, b) => a + b)}`);
}

const second = (file:string) => {
    const lines = parseFile(file);

    replaceStringsWithNumbers(lines);

    const numberLines = extractDigitsFromLines(lines);

    const linesSummedUp = sumOfFirstAndLastDigitInLine(numberLines);

    console.log(`Second Answer is: ${linesSummedUp.reduce((a, b) => a + b)}`);
}

first('2023/day1.txt');
second('2023/day1.txt');
