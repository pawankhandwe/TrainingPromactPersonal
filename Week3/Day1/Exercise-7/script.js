const student = {
    name: "",
    gradeLevel: "",
    courseNames: []
};

// Create student instances and display in table
const studentsArray = [];

function addStudent(name, gradeLevel, courses) {
    const newStudent = Object.create(student);
    newStudent.name = name;
    newStudent.gradeLevel = gradeLevel;
    newStudent.courseNames = courses; // Assign the courses directly
    studentsArray.push(newStudent);
    console.log(newStudent);
    console.log(studentsArray);
    updateStudentTable();
}
// Update a student's row in the table after adding/removing courses
function updateStudentRow(student) {
    const row = studentTableBody.querySelector(`tr[data-name="${student.name}"]`);
    if (row) {
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.gradeLevel}</td>
            <td>${student.courseNames.join(", ")}</td>
            <td>
                <button class="add-course" data-name="${student.name}">Add Course</button>
                <button class="remove-course" data-name="${student.name}">Remove Course</button>
            </td>
        `;

        const addCourseButton = row.querySelector('.add-course');
        addCourseButton.addEventListener('click', function() {
            const courseName = prompt(`Enter a course for ${student.name}`);
            if (courseName) {
                student.courseNames.push(courseName); // Directly push to the array
                updateStudentRow(student);
                alert(`${courseName} assigned to ${student.name}!`);
            }
        });
        
        
        
        const removeCourseButton = row.querySelector('.remove-course');
        removeCourseButton.addEventListener('click', function() {
            const courseName = prompt(`Enter a course to remove for ${student.name}`);
            
            if (courseName) {
                const courseIndex = student.courseNames.indexOf(courseName);
                
                if (courseIndex !== -1) {
                    student.courseNames.splice(courseIndex, 1); // Remove the course at courseIndex
                    updateStudentRow(student);
                    alert(`${courseName} removed from ${student.name}!`);
                } else {
                    alert(`${courseName} not found for ${student.name}`);
                }
            }
        });
        
        
    }
}

// Initial table update
function updateStudentTable() {
    studentTableBody.innerHTML = ''; // Clear the table
    studentsArray.forEach(student => {
        const row = document.createElement('tr');
        row.setAttribute('data-name', student.name);
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.gradeLevel}</td>
            <td>${student.courseNames.join(", ")}</td>
            <td>
                <button class="add-course" data-name="${student.name}">Add Course</button>
                <button class="remove-course" data-name="${student.name}">Remove Course</button>
            </td>
        `;
        studentTableBody.appendChild(row);
        updateStudentRow(student); // Add event listeners to buttons
    });
}

// Assuming you have the filterStudentsByCourse function defined




// Add students
addStudent("pawan", "10", ["Math","Physics","chemistry"]);
addStudent("piyush", "11", ["biology","Physics","chemistry"]);
addStudent("priyesh", "9", ["computerScience","Physics"]);


const courseNameInput = document.getElementById('courseName');
const filterButton = document.getElementById('filterButton');
console.log(filterButton);
const clearButton = document.getElementById('clearButton');
const filteredStudentsDiv = document.getElementById('filteredStudents');

// Assuming you have defined the filterStudentsByCourse function somewhere

// ... Your existing code

function filterStudentsByCourse(studentsArray, courseName) {
    return studentsArray.filter(student => student.courseNames.includes(courseName));
}

filterButton.onclick = function() {
    const courseName = courseNameInput.value.trim();
    let output = '';

    if (courseName !== '') {
        const filteredStudents = filterStudentsByCourse(studentsArray, courseName);

        if (filteredStudents.length > 0) {
            output += '<h2>Filtered Students:</h2>';
            output += '<ul>';

            filteredStudents.forEach(student => {
                output += `<li>${student.name} (Grade ${student.gradeLevel})</li>`;
            });

            output += '</ul>';
        } else {
            output = '<p>No students found for the given course.</p>';
        }

        filteredStudentsDiv.innerHTML = output;
        courseNameInput.value = ''; // Clear the search box
    }
};

// ... Rest of your code


clearButton.onclick = function() {
    filteredStudentsDiv.innerHTML = ''; // Clear the filtered results
};

