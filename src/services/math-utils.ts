import _ from 'lodash'
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const possibleSums = (arr: Array<number>, max: number | null): Array<number> => {
    const sets: Array<Array<number>> = [[]];
    const sums: Array<number> = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = candidateSet.reduce((a: number, b: number) => a + b, 0)
            if (!max || candidateSum <= max) {
                sets.push(candidateSet);
                sums.push(candidateSum);
            }
        }
    }
    return _.uniq(sums)
}
const randomSum = (arr: Array<number>, max: number | null): number => {
    const sums = possibleSums(arr, max)
    return sums[randomInt(0, sums.length - 1)] || 0;
}

export {randomInt, possibleSums, randomSum}