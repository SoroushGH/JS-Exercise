
// Way #1
function runOnRange(object) {
    let start = object.start;
    let end = object.end;
    let step = object.step;
    let result = [];

    if (start + step == end || step === 0) {
        result.push();
    } else if (start + step < end) {
        result.push(start);
        for (let i = start; i <= end; i = start + step) {
            start = start + step;
            result.push(start);
        }
    } else if (step < 0) {
        result.push(start);
        for (let i = start; i >= end; i = start + step) {
            start = start + step;
            result.push(start);
        }
    }
    return result;
}

// way #2
function runOnRange(obj) {
    let array = [];
    let start = obj.start;
    let end = obj.end;
    let step = obj.step;

    for (let i = start; i <= end; i += step) {
        if (step === 0) {
            return array;
        } else {
            array.push(i);
        }
    }
    for (let i = start; i >= end; i += step) {
        if (start > end && step >= 0) {
            return array;
        } else {
            array.push(i);
        }
    }
    return array;
}


console.log("a", runOnRange({ start: 20, end: 26, step: 0 }));
console.log("b", runOnRange({ start: 20, end: 26, step: 3 }));
console.log("c", runOnRange({ start: 26, end: 24, step: -1 }));
console.log("d", runOnRange({ start: 12, end: 10, step: 1 }));
console.log("e", runOnRange({ start: 0, end: 10, step: 4 }));