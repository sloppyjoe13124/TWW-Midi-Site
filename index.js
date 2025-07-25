const copyBtns = document.getElementsByClassName("copy-btn")
for (let i = 0; i < copyBtns.length; i++) {
    const copyBtn = copyBtns[i]
    function copyToClipboard() {
        navigator.clipboard.writeText(copyBtn.id)
        console.log(copyBtn.id)
    }
    copyBtn.onclick = copyToClipboard
}