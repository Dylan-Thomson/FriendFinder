$(document).ready(() => {
  // Submit survey
  $('#submit').on('click', (event) => {
    event.preventDefault();
    // Notify user to enter name and photo link if not done so
    if ($('#name').val() === '' || $('#photo').val() === '') {
      alert('Please fill out all required forms!');
    } else {
      // Get scores and push to array
      const scores = [];
      for (let i = 1; i <= $('.question').length; i++) {
        scores.push(Number($(`#question${i}`).val()));
      }
      const newUser = {
        name: $('#name').val(),
        photo: $('#photo').val(),
        scores,
      };

      // Post new user
      $.post('/api/friends', newUser).then((data) => {
        $('#bestMatchName').text(data.name);
        $('#bestMatchPhoto').attr('src', data.photo);
        $('#bestMatch').modal('show');
      });
    }
  });
});
