jQuery(document).ready(function(a){jQuery().tabs&&a(".aq_block_tabs").tabs({show:!0}),a(".aq_block_toggle .tab-head, .aq_block_toggle .arrow").each(function(){var e=a(this).parent();a(this).click(function(){return e.find(".tab-body").slideToggle(),!1})}),a(document).on("click",".aq_block_accordion_wrapper .tab-head, .aq_block_accordion_wrapper .arrow",function(){var e=a(this);return e.addClass("clicked"),e.parents(".aq_block_accordion_wrapper").find(".tab-body").each(function(e,c){a(c).is(":visible")&&0==(a(c).prev().hasClass("clicked")||a(c).prev().prev().hasClass("clicked"))&&a(c).slideUp()}),e.parent().children(".tab-body").slideToggle(),e.removeClass("clicked"),!1})});
//# sourceMappingURL=aqpb-view8f02-dist.js.map