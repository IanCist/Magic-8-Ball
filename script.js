function shakeMagic8Ball() {
    const question = promt('Ask the magic 8 ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText
        document.getElementById ('response-text').classList = 'text-danger'
        document.getElementById(response-image).src = '#BAD/BROKENIMAGE'
    }
}

if (!question.trim()) {
    alert('Please enter a vaild question!')
    return
}