(function(){
    // 导航栏切换
    //-----------  导航控制
    var urlMap = {
        '/index_CN.html': [0],//首页
        '/wallet/wallet.html': [2,0],//钱包
        'coming_soon.html':[2,1],
        'coming_soon.html':[2,2],
        'community_CN.html': [4],
        'vision_CN.html': [3,0],
        'team_CN.html': [3,1],
        '/': [0]//首页
    }
    // console.log(location.pathname)
    function findMenu(path){
        var $item = $("#header-navbar-collapse")
        var menuList = [];
        for(var i in path){
            // console.log("@@@@@@@@@",$item.children("li"))
            $item = $item.children('ul').children("li").eq(path[i])
            menuList.push($item)
        }
        return menuList
    }
    function searchMenu(pathname,urlMap){
        var path = null
        for(var prop in urlMap){
            // console.log(prop,"dddddddd")
            if(pathname.indexOf(prop) > -1){
                path = urlMap[prop];
                break;
            }
        }
        return path
    }
    var menuPath = searchMenu(location.pathname, urlMap)
    var matchMenuList =  findMenu(menuPath)
    // console.log("matchMenuList",matchMenuList)

    for(var k in matchMenuList){
        matchMenuList[k].addClass('active_ac')
    }

    // 导航滚动变色
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.header').addClass('minified');
            $('.caret_copy1').addClass('caret_copy');
            $('.caret_copy2').addClass('.caret_copy_in').removeClass('caret_copy');
        } else {
            $('.header').removeClass('minified');
            $('.caret_copy1').addClass('.caret_copy_in').removeClass('caret_copy');
            $('.caret_copy2').addClass('caret_copy');
        }
    });
    // 移动端导航栏关闭
    $(".navbar-header").click(function(){
        $("#header-navbar-collapse").css("display","block");
    })
    $(".colse_app").click(function(){
        // $(".collapse").hide();
        $("#header-navbar-collapse").css("display","none");
    })
    // 鼠标滚动显示或隐藏导航
    var new_scroll_position = 0;
    var last_scroll_position;
    window.addEventListener('scroll', function(e) {
        last_scroll_position = window.scrollY;
        if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
            $(".header").removeClass('slideDown').addClass('slideUp');

        } else if (new_scroll_position > last_scroll_position) {
            $(".header").removeClass('slideUp').addClass('slideDown');
        }

        new_scroll_position = last_scroll_position;
    });
    // 首页 离子链视频
    $(".ctrl").click(function(){
        $(".block_chain").hide();
        $(".herVideo").show();
        $("#icon-video2").append($iframeVideo)
    })
    $(".close").click(function(){
        $(".herVideo").hide();
        $("#icon-video2 iframe").remove();
    })
    $(".block_img").click(function(){
        // console.log(123);
        $(".herVideo").show();
    })



    // 图片轮播 1
    var blw=$("#myscrollbox_1 li").width();
    //获取单个子元素所需宽度
    var liArr = $("#myscrollbox_1 ul").children("li");
    //获取子元素数量
    var mysw = $("#myscroll_1").width();
    //获取子元素所在区域宽度
    var mus = parseInt(mysw/blw);
    //计算出需要显示的子元素的数量
    var length = liArr.length-mus;

    //获取最后一个不完整的步长
    var bodyWid =  $(window).width();
    var lastW = blw - bodyWid % blw;

    //计算子元素可移动次数（被隐藏的子元素数量）
    var i=0
    $("#right_1").click(function(){
        console.log("click move")
        i++
        //点击i加1
        if(i<length){
            $("#myscrollbox_1").css("left",-(blw*i));
            //子元素集合向左移动，距离为子元素的宽度乘以i。
        }else{
            // console.log("last move")
            i=length;
            if(lastW!=0){

                $("#myscrollbox_1").css("left",-(blw*(length-1)+ lastW));
            }else{

                $("#myscrollbox_1").css("left",-(blw*length));
                //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
            }
        }
    });
    $("#left_1").click(function(){
        i--
        //点击i减1
        if(i>=0){
            $("#myscrollbox_1").css("left",-(blw*i));
            //子元素集合向右移动，距离为子元素的宽度乘以i。
        }else{
            i=0;
            $("#myscrollbox_1").css("left",0);
            //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
        }
    });
    $(".tablea").find(".box:eq(0)").show();    //为每个BOX的第一个元素显示
    $("#myscrollbox_1 ul li").on("click",function(){ //给a标签添加事件
        //团队
        var index=$(this).index();  //获取当前a标签的个数
        $(".team_us .tablea").each(function(){
            $(this).find(".box").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示
        })
        $(this).parent().find('.mask').removeClass("selected");
        $(this).children('.mask').addClass("selected");
    })

    $(".tableas").find(".box:eq(0)").show();
    $("#myscrollbox_2 ul li").on("click",function(){ //给a标签添加事件
        //----顾问
        var index=$(this).index();  //获取当前a标签的个数
        $(".tableas").each(function(){
            $(this).find(".box").hide().eq(index).show(); //返回上一层，在下面查找css名为box隐藏，然后选中的显示
        })

        $(this).parent().find('.mask').removeClass("selected");
        $(this).children('.mask').addClass("selected");
    })



    // 图片轮播 2
    var blw_t=$("#myscrollbox_2 li").width();
    //获取单个子元素所需宽度
    var liArr_t = $("#myscrollbox_2 ul").children("li");
    //获取子元素数量
    var mysw_t = $("#myscroll_2").width();
    //获取子元素所在区域宽度
    var mus_t = parseInt(mysw_t/blw_t);
    //计算出需要显示的子元素的数量
    var length_t = liArr_t.length-mus_t;
    //计算子元素可移动次数（被隐藏的子元素数量）

    //获取最后一个不完整的步长
    var bodyWid_t =  $(window).width();
    var lastW_t = blw_t - bodyWid_t % blw_t;

    var j=0
    $("#right_2").click(function(){
        console.log("click right_2")
        j++
        //点击i加1
        if(j<length){
            $("#myscrollbox_2").css("left",-(blw_t*j));
            //子元素集合向左移动，距离为子元素的宽度乘以i。
        }else{
            j=length;
            if(lastW_t!=0){
                $("#myscrollbox_2").css("left",-(blw_t*(length-1)+ lastW_t));
            }else {
                $("#myscrollbox_2").css("left",-(blw_t*length));
            //超出可移动范围后点击不再移动。最后几个隐藏的元素显示时i数值固定位已经移走的子元素数量。
            }
        }


    });
    $("#left_2").click(function(){
        j--
        //点击j减1
        if(j>=0){
            $("#myscrollbox_2").css("left",-(blw_t*j));
            //子元素集合向右移动，距离为子元素的宽度乘以i。
        }else{
            j=0;
            $("#myscrollbox_2").css("left",0);
            //超出可移动范围后点击不再移动。最前几个子元素被显示时i为0。
        }
    });






})();