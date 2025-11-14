var bse;
function init(){
	DD_belatedPNG.fix('*');
	var es=document.getElementsByTagName("a");
	var len=es.length;
	for(var i=0;i<len;i++){
		es[i].onfocus=function(){this.blur();}
	}
	try 
	{  
		if(typeof(eval("req_mem"))=="function")  
		{
			req_mem();
		}
	}catch(e)
	{
	}
}
function $$$(id){
	return document.getElementById(id)
}
function getTop(e){ 
	var offset=e.offsetTop; 
	if(e.offsetParent!=null) offset+=getTop(e.offsetParent); 
	return offset; 
}
function getLeft(e){ 
	var offset=e.offsetLeft; 
	if(e.offsetParent!=null) offset+=getLeft(e.offsetParent); 
	return offset; 
} 
function mle(e, handler) {   
	if (e.type != 'mouseout' && e.type != 'mouseover') return false;   
	var reltg = e.relatedTarget ? e.relatedTarget : e.type == 'mouseout' ? e.toElement : e.fromElement;   
	while (reltg && reltg != handler)reltg=reltg.parentNode;   
	return (reltg != handler);   
}
function on_link(url){ 
	if(url!=""){
		var vra=document.createElement('a'); 
		vra.target='_blank'; 
		vra.href=url; 
		document.body.appendChild(vra); 
		vra.click(); 
	}
}
var LittleUrl = {  
   // public method for url encoding  
   encode : function (string) {  
       return escape(this._utf8_encode(string));  
   },  
   // public method for url decoding  
   decode : function (string) {  
       return this._utf8_decode(unescape(string));  
   },  
    // private method for UTF-8 encoding  
    _utf8_encode : function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
   
            var c = string.charCodeAt(n);  
   
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            }  
            else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
            else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  
   
        }  
   
        return utftext;  
    },  
   
    // private method for UTF-8 decoding  
    _utf8_decode : function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
   
        while ( i < utftext.length ) {  
   
            c = utftext.charCodeAt(i);  
   
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            }  
            else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            }  
            else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
} 
function on_res(e,t,p)
{
	var s = LittleUrl.encode(document.getElementById(e).value);
	if(s!=""){window.location=bse+"res.php?res_s="+s+"&res_t="+t+"&res_p="+p;}
}			
function on_font(v) {
	document.getElementById("coc").style.fontSize = v+"px";
}
function on_sch(b,i,t)
{
	t = t=="" ? $$$("sch_t").value : t;
	window.location=b+"res.php?act=s&sch_i="+i+"&sch_t="+t;
}
function sdot(p, c, h) {
	for(i=0; i<c; i++){
		if($$$(p+"_l_"+i) && $$$(p+"_c_"+i) && $$$(p+"_l_"+i).offsetHeight <= h){
			$$$(p+"_c_"+i).innerHTML="&nbsp;";
		}
	}
}
var getElementsByName = function(tag, name){
	var returns = document.getElementsByName(name);
	if(returns.length > 0) return returns;
	 returns = new Array();
	var e = document.getElementsByTagName(tag);
	for(var i = 0; i < e.length; i++){
		if(e[i].getAttribute("name") == name){
			 returns[returns.length] = e[i];
		 }
	 }
	return returns;
};
function getcookie(nme)
{
	var cookief=false;
	var start=0;
	var end=0;
	var cookiestr=document.cookie;
	var i=0;
	while(i<=cookiestr.length)
	{
		start=i;
		end=start+nme.length;
		if(cookiestr.substring(start,end)==nme)
		{
			cookief=true;
			break;
		}
		i++;
	}
	if(cookief)
	{
		start=end+1;
		end=cookiestr.length;
		return unescape(cookiestr.substring(start,end)).split(";")[0];
	}
	return "";
}
function setcookie(nme,value)
{
	var exp=new Date();
	exp.setYear(exp.getYear()+1);
	document.cookie=nme+"="+escape(value)+";expires="+exp.toGMTString();
}

function odr_add(v) {
	$.ajax({   
		type:"POST",   
		dataType:"json",   
		url:bse+"svr.php?act=odr-add",   
		timeout:100000,
		data:{v:v},
		success:function(data,textStatus){
		},  
		error:function(XMLHttpRequest,textStatus,errorThrown){
		}
	});
}
function odr_del(v) {
	$.ajax({   
		type:"POST",   
		dataType:"json",   
		url:bse+"svr.php?act=odr-del",   
		timeout:100000,
		data:{v:v},
		success:function(data,textStatus){
		},  
		error:function(XMLHttpRequest,textStatus,errorThrown){
		}
	});
}

function odr_div(v,e)
{
	if(e.className=="odr_add")
	{
		e.className="odr_del";
		odr_add(v);
	}
	else
	{
		e.className="odr_add";
		odr_del(v);
	}
}

function odr_chk(v,e)
{
	$.ajax({   
		type:"POST",   
		dataType:"json",   
		url:bse+"svr.php?act=odr-chk",   
		timeout:100000,
		data:{v:v},
		success:function(data,textStatus){
			if(data.suc=="1"){   
				e.className="odr_del";
			}				
			else {
				e.className="odr_add";
			} 
		},  
		error:function(XMLHttpRequest,textStatus,errorThrown){
		}
	});
}
function odr_cb(e)
{
	var v=e.value;
	if(e.checked)
	{
		odr_add(v);
	}
	else
	{
		odr_del(v);
	}
}
function odr_sav()
{
	var v="";
	var ids = getElementsByName("input", "cb");  		 
	for (var i = 0; i < ids.length; i++)        
	{       
		if(ids[i].checked)
		{
			v=v+ids[i].value+",";
		}
	}
	document.form_main.tit.value = v;
}

function chk_eml(s)
{
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(!myreg.test(s))
	{
        return false;
    }
	return true;
}