import {add} from '../sources/add'
import { describe, test, expect } from 'vitest'

describe('add method', () => {
    test('return 6 if arguments include: (1, 2, 3)', () => {
        const test_result: number = add(1, 2, 3)
        expect(test_result).toBe(6)
    })
})