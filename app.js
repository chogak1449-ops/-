async function askAI() {

    const question = document.getElementById("question").value;

    if (!question) {
        alert("질문을 입력하세요.");
        return;
    }

    const answer = document.getElementById("answer");
    answer.innerHTML = "🤖 답변 생성중...";

    try {

        const response = await fetch(
            "https://odd-butterfly-b936.chogak1449.workers.dev/?q=" +
            encodeURIComponent(question)
        );

        const text = await response.text();

        answer.innerHTML = text;

    } catch (e) {

        answer.innerHTML = "연결에 실패했습니다.";

    }

}