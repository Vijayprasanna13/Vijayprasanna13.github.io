function is_section_allowed(url,rollno){
      var type = $(this).attr('id');  
      $.ajax({
              url: ,
              type:"POST",
              data: {
                    "rollno" : rollno ,
                    "type": type
                    },
              success:function(data){
                console.log(type,data);
                //alert(data);
                data = JSON.parse(data); 
                if(data['status'] == 'not attended')
                  window.location.replace('/section/'+($(this).attr('id'))); //redirects to the intended webpage
                else 
                  window.alert('attended');
                
              },
              error:function(){ 
                  alert("error!");
              }
        });
  }

function s(){
  alert('ads');
}