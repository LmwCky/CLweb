/**
 * Created by LMW on 2016/11/4.
 */
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }
    else {
        oldonload();
        func();
    }
}