// solution 1 time o(n) and space o(n)

export default function countUniaueValueSpaceOfn(arr: number[]): number {
    if(arr.length === 0) return 0;
    const arrSet = new Set(arr);
    return arrSet.size;
}

export function countUniaueValueSpaceOf1(arr: number[]): number {
    if(arr.length === 0) return 0;
    let uniqueValuesCount = 1, i = 0, j = i + 1;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            uniqueValuesCount++;
            i = j;
            j = i + 1;
        }else j++;
    }
    return uniqueValuesCount;
}