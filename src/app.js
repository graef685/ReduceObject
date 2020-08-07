$(function() {
    var obj         = {obja: {value: 17}, objb: {value: 4}};
    var accumulator = {value: 0};
    var callback    = function(dest, cur) {
        dest.value += cur.value;

        return dest;
    };
    console.log('object:     ', obj);
    console.log('reducer:    ', callback);
    console.log('accumulator:', accumulator)

    var result = $.reduceObject(obj, callback, accumulator);

    console.log('--------------------------------------');
    console.log('result:     ', result);
});