function receivesAFunction(callback){
    callback();
}
receivesAFunction(callback);
function returnsANamedFunction(){
    let callback = function(){
    };
    return callback;
}
function returnsAnAnonymousFunction(){
    return function(){};
}
