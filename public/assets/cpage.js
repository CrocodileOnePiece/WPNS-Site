console.log('loaded')

$(document).ready(function() {
  $('form').on('submit', (e) => {
        e.preventDefault();
    
      const name1 = $('#name1').val().trim()
      const name2= $('#name2').val().trim()
       const email2 = $('#email2').val().trim()
      const text1 = $('#text1').val().trim()
      const subj=$('#subj').val().trim()
       
       const data2 ={
           name1,
           name2,
           email2,
           text1,
           subj
          };
    
       $.post('/send',data2, function() {
         console.log('Server recived Our Data');
       });
  });


  
});