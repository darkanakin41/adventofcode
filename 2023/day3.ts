/**
 * Advent of code 2020 day 2
 * https://adventofcode.com/2023/day/2
 */
import parseFile from "./utils/parseFile";

type Coords = {
    x: number,
    y: number,
}

type ContentNumber = {
    value: number,
    gearPosition?: Coords
}

const isSurroundedByOneSymbol = (lines: Array<string>, row: number, col: number): boolean => {
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (lines[i] && lines[i][j] && lines[i][j] !== '.' && isNaN(Number(lines[i][j]))) {
                return true;
            }
        }
    }
    return false;
}

const getSurroundingGearCoords = (lines: Array<string>, row: number, col: number): Coords | undefined => {
    for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
            if (lines[i] && lines[i][j] && lines[i][j] === '*') {
                return {x: j, y: i};
            }
        }
    }
    return undefined;
}

const extractNumbers = (lines: Array<string>): Array<ContentNumber> => {
    const numbers: Array<ContentNumber> = [];

    let number: Array<string> = [];
    let canAdd = false;
    let gearCoords: Coords|undefined = undefined;

    lines.forEach((line, row) => {
        line.split('').forEach((char, col) => {
            if (isNaN(parseInt(char))) {
                if (number.length > 0 && canAdd) {
                    numbers.push({
                        value: Number(number.join('')),
                        gearPosition: gearCoords,
                    });
                }
                canAdd = false;
                number = [];
                gearCoords = undefined;
                return;
            }
            number.push(char);
            if (isSurroundedByOneSymbol(lines, row, col)) {
                const tmpGearCoords = getSurroundingGearCoords(lines, row, col);
                if(tmpGearCoords){
                    gearCoords = tmpGearCoords;
                }
                canAdd = true;
            }
        })
    })

    return numbers;
}

const first = (file: string) => {
    const lines = parseFile(file);

    const numbers = extractNumbers(lines);

    console.log(`First Answer is: ${numbers.reduce((a, b) => a + b.value, 0)}`);
}

const second = (file: string) => {
    const lines = parseFile(file);

    const numbers = extractNumbers(lines);

    const gearNumbers = numbers.filter((number) => number.gearPosition);

    let total = 0;
    gearNumbers.forEach((number, index) => {
        for(let j = index + 1; j < gearNumbers.length; j++){
            if(number.gearPosition?.x === gearNumbers[j].gearPosition?.x && number.gearPosition?.y === gearNumbers[j].gearPosition?.y){
                total += (number.value * gearNumbers[j].value);
                return;
            }
        }
    })

    console.log(`Second Answer is: ${total}`);
}

first("2023/day3.txt");
second("2023/day3.txt");
