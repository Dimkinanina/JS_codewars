function trueOrFalse(val){
    if (val == NaN)   return "false"
    else if (val ==0) return "false";
    else if (val == -0) return "false";
    else if (val == null) return "false";
    else if (val == undefined)   return "false";
    else    return "true";
}