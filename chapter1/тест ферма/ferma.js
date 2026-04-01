
function testFerma(n) {
    for (let a = 0; a < n; a++) {
        // Используем BigInt для точных вычислений
        const pow = BigInt(a) ** BigInt(n);
        const remainder = Number(pow % BigInt(n));

        if (remainder === a) {
            console.log(`✓ ${a}^${n} mod ${n} = ${remainder} == ${a}`);
        } else {
            console.log(`✗ ${a}^${n} mod ${n} = ${remainder} != ${a}`);
        }
    }
}

testFerma(19)