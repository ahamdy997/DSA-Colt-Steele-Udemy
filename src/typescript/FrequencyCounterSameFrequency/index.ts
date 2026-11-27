// Time: O(N)
// Space: O(N)
export default function sameFrequency(n1: number , n2: number): boolean{
    const number1 = String(n1);
    const number2 = String(n2);
    if(n1 < 0 || n2 < 0 || number1.length !== number2.length) return false;

    let frequencyCounter: Record<string , number> = {};

    for(const nCh of number1) frequencyCounter[nCh] = (frequencyCounter[nCh] ?? 0) + 1;
    
    for(const nCh of number2) {
        if(!frequencyCounter[nCh]) return false;
        frequencyCounter[nCh]--;
    }
    return true;
}