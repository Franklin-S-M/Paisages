$('.galeria__img').click(function(o){
    var img = o.target.src;
    var modal ='<div class="modal" id= "modal"><img src="'+img+'" class= "modal__img"><div class= "modal__boton"id= "modal__boton">X</div></div>';
    $('body').append(modal);
    $('#modal__boton').click (function(){
        $('#modal').remove();
    })
});
$(Document).keyup(function(o){
    if(o.which==27){
        $('#modal').remove();
    }
})       