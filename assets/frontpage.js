$(document).ready(function() {
	// the default form in ts.js for logout is not sufficient
	// for the frontpage so I've added so extra DOM elements
	ts.init(function(ts){
		$(".ts-logout .button").removeClass("button").addClass("logout-button");
		$(".ts-logout form").wrap($("<span>", {'class': 'logout-wrap'}));
		$("<a></a>", {'class': 'button', 'href': ts.getHost(ts.user.name), 'html': "Go to your space &raquo;"}).appendTo($(".logout-wrap"));
	},
	{ space: "" });

	// frontpage specific
	var fix_placeholder = function(i, e) {
		var p = $(e).attr('placeholder');
		if(p) {
			$(e).val(p);
		}
		$(e).focus(function() {
			var me = $(this);
			if(me.val() == me.attr('placeholder')) {
				me.val("");
			}
		}).blur(function() {
			var me = $(this);
			if(me.val() == "") {
				me.val(me.attr('placeholder'));
			}
		});
	};
	if(navigator.appName === "Microsoft Internet Explorer") {
		$("#article input.placeholder").each(fix_placeholder);
	}

	$(".loginlink").live('click', function(ev) {
		$(".register,.ts-openidregister,.ts-openidlogin").hide();
		$(".login").show();
		return false;
	});

	$(".showopenidlogin").live('click', function(ev) {
		$(".login").hide();
		$(".ts-openidlogin").show();
		return false;
	});
	$(".showopenidregister").live('click', function(ev) {
		$(".register").hide();
		$(".ts-openidregister").show();
		return false;
	});
});
