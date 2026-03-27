function makeHighLightingCode(event) {
    let codes = document.body.querySelectorAll('code')
    for (let code of codes) {
        if (code.parentNode.tagName != 'PRE') {
            code.classList.add('highlightsinglecode')
        }
    }
}
makeHighLightingCode()
