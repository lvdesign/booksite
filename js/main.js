$(function() {

//perso
//effet aside-footer
$('.post-news').hide();
	$('#post-slide').click(function() {
	 	$('.post-news').toggle('slow');
		});
		
$('ul.tag-news').hide();
$('p.zero').hide();
	$('#tag-slide').click(function() {
	$('p.zero').toggle('slow');
	 	$('ul.tag-news').toggle('slow');
	 });
	 

 
	
});//endFunct
