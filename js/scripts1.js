/** ONLOAD SCRIPTS **/
onload = function(){

    // Site Variables
    siteTitle = document.getElementById("js-site-title")
    logo = document.getElementById("js-logo")
    menuBtnContainer = document.getElementById("js-menu-icon")
    menuBtn = document.getElementById("js-menu")
    siteNav = document.getElementById("js-nav")
    header = document.getElementById("js-header")

    // Toggle mobile menu
    menuBtn.onclick = function(){
        menuBtn.classList.toggle("open-nav")
        siteNav.classList.toggle("open-nav")
    }

    // Change header if scroll position > 50
    if(window.scrollY >= 50){
        changeHeaderScrollClasses("add")
    }

    // Change header when scrolling down page
    window.onscroll = checkHeaderState

    // SCHEDULE Page: Render Calendar
    if(window.location.pathname.split("/").pop() == "schedule.html"){
        renderCalendar(); 
        (window).onresize = function() {
            if (window.innerWidth < 768) {
                calendarMobile.render();           
            }
            else{
                calendarMobile.render();
                
            }
            
        }
    }

    // CONTACT Page: Form Validation
    if(window.location.pathname.split("/").pop() == "contact.html"){
        $('#contact-form').validate({
            errorContainer: '.form-errors-container',
            errorLabelContainer: '.form-errors-container',
            wrapper: 'li',
            rules: {
                fname: {
                    required: true
                },
                lname: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                fname: {
                    required: "First Name is required."
                },
                lname: {
                    required: "Last Name is required."
                },
                email: {
                    required: "Please enter a valid email."
                },
                message: {
                    required: "Message is required."
                }
            },
            submitHandler: function (form) {
                alert('Thank you, ' + $('#fname').val() +'. We have received your information and will contact you shortly.');
                return false;
            }
        });
    }
    
}

/** FUNCTIONS **/
// Changes site header color when scrolling
function checkHeaderState(){
    let y = window.scrollY
    if(y >= 50){
        changeHeaderScrollClasses("add")
    } else{
        changeHeaderScrollClasses("remove")
    }
}

function changeHeaderScrollClasses(method){
    if(method == "add"){
        logo.classList.add("site-header-scroll")
        siteTitle.classList.add("site-header-scroll")
        menuBtn.classList.add("site-header-scroll")
        menuBtnContainer.classList.add("site-header-scroll")
        header.classList.add("site-header-scroll")
        siteNav.classList.add("site-header-scroll")
    } else if(method == "remove"){
        logo.classList.remove("site-header-scroll")
        siteTitle.classList.remove("site-header-scroll")
        menuBtn.classList.remove("site-header-scroll")
        menuBtnContainer.classList.remove("site-header-scroll")
        header.classList.remove("site-header-scroll")
        siteNav.classList.remove("site-header-scroll")
    }
}

function renderCalendar(){
    let calendarEl = document.getElementById('calendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
		themeSystem: 'bootstrap',
		height: 'auto',
		fixedWeekCount: false,
        weekends: false,
        plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
		header: {
			left: 'title',
			right: 'prev,next,dayGridMonth,listMonth',

		},
		validRange: {
			start: '2019-09-09',
			end: '2020-05-08'
		},
		defaultDate: new Date().toISOString().slice(0, 10),
		navLinks: false,
		businessHours: false,
		editable: false,
		events: data,
		showNonCurrentDates: false,
		eventColor: 'transparent',
		defaultView: window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth',
		buttonText: {
			list: "List",
			month: "Month"
        },
    }, 
    );
    
 
	calendarMobile = new FullCalendar.Calendar(calendarEl, {
		themeSystem: 'bootstrap',
		height: 'auto',
		fixedWeekCount: false,
        weekends: false,
        plugins: ['list'],
		header: {
			left: 'title',
			right: 'prev,next',

		},
		validRange: {
			start: '2019-09-09',
			end: '2020-05-08'
		},
		defaultDate: new Date().toISOString().slice(0, 10),
		navLinks: false,
		businessHours: false,
		editable: false,
		events: data,
		showNonCurrentDates: false,
		eventColor: 'transparent',
		defaultView:  'listWeek',
    }, 
    );
     return calendar.render();
    
}
