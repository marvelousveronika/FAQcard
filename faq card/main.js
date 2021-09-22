  
const questions = document.querySelectorAll(".holder__question");

for (let question of questions) {
    question.addEventListener('click', function() {
        if (question.classList.contains("off")) {
            question.classList.remove("off");
            question.classList.add("on");
        } else if (question.classList.contains("on")) {
            question.classList.remove("on");
            question.classList.add("off");
        }
    });
}

