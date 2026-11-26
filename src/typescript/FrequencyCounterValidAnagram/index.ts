function validAnagram (str1: string, str2: string) :boolean{
    let str1Length = str1.length, str2Length = str2.length;
    if( str1Length !== str2Length ) return false;
    if( str1Length === 0 && str2Length === 0 ) return true; 

    const frequent1Letters: {[ch : string] : number} = {}

    for(const char of str1) frequent1Letters[char] = (frequent1Letters[char] ?? 0 ) + 1 ;

    for(const char of str2){
        if(!frequent1Letters[char]) return false;
        frequent1Letters[char]--;
    }

    return true;
}

export default validAnagram