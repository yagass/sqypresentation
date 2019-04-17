






























// c'est un exemple pour realiser les bases de donees


// creation 


//console.log($);


$.get('http://localhost:3000/students', function (response) {
  response.forEach(function (student) {
    const div = document.createElement('div');
    div.innerHTML = student.student_name;
    document.body.appendChild(div)
  })
});

function send () {
  var student_name = document.querySelector('#student_name').value;
  console.log(student_name);
  $.post('http://localhost:3000/students', {student_name : student_name}, function (response) {
     console.log(response);
  });
}
