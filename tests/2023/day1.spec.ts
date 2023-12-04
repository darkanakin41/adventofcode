import { expect, test } from 'vitest'
import {first, second} from "../../2023/day1";
test('Day 1: case 1', () => {
    expect(first('tests/2023/data/day1-example1.txt')).toBe(142)
})
test('Day 1: case 2', () => {
    expect(second('tests/2023/data/day1-example2.txt')).toBe(281)
})
