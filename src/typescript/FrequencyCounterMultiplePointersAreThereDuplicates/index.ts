// time: O(n)
// space: O(n)
export default function areThereDuplicates(...values :any[]) :boolean {
    const frequency: Record<string , number> = {};
    for(const val of values){
        if(frequency[val]) return true;
        frequency[val] = 1;
    }
    return false;
}

// time: O(n)
// space: O(n)
export function areThereDuplicatesTON(...values :any[]) :boolean {
    const setCollection = new Set(values);
    return setCollection.size !== values.length;
}

// time: O(nlogn)
// space: O(1)
export function areThereDuplicatesSO1(...values :any[]) {
    values.sort()
    let start = 0;
    let next = 1;
    while (next < values.length) {
        if (values[start] === values[next]) return true;
        start++;
        next++;
    }
    return false;
}
