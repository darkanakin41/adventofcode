import { expect, test } from 'vitest'
import {first, second} from "../../2023/day4";
test('Day 4: case 1', () => {
    expect(first('tests/2023/data/day4-example1.txt')).toBe(13)
})
test('Day 4: case 2', () => {
    expect(second('tests/2023/data/day4-example2.txt')).toBe(30)
})
