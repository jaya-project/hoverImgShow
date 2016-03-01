$(function(){
    var x = 10;
    var y = 20;
    var _windowWidth = $(window).width() * 0.8;
    var _windowHeight = $(window).height();
    $("a.tooltip").mouseover(function(e){
        this.myTitle = this.title;
        this.myName = this.name;
        this.title = "";
        var imgTitle = this.myTitle? "<br/>" + this.myTitle : "";
        var imgName = this.myName? "<br/>" + this.myName : "";
        var tooltip = "<div id='tooltip'><img src='"+ $(this).attr('imghref') +"' alt='产品预览图'/><div style='width:100%;padding:1px 10px 15px 10px; text-align:center;'><h3>"+imgName+"</h3>"+imgTitle+"</div><\/div>"; //创建 div 元素
        $("body").append(tooltip);  //把它追加到文档中
        var _boxWidth = $('#tooltip').width();
        var _boxHeight = $('#tooltip').height();
        var _eventX = e.pageX;
        var _eventY = e.pageY;
        var _width = 0;
        if (_boxWidth + _eventX > _windowWidth) {
          _width = _boxWidth + _eventX - _windowWidth - 20;
        } else {
            _width = 0;
        }

        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left":  (e.pageX-_width)  + "px"
            });      //设置x坐标和y坐标，并且显示
        setTimeout(function() {$('#tooltip').show();}, 200);
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();  //移除
    }).mousemove(function(e){
        var _boxWidth = $('#tooltip').width();
        var _boxHeight = $('#tooltip').height();
        var _eventX = e.pageX;
        var _eventY = e.pageY;
        if (_boxWidth + _eventX > _windowWidth) {
          _width = _boxWidth + _eventX - _windowWidth - 20;
        } else {
            _width = 0;
        }
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left":  (e.pageX-_width)  + "px"
            });
    });
})