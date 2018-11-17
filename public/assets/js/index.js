$(".eat-burger").on("click", function() {
    var burgerId = $(this).attr('id')
    $.ajax({
        url: `/burgers/${burgerId}`,
        method: "PUT"
    }).then(function(res){
        console.log(res);
        window.location.href = "/"
    })    

})