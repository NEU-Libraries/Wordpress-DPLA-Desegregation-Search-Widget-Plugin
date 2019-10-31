var DPLAWidgetConfig = {
		css_href: 'https://liblab.neu.edu/dpla-widget/desegregation/dpla-deseg-search-widget.css',
	    dpla_logo: 'https://liblab.neu.edu/dpla-widget/desegregation/bps_deseg_proj.png'	
};


;(window.onload = function() {
    var css = document.createElement('link');
    css.href = DPLAWidgetConfig.css_href;
    css.type = 'text/css';
    css.rel = 'stylesheet';

    var headTag = document.getElementsByTagName('head')[0];
    headTag.appendChild(css);

    var widgetImg = document.createElement('img');
    widgetImg.src = DPLAWidgetConfig.dpla_logo;
    widgetImg.title = 'Search the BPS Desegregation Collection!';
    widgetImg.alt = 'Search the BPS Desegreation Collection!';

    var form = document.createElement('form');
    form.method = 'get';
    form.action = 'https://dp.la/search';
    form.name = 'dpla_search_widget';
    form.target = '_blank';

    var widgetInputDiv = document.createElement('div');
    widgetInputDiv.id = 'dpla-form-input';

    var search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search ';
    search.name = 'q';

    var param = document.createElement('input');
    param.type = 'hidden';
    param.name = 'q';
    param.value = '';

    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Search';

    form.appendChild(widgetImg);
    form.appendChild(search);
    form.appendChild(param);
    form.appendChild(submit);

    var search_div = document.getElementById("dpla_search_widget");
    if (search_div != null){
      search_div.appendChild(form);
    }
    form.onsubmit=function(e){
      e.preventDefault();
     //param.value = search.value + " (school OR schools OR education) AND (integration OR desegregation) AND Boston";
	  param.value = search.value + " integration school* Boston ";
      form.submit();
      return false;
    };

})();
