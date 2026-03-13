function submitForm() {
    var formData = {
    age:                document.getElementById('age').value,
    gender:             document.getElementById('gender').value,
    course:             document.getElementById('course').value,
    previous_gpa:       document.getElementById('gpa').value,
    study_hours:        document.getElementById('study_hours').value,
    attendance:         document.getElementById('attendance').value,
    sleep_hours:        document.getElementById('sleep_hours').value,
    social_media_hours: document.getElementById('social_media').value,
    assignment:         document.getElementById('assignment').value,
    study_medium:       document.getElementById('study_medium').value,
    exam_difficulty:    document.getElementById('exam_difficulty').value,
    analytical_skill:   document.getElementById('analytical_skill').value,
    communication_skill:document.getElementById('communication_skill').value,
    technical_skill:    document.getElementById('technical_skill').value,
    leadership_skill:   document.getElementById('leadership_skill').value,
    creativity_skill:   document.getElementById('creativity_skill').value,
    };

    console.log("Form data:", formData);

    var resultCard = document.getElementById('result-card');
    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth' });
}

function selectSkill(skill, level, clickedBtn) {
  // Remove active class from all pills in this column
  var allPills = clickedBtn.parentElement.querySelectorAll('.skill-pill');
  for (var i = 0; i < allPills.length; i++) {
    allPills[i].className = 'skill-pill';
  }

  // Set active class on clicked pill
  clickedBtn.classList.add('active-' + level);

  // Save value to hidden input so submitForm() can still read it
  document.getElementById(skill + '_skill').value = level;
}