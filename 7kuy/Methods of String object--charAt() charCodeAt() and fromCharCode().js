function topSecret(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    alphabet += alphabet.toUpperCase();
    var translate ='xyzabcdefghijklmnopqrstuvw';
    translate += translate.toUpperCase();
    var chars = str.split('');
    var result = '';
    for(var i = 0; i < str.length; ++i)
        result += translate[alphabet.indexOf(str[i])] || str[i];
    return result;
}

answer1="3600";

answer2="rqn";

answer3="Expired biscuits";