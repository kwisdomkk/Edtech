document.addEventListener("DOMContentLoaded", function () {
  const termsList = document.getElementById("terms");
  const termDetails = document.getElementById("term_details");
  const termTitle = document.getElementById("term_title");
  const termDefinition = document.getElementById("term_definition");
  const termRelated = document.getElementById("term_related");
  const termUsecases = document.getElementById("term_usecases");

  // JSON 파일 로드
  fetch("./edutech_terms_1.json")
      .then(response => response.json()) // JSON 변환
      .then(data => {
          data.forEach((item) => {
              const li = document.createElement("li");
              li.textContent = item.term;

              li.addEventListener("click", function () {
                  // 기존에 선택된 항목에서 'active' 제거
                  document.querySelectorAll("#terms li").forEach(el => el.classList.remove("active"));

                  // 선택된 항목에 'active' 클래스 추가
                  li.classList.add("active");

                  // 선택한 용어의 정보 표시
                  termTitle.textContent = item.term;
                  termDefinition.textContent = item.definition;
                  termRelated.textContent = item.related_technology;
                  termUsecases.textContent = item.use_cases;

                  // 상세 정보 보이게 하기
                  termDetails.style.display = "block";
              });

              termsList.appendChild(li);
          });
      })
      .catch(error => console.error("JSON 로딩 오류:", error));
});
