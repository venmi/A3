/**
 * @COPYRIGHT
 * @Title:
 * @Description:
 * @author wangyonggang qq:135274859
 * @date  2014/06/11
 * @version V1.0
 * Modification History:
 */
$(function(){
   $('#action .alb-li').on('click',function(){
       if($(this).find('.vb').length){
           var bigSrc=$(this).find('img').attr('bigSrc');
           showBigImg(bigSrc);
       }
   });
});
function showBigImg(src){
    var $fullBg = $('#fullBg');
    if(!$fullBg.length){
        createFullBg();
    }
    $fullBg = $('#fullBg');
    $fullBg.html('<div style="position: absolute;top: 50%;margin-top: -25%;left: 50%; margin-left: -40%; width: 80%;max-width: 100%; height: auto;text-align: center;"><img style="width: 100%" src="'+src+'" ><span style="position: absolute;right: -1em;top:-1em;width:2em;height:2em;background: url(images/closes.png) center center no-repeat;background-size: 100% 100%;" onclick="hideBigImg()"></span></div>').show();
}
function createFullBg(){
    $('<div id="fullBg">').css({
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        background:'rgba(0,0,0,.8)',
        'z-index':2000,
        display:'none',
        'max-width': '480px',
        margin:'0 auto'
    }).appendTo('body');
}
function hideBigImg(){
    $('#fullBg').hide();
}