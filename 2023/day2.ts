/**
 * Advent of code 2020 day 2
 * https://adventofcode.com/2023/day/2
 */
import parseFile from "./utils/parseFile";

const limits = {
    red: 12,
    green: 13,
    blue: 14,
}

type Game = {
    id: number,
    red: number,
    green: number,
    blue: number,
}

const extractGamesData = (lines: Array<string>): Array<Game> => {
    const games: Array<Game> = [];

    lines.forEach((line) => {
        const game: Game = {
            id: 0,
            red: 0,
            green: 0,
            blue: 0,
        }
        game.id = parseInt(((line.match(/Game\s(\d+)/) ?? [])[1] ?? '0'));
        const gameData = line.replace(/Game\s(\d+):/, '').trim();

        const draws = gameData.split(';');

        draws.forEach((draw) => {
            const redCount = (draw.match(/(\d+)\sred/) ?? [])[1] ?? '0';
            const greenCount = (draw.match(/(\d+)\sgreen/) ?? [])[1] ?? '0';
            const blueCount = (draw.match(/(\d+)\sblue/) ?? [])[1] ?? '0';

            game.red = Math.max(game.red, parseInt(redCount));
            game.green = Math.max(game.green, parseInt(greenCount));
            game.blue = Math.max(game.blue, parseInt(blueCount));
        })

        games.push(game);
    })

    return games;
};

const main = () => {
    const lines = parseFile("2023/day2.txt");

    const games = extractGamesData(lines);

    const validGames = games.filter((game) => game.red <= limits.red && game.green <= limits.green && game.blue <= limits.blue);

    console.log(`Answer is: ${validGames.reduce((a, b) => a + b.id, 0)}`);
}

main();
