
/**
* RestURL 파싱
**/

export const urlParser = (url : string , key : string) => {
    let isKey = false;
    let ans = null;
    url.split('/').map((val, idx)=>{
        if(val === key) isKey = true;
        if(isKey) ans = val;
    });

    return ans;
};