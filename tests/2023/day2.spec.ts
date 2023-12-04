import { expect, test } from 'vitest'
import {first, second} from "../../2023/day2";
test('Day 2: case 1', () => {
    expect(first('tests/2023/data/day2-example1.txt')).toBe(8)
})
test('Day 2: case 2', () => {
    expect(second('tests/2023/data/day2-example2.txt')).toBe(2286)
})
