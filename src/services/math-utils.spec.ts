import {possibleSums, randomInt, randomSum} from "./math-utils";

describe('math-utils tests', () => {
    it("should return random integer in between min and max", () => {
        const min = 1
        const max = 9
        const randomNumber = randomInt(min, max)

        const isInt = (num: number) => num % 1 === 0
        expect(isInt(randomNumber)).toBe(true)
        expect(randomNumber >= min).toBe(true)
        expect(randomNumber <= max).toBe(true)
    })

    it("should return all possible sums when max is null", () => {
        const numbers = [1, 2, 3, 4]
        const sums = possibleSums(numbers, null)
        const expectedSums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(sums).toEqual(expectedSums)


        const numbers2 = [2, 2, 5, 7]
        const sums2 = possibleSums(numbers2, null)
        const expectedSums2 = [2, 4, 5, 7, 9, 11, 12, 14, 16]
        expect(sums2).toEqual(expectedSums2)

        const numbers3: Array<number> = []
        const sums3 = possibleSums(numbers3, null)
        const expectedSums3: Array<number> = []
        expect(sums3).toEqual(expectedSums3)
    })

    it("should return all possible sums lower or equal thank max", () => {
        const numbers = [1, 2, 3, 4]
        const sums = possibleSums(numbers, 8)
        const expectedSums = [1, 2, 3, 4, 5, 6, 7, 8]
        expect(sums).toEqual(expectedSums)


        const numbers2 = [2, 2, 5, 7]
        const sums2 = possibleSums(numbers2, 11)
        const expectedSums2 = [2, 4, 5, 7, 9, 11]
        expect(sums2).toEqual(expectedSums2)

        const numbers3: Array<number> = []
        const sums3 = possibleSums(numbers3, 10)
        const expectedSums3: Array<number> = []
        expect(sums3).toEqual(expectedSums3)
    })


    it("should return random sum from possible sums", () => {
        const numbers = [1, 2, 3, 4]
        const randomComputedSum = randomSum(numbers, null)
        const expectedSums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        expect(expectedSums.includes(randomComputedSum)).toEqual(true)


        const numbers2 = [2, 2, 5, 7]
        const randomComputedSum2 = randomSum(numbers2, null)
        const expectedSums2 = [2, 4, 5, 7, 9, 11, 12, 14, 16]
        expect(expectedSums2.includes(randomComputedSum2)).toEqual(true)

        const numbers3: Array<number> = []
        const randomComputedSum3 = randomSum(numbers3, null)
        expect(randomComputedSum3).toEqual(0)
    })
})