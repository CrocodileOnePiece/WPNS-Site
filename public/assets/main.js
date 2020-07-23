console.log('loaded')

$(document).ready(function() {
  $('form').on('submit', (e) => {
        e.preventDefault();
    
       const name=$('#name').val().trim()
       const email = $('#email').val().trim()
       const time = $('#Select1').val().trim()
       const day = $('#Select2').val().trim()
       const text = $('#Text').val().trim()
       
       const data={
            name,
            time,
            email,
            day,
            text
          };
    
       $.post('/email',data, function() {
         console.log('Server recived Our Data');
       });
  });


  
});