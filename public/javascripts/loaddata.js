// Load your JSON data (opposites.json) using an AJAX request
fetch('../data/opposites.json')
 .then(response => response.json())
 .then(data => {
     const lessonAccordion = document.getElementById('lessonAccordion');
     data.lessons.forEach(lesson => {
         const lessonCard = document.createElement('div');
         lessonCard.classList.add('card');
         lessonCard.innerHTML = `
             <div class="card-header" id="lesson${lesson.lesson_number}Heading">
                 <h2 class="mb-0">
                     <button class="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLesson${lesson.lesson_number}" aria-expanded="true" aria-controls="collapseLesson${lesson.lesson_number}">
                         Lesson ${lesson.lesson_number}
                     </button>
                 </h2>
             </div>
             <div id="collapseLesson${lesson.lesson_number}" class="collapse" aria-labelledby="lesson${lesson.lesson_number}Heading" data-bs-parent="#lessonAccordion">
                 <div class="card-body">
                     <!-- Populate questions and answers here -->
                     ${lesson.questions.map(question => `
                         <p>${question.question_number}. ${question.words.join(', ')}</p>
                     `).join('')}
                 </div>
             </div>
         `;
         lessonAccordion.appendChild(lessonCard);
     });
 })
 .catch(error => console.error('Error fetching data:', error));