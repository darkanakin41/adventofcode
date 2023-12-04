import { expect, test } from 'vitest'
import {first, second} from "../../2023/day3";
test('Day 3: case 1', () => {
    expect(first('tests/2023/data/day3-example1.txt')).toBe(4361)
})
test('Day 3: case 2', () => {
    expect(second('tests/2023/data/day3-example2.txt')).toBe(467835)
})
