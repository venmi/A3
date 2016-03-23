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
   $('#sport_pic .alb-li').on('click',function(){
       if($(this).find('.vb').length){
           var bigSrc=$(this).find('img').attr('bigSrc');
           showBigImg(bigSrc);
       }
   });
   $('.tabcont>div').on('click',function(){
       var $this =$(this);
       if($this.is('.faudi')){
           if($this.hasClass('unselect')){
               $this.toggleClass('select unselect');
               $this.siblings().toggleClass('select unselect');
               $this.parent('.tabcont').toggleClass('select');
               $('#limousine').hide().removeClass('show');
               $('#sportback').show().addClass('show');
           }

       }
       if($this.is('.fhy')){
           if($this.hasClass('unselect')){
               $this.toggleClass('select unselect');
               $this.siblings().toggleClass('select unselect');
               $this.parent('.tabcont').toggleClass('select');
               $('#sportback').hide().removeClass('show');
               $('#limousine').show().addClass('show');
           }

       }
   })
});
function showBigImg(src){
    var $fullBg = $('#fullBg');
    if(!$fullBg.length){
        createFullBg();
    }
    $fullBg = $('#fullBg');
    $fullBg.html('<div style="position: absolute;top: 50%;margin-top: -25%;left: 50%; margin-left: -40%; width: 80%;max-width: 100%; height: auto;text-align: center;"><img style="width: 100%" src="'+src+'" ><span style="position: absolute;right: -1em;top:-1em;width:2em;height:2em;background: url(../images/closes.png) center center no-repeat;background-size: 100% 100%;" onclick="hideBigImg()"></span></div>').show();
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



var sporth3 = document.getElementsByClassName('sporth3');
var sportdl = document.getElementsByClassName('sport_dl');
var spackright = document.getElementsByClassName('spack_right');
   for (var i = 0; i < sporth3.length; i++) {
	sporth3[i].index = i;
	sporth3[i].onclick = function () {
	   if (sportdl[this.index].style.display == 'none') {
		
			 for(var j=0;j<sporth3.length;j++){
			  sportdl[j].style.display="none";
			  spackright[j].src="images/spack_right.png";
			 }
			 sportdl[this.index].style.display="block";
		     spackright[this.index].src="images/spack_bottom.png";
		} else {
			sportdl[this.index].style.display = 'none';
			spackright[this.index].src="images/spack_right.png";
		}
	}
}
	






