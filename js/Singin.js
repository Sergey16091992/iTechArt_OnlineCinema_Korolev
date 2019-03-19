// $(document).ready(function() {

//     $('#navReg').css("display","inline");
//     $('#navUser').css("display","none");
    
    function SingId(){    
        var FN=$('#FN').val();
        var LN=$('#LN').val();
        
        if((FN=="Serg") && (LN=="Kor")){        
            // $('#navReg').css("display","none");
            // $('#navReg').hide();
            $('#navReg').empty();



            $('#navUser').css("display","inline");
            $('#nameUser').html('<h3 class="text-center">Hi,'+FN+' '+LN+'</h3>');            
        }
        else 
        alert("You don't have account")
    }
    
    function takeFilm() {
        var films = JSON.parse(localStorage.getItem('FILMS'))
        return films
        // var userFILMS = JSON.parse(localStorage.getItem('FILMS'))
        // alert(userFILMS)
        
    }




// })


