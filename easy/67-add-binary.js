// how tf is this LC easy 💀

const addBinary = (a, b) => {
    const longest = a.length > b.length ? a : b,
        shortest = (longest == a ? b : a);
    const off = longest.length - shortest.length;
    let carry = 0;
    let output = "";
    for (i = longest.length-1; i >= 0; i--) {
        if (carry == 0) {
            if (!shortest[i-off]) {
                output = longest[i] + output;
            }
            else {
                if (parseInt(longest[i]) + parseInt(shortest[i-off]) == 2) {
                    carry = 1;
                    output = "0" + output;
                } else {
                    output = (parseInt(longest[i]) + parseInt(shortest[i-off])).toString() + output;
                }
            }
        } else {
            if (!shortest[i-off]) {
                if (longest[i] == "1") {
                    output = "0" + output;
                } else {
                    output = "1" + output;
                    carry = 0;
                }
            } else {
                if (parseInt(longest[i]) + parseInt(shortest[i-off]) == 2) {
                    output = "1" + output;
                } else {
                    if (parseInt(longest[i]) + parseInt(shortest[i-off]) == "1") {
                        output = "0" + output;
                    } else {
                        output = "1" + output;
                        carry = 0;
                    }
                }
            }
        }
    }
    if (carry == 1) output = "1" + output;
    return output;
}

// console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));