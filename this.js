function name() {
    return function(){
        console.log(this)
    }
}

name();