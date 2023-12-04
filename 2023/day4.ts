/**
 * Advent of code 2020 day 4
 * https://adventofcode.com/2023/day/4
 */
import parseFile from "../utils/parseFile";

type Game = {
    id: number
    winningNumbers: Array<number>,
    cardNumbers: Array<number>,
    winningCardNumbers: Array<number>,
    count: number
}

const extractGamesData = (lines: Array<string>): Array<Game> => {
    const games : Array<Game> = [];

    lines.forEach((line, row) => {
        if(line === ''){
            return;
        }

        const game: Game = {
            id: row + 1,
            winningNumbers: [],
            cardNumbers: [],
            winningCardNumbers: [],
            count: 1,
        }

        const parts = line.replace('\r','').split(':')[1].split('|');

        game.winningNumbers = parts[0].split(' ').map((n) => parseInt(n.trim())).filter((n) => !isNaN(n));
        game.cardNumbers = parts[1].split(' ').map((n) => parseInt(n.trim())).filter((n) => !isNaN(n));

        game.winningCardNumbers = game.cardNumbers.filter((n) => game.winningNumbers.includes(n));
        games.push(game);
    })

    return games
}

const points = (game: Game): number => {
    if(game.winningCardNumbers.length === 0){
        return 0;
    }

    return Math.pow(2, game.winningCardNumbers.length - 1);
}

const duplicateGames = (games: Array<Game>) => {
    games.forEach((game, index) => {
        const wins = game.winningCardNumbers.length;
        for(let i = index + 1; i < Math.min(index + wins + 1, games.length); i++){
            games[i].count += game.count;
        }
    });
}

export const first = (file: string) => {
    const lines = parseFile(file);

    const games: Array<Game> = extractGamesData(lines);

    games.forEach((game) => {
        console.log(`Game ${game.id}: ${game.winningCardNumbers} | ${points(game)}`);
    })

    return games.reduce((a, b) => a + points(b), 0);
}


export const second = (file: string) => {
    const lines = parseFile(file);

    const games: Array<Game> = extractGamesData(lines);

    duplicateGames(games);

    return games.reduce((a, b) => a + b.count, 0);
}

console.log(`First Answer is: ${first('2023/data/day4.txt')}`);
console.log(`Second Answer is: ${second('2023/data/day4.txt')}`);
