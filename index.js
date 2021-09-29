$(function(){
    let colors = ['primary', 'danger', 'warning', 'info', 'dark', 'secondary', 'success'];
    for(let i=0;i<8;i++){
        for(let j=0;j<3;j++){
            $("#mainDiv").append('<div class="p-3 mb-2 bg-' + colors[i] + '"></div>');
        }
    }
    $("#color").keyup(function(){
        let text = this.value;
        let color = new RegExp(text);
        if(color !== ""){
            for(let i=0;i<7;i++){
                if(color.test(colors[i]) === true){
                    $(".bg-"+colors[i]).css("display","block");
                }
                else{
                    $(".bg-"+colors[i]).css("display","none");
                }
            }
        }
    })
})