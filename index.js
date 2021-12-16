const receivesAFunction = function (callback) {
    callback();
};

function returnsANamedFunction () {
    return function namedCallback (){}
};

function returnsAnAnonymousFunction () {
    return function (){}
}