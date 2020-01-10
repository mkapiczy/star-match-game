const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const randomSum = (arr: Array<number>, max: number): number => {
    const sets: Array<Array<number>> = [[]];
    const sums: Array<number> = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
            const candidateSet = sets[j].concat(arr[i]);
            const candidateSum = candidateSet.reduce((a: number, b: number) => a + b, 0)
            if (candidateSum <= max) {
                sets.push(candidateSet);
                sums.push(candidateSum);
            }
        }
    }
    return sums[random(0, sums.length - 1)];
}

export {random, randomSum}