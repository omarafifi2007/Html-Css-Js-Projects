let CountDown;
let currentIndex = 0;
let RightAnswers = 0;
let bullets = document.querySelector('.bullets');
let results = document.querySelector('.results');
let quiz_area = document.querySelector('.quiz-area');
let countDownEle = document.querySelector('.count-down');
let BulletSpan = document.querySelector('.bullets .spans');
let answers_Area = document.querySelector('.answers-area');
let submit_button = document.querySelector('.submit-button');
let question_count = document.getElementById('question_count');

function getQuestions() {
    let myRequst = new XMLHttpRequest();
    myRequst.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let QuestionsObject = JSON.parse(this.responseText);
            question_count.append(QuestionsObject.length);

            for (let i = 0;i < QuestionsObject.length;i++) {
                let Bullet = document.createElement('span');
                if (i === 0) {
                    Bullet.className = 'on';
                }
                BulletSpan.appendChild(Bullet);
            }

            AddData(QuestionsObject[currentIndex], QuestionsObject.length);
            countDown(180, QuestionsObject.length)
            submit_button.onclick = () => {
                let RightAnswer = QuestionsObject[currentIndex].Right_answer;
                currentIndex++;
                checkAnswer(RightAnswer, QuestionsObject.length);
                quiz_area.innerHTML = "";
                answers_Area.innerHTML = "";
                AddData(QuestionsObject[currentIndex], QuestionsObject.length);
                handlebullets();
                clearInterval(CountDown);
                countDown(180, QuestionsObject.length)
                ShowResults(QuestionsObject.length);
            }
        }
    }
    myRequst.open("GET", "html_Questions.json", true);
    myRequst.send();
}
getQuestions();

function AddData(obj, count) {
    if (currentIndex < count) {
        let QuestionsTitle = document.createElement('h2');
        let QuestionsText = document.createTextNode(obj['title']);

        QuestionsTitle.appendChild(QuestionsText);
        quiz_area.appendChild(QuestionsTitle);

        for (let i = 1;i <= 4;i++) {
            let answer = document.createElement('div');
            answer.className = 'answer';
            let input = document.createElement('input');
            input.type = 'radio';
            input.name = 'questions';
            input.id = `answer-${i}`;
            input.dataset.answer = obj[`answer_${i}`];
            if (i === 1) {
                input.checked = true;
            }
            let label = document.createElement('label');
            label.setAttribute('for', `answer-${i}`);
            let labelText = document.createTextNode(obj[`answer_${i}`])
            answer.append(input);
            answer.append(label);
            answers_Area.append(answer);
            label.appendChild(labelText);
        }
    }
}

function checkAnswer(rAnswer, count) {
    let answers = document.getElementsByName("questions");
    let ChoosenAnswer;
    for (let i = 0;i < answers.length;i++) {
        if (answers[i].checked) {
            ChoosenAnswer = answers[i].dataset.answer;
        }
    }
    if (rAnswer === ChoosenAnswer) {
        RightAnswers++;
        console.log('Good Answer')
    }
}

function handlebullets() {
    let bulletsspans = document.querySelectorAll('.bullets .spans span');
    let aarrayofspan = Array.from(bulletsspans);
    aarrayofspan.forEach((span, index) => {
        if (currentIndex === index) {
            span.className = 'on';
        }
    })
}

function ShowResults(count) {
    let Theresults;
    if (currentIndex === count) {
        quiz_area.remove();
        answers_Area.remove();
        submit_button.remove();
        bullets.remove();
        if (RightAnswers > (count / 2) && RightAnswers < count) {
            Theresults = `<span class="good">Good</span>, ${RightAnswers} From ${count} Is Right Answer`;
        } else if (RightAnswers === count) {
            Theresults = `<span class="perfect">Perfect</span>, All Answers Is Right`;
        } else {
            Theresults = `<span class="bad">bad</span>, ${RightAnswers} From ${count}`;
        }
        results.innerHTML = Theresults;
    }
}

function countDown(duration, count) {
    if (currentIndex < count) {
        let minutes, seconds;
        CountDown = setInterval(function () {
            minutes = parseInt(duration / 60);
            seconds = parseInt(duration % 60);
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            seconds = seconds < 10 ? `0${seconds}` : seconds;
            countDownEle.innerHTML = `${minutes}:${seconds}`;
            if (--duration < 0) {
                clearInterval(CountDown);
                submit_button.click();
            }
        }, 1000)
    }
}