var fucs = [];

for (var i = 0; i < 10; i++) {
    fucs.push(function() {
        console.log(i);
    });
}

fucs[2](); // 10
fucs[8](); // 10