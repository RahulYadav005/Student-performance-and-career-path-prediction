# Student Performance and Career Path Prediction System
 
A machine learning and data analysis project that explores factors affecting student academic performance and career outcomes.
 
The project uses student data — covering study habits, lifestyle, and skill profiles — to uncover patterns, predict final exam scores, and classify likely career paths. It can help educators and institutions identify at-risk students early, understand what habits drive better outcomes, and make more informed academic decisions.

## Dataset

- **Rows:** 1,000 students
- **Columns:** 19 features
- **File:** `synthetic_student_dataset.csv`

## Features

| Category | Columns |
|---|---|
| Demographics | `student_id`, `age`, `gender`, `course` |
| Academic | `previous_semester_gpa`, `study_hours_per_day`, `attendance_percentage`, `assignment_completion_rate`, `study_medium`, `exam_difficulty` |
| Lifestyle | `sleep_hours_per_day`, `social_media_hours_per_day` |
| Skills | `analytical_skill`, `communication_skill`, `technical_skill`, `leadership_skill`, `creativity_skill` |
| Targets | `final_exam_score`, `career_path` |


## Use Cases

- Final exam score prediction (regression)
- Career path classification (multi-class)
- Student behaviour EDA

## Notes

- Synthetic data — no real students represented
- Skill columns are ordinal: `poor` → `average` → `good` → `outstanding`
