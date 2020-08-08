$(document).ready(function(){
    $('#btn-submit').click(function(){
        if(isEmpty())
        {
            var name=$('.input-fields:first').val();
            var email=$('.input-fields:last').val();
            var message=$('#message').val();
            $.ajax({
                url:'../app/feedback.php',
                data:'name='+name+'&email='+email+'&message='+message,
                success:function(data)
                {
                    $('#feed-back').html(data).fadeOut(3000);
                },
                type:'POST'
            });
        }
    });   
});
function isEmpty()
{
    var flag=false;
    $('.input-fields,#message').each(function(){
        if($(this).val()==='')
        {
            alert('Please '+$(this).attr('placeholder').toLowerCase());
            flag=false;
        }
        else
        {
            flag=true;
        }
    });
    return flag;
}
$('#top').click(function(){
    $('html,body').animate({scrollTop : 0},1500);
});