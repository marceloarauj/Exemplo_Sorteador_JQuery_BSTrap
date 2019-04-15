$(document).ready(

    function(){


        $("#novo").click(function (e) {

            login();
        });

        $(document).on("click","#sortear",function (e) {

            $.ajax({

               method:"POST",
               dataType: "Json",
               data: participantes(),
               url: "http://localhost:8080/sortear",
               success:function (e) {
                  alert('Sucesso');
               },
               error: function (e) {
                  alert('Falha');
               }
            });
        });

        $("#spant").click(function (e) {
           let marcks = $("#lista input");

           if(!marcks.is(':checked')){
               marcks.prop('checked',true);
           }else{
               marcks.prop('checked',false);
           }
        });

        function participantes(){

            participantes = [];

            for(i =0; i < $("#lista input").length; i++)

            {
                participantes.push('{');
                participantes.push('"id"');
                participantes.push();
                participantes.push('"nome"');
                participantes.push();
                participantes.push('}');

            }
            return participantes;
        }

        $("#button-addon1").click(function (e) {

            $("#lista").append('<input id="blend" type="checkbox" class="crc">');
            $('#lista').append('<label for="blend">'+$("#novo-participante").val()+'</label></br>');
            $("#novo-participante").val('');
        });

        $(document).on("keypress","#novo-participante",function (e) {

            if(e.keyCode == 13){

                $("#lista").append('<input id="blend" type="checkbox" class="crc">');
                $('#lista').append('<label for="blend">'+$("#novo-participante").val()+'</label></br>');
                $("#novo-participante").val('');
            }

        });

        $(document).on("keypress","#login",function (e) {

            if(e.keyCode == 13){
                login();
            }

        });

        $(document).on("keypress","#password",function (e) {

            if(e.keyCode == 13){
                login();
            }

        });

        function login() {
            $.ajax({
                method: "POST",
                dataType: "Json",
                url: "http://localhost:8080/login",
                data: {
                    login: $("#login").val(),
                    password: $("#password").val()
                },
                success:function(e,msg,error){
                    alert('Sucesso');
                },
                error:function (e,msg,error) {
                    alert('Falha');
                }
            });

            $("#login").val('');
            $("#password").val('');
        }
    });





