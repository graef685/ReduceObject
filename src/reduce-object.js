(function($) {
    $.reduceObject = function(obj, callback, acc) {
        for (var key in obj)
            acc = callback(acc, obj[key], key, obj);
        return acc;
    };
}(jQuery));