(function() {
	var look = document.getElementById('look');
	var look_jquery = document.getElementById('look_jquery');
	var look_base = document.getElementById('look_base');
	var look_adaptive = document.getElementById('look_adaptive');
	var look_btn_gen = document.getElementById('look_btn_gen');
	var look_css = document.getElementById('look_css');
	var looked = document.getElementsByClassName('looked');
	var course_detail_wrap = document.getElementsByClassName('course_detail_wrap');
	var wrap_courses = document.getElementsByClassName('wrap_courses');
	var course_detail = document.getElementsByClassName('course_detail');
	var name_course = document.getElementsByClassName('name_course');
	var complete = document.getElementsByClassName('complete');
	//var conteiner = document.getElementsByClassName('conteiner');
	//var img_course = document.getElementsByClassName('img_course');
	
   
	
	

	var j = 0;

	look.onclick = function(){
		looked[0].style.background = "#e8f1dc";
		course_detail_wrap[0].style.background = "#ecf4e3";
		name_course[0].style.color = "#6f7765";
		wrap_courses[0].classList.add("delay");
		j++;
		if (j>5) {
			complete[0].style.display = "block";
		}
	};

	look_jquery.onclick = function(){
		looked[1].style.background = "#e8f1dc";
		course_detail_wrap[1].style.background = "#ecf4e3";
		name_course[1].style.color = "#6f7765";
		wrap_courses[1].classList.add("delay");
		j++;
		if (j>5) {
			complete[0].style.display = "block";
		}
	};

	look_base.onclick = function(){
		looked[2].style.background = "#e8f1dc";
		course_detail_wrap[2].style.background = "#ecf4e3";
		name_course[2].style.color = "#6f7765";
		wrap_courses[2].classList.add("delay");
		j++;
		if (j>5) {
			complete[0].style.display = "block";
		}
	};

	look_adaptive.onclick = function(){
		looked[3].style.background = "#e8f1dc";
		course_detail_wrap[3].style.background = "#ecf4e3";
		name_course[3].style.color = "#6f7765";
		wrap_courses[3].classList.add("delay");
		j++;
		if (j>5) {
			complete[0].style.display = "block";
		}
	};

	look_btn_gen.onclick = function(){
		looked[4].style.background = "#e8f1dc";
		course_detail_wrap[4].style.background = "#ecf4e3";
		name_course[4].style.color = "#6f7765";
		wrap_courses[4].classList.add("delay");
		j++;
		if (j>5) {
			complete[0].style.display = "block";
		}
	};

	look_css.onclick = function(){
		looked[5].style.background = "#e8f1dc";
		course_detail_wrap[5].style.background = "#ecf4e3";
		name_course[5].style.color = "#6f7765";
		wrap_courses[5].classList.add("delay");
		j++;
		if (j>5) {
			complete[0].style.display = "block";
		}
	};
	
		
			if (wrap_courses[0].offsetHeight > wrap_courses[1].offsetHeight && wrap_courses[2].offsetHeight && wrap_courses[3].offsetHeight && wrap_courses[4].offsetHeight && wrap_courses[5].offsetHeight ) {
				wrap_courses[1].style.height = wrap_courses[0].offsetHeight + 22 +"px",
				wrap_courses[2].style.height = wrap_courses[0].offsetHeight + 22 +"px",
				wrap_courses[3].style.height = wrap_courses[0].offsetHeight + 22 +"px",
				wrap_courses[4].style.height = wrap_courses[0].offsetHeight + 22 +"px",
				wrap_courses[5].style.height = wrap_courses[0].offsetHeight + 22 +"px";
			} else if (wrap_courses[1].offsetHeight > wrap_courses[0].offsetHeight && wrap_courses[2].offsetHeight && wrap_courses[3].offsetHeight && wrap_courses[4].offsetHeight && wrap_courses[5].offsetHeight ) {
				wrap_courses[0].style.height = wrap_courses[1].offsetHeight + 22 +"px",
				wrap_courses[2].style.height = wrap_courses[1].offsetHeight + 22 +"px",
				wrap_courses[3].style.height = wrap_courses[1].offsetHeight + 22 +"px",
				wrap_courses[4].style.height = wrap_courses[1].offsetHeight + 22 +"px",
				wrap_courses[5].style.height = wrap_courses[1].offsetHeight + 22 +"px";
			} else if (wrap_courses[2].offsetHeight > wrap_courses[0].offsetHeight && wrap_courses[1].offsetHeight && wrap_courses[3].offsetHeight && wrap_courses[4].offsetHeight && wrap_courses[5].offsetHeight ) {
				wrap_courses[0].style.height = wrap_courses[2].offsetHeight + 22 +"px",
				wrap_courses[1].style.height = wrap_courses[2].offsetHeight + 22 +"px",
				wrap_courses[3].style.height = wrap_courses[2].offsetHeight + 22 +"px",
				wrap_courses[4].style.height = wrap_courses[2].offsetHeight + 22 +"px",
				wrap_courses[5].style.height = wrap_courses[2].offsetHeight + 22 +"px";
			} else if (wrap_courses[3].offsetHeight > wrap_courses[0].offsetHeight && wrap_courses[1].offsetHeight && wrap_courses[2].offsetHeight && wrap_courses[4].offsetHeight && wrap_courses[5].offsetHeight ) {
				wrap_courses[0].style.height = wrap_courses[3].offsetHeight + 22 +"px",
				wrap_courses[1].style.height = wrap_courses[3].offsetHeight + 22 +"px",
				wrap_courses[2].style.height = wrap_courses[3].offsetHeight + 22 +"px",
				wrap_courses[4].style.height = wrap_courses[3].offsetHeight + 22 +"px",
				wrap_courses[5].style.height = wrap_courses[3].offsetHeight + 22 +"px";
			} else if (wrap_courses[4].offsetHeight > wrap_courses[0].offsetHeight && wrap_courses[1].offsetHeight && wrap_courses[2].offsetHeight && wrap_courses[3].offsetHeight && wrap_courses[5].offsetHeight ) {
				wrap_courses[0].style.height = wrap_courses[4].offsetHeight + 22 +"px",
				wrap_courses[1].style.height = wrap_courses[4].offsetHeight + 22 +"px",
				wrap_courses[2].style.height = wrap_courses[4].offsetHeight + 22 +"px",
				wrap_courses[3].style.height = wrap_courses[4].offsetHeight + 22 +"px",
				wrap_courses[5].style.height = wrap_courses[4].offsetHeight + 22 +"px";
			} else if (wrap_courses[5].offsetHeight > wrap_courses[0].offsetHeight && wrap_courses[1].offsetHeight && wrap_courses[2].offsetHeight && wrap_courses[3].offsetHeight && wrap_courses[4].offsetHeight ) {
				wrap_courses[0].style.height = wrap_courses[5].offsetHeight + 22 +"px",
				wrap_courses[1].style.height = wrap_courses[5].offsetHeight + 22 +"px",
				wrap_courses[2].style.height = wrap_courses[5].offsetHeight + 22 +"px",
				wrap_courses[3].style.height = wrap_courses[5].offsetHeight + 22 +"px",
				wrap_courses[4].style.height = wrap_courses[5].offsetHeight + 22 +"px";
			}
		

		

		
})();
 
