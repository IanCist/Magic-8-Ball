function shakeMagic8Ball() {
    const question = prompt('Ask the magic 8 ball a question:');
    if (question === null) {
        document.getElementById('response-text').innerText
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById(response - image).src = '#BAD/BROKENIMAGE'
    }
    if (!question.trim()) {
        alert('Please enter a vaild question!')
        return
    }
    const randomNumber = Math.floor(Math.random() * 8);

    let answer, image, color

    switch (randomNumber) {
        case 0:
            answer = "Yes";
            image = "yes-image.jpg"
            color = "text-muted";
            break;
        case 1:
            answer = "It is decidedly so";
            image = "yes-image.jpg"
            color = "text-muted";
            break;
        case 2:
            answer = "As I see it yes";
            image = "yes-image.jpg"
            color = "text-muted";
            break;
        case 3:
            answer = "Ask Again Later";
            image = "yes-image.jpg"
            color = "text-danger";
            break;
        case 4:
            answer = "Cannot predict now";
            image = "yes-image.jpg"
            color = "text-danger";
            break;
        case 5:
            answer = "Outlook not so good";
            image = "yes-image.jpg"
            color = "text-danger";
            break;
        case 6:
            answer = "My sources say no";
            image = "yes-image.jpg"
            color = "text-danger";
            break;
        case 7:
            answer = "It is certain";
            image = "yes-image.jpg"
            color = "text-muted";
            break;
        case 8:
            answer = "Signs point to yes";
            image = "yes-image.jpg"
            color = "text-muted";
            break;

        default:
            break;
    }
    const responseText = document.getElementById('response-text')
    responseText.innerText = answer
    responseText.classList = `display-4 ${color}`
    document.getElementById('response-image').src = image
}

