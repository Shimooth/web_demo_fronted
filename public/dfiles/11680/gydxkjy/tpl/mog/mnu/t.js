var mnu_rem;
var ind_num;
var mnu_arr=[]; 

//p1:now p2:self
function mnu_shw(n,s) {
	if(mnu_arr[s] == 1)
	{
		return;
	}
	mnu_arr[s] = 1;
	setTimeout("mnu_shw_do("+n+", "+s+")", 100);
}

function mnu_shw_do(n, s) {
	if(mnu_arr[s] == 0)
	{
		return;
	}
	
	var e = $$$("mnu_"+s);
	var p = $$$("mnu_sub");
	if(e) 
	{
		//var src_o = e.src;
		//e.src= src_o.replace("_n.jpg", "_h.jpg");
		e.style.backgroundColor="#11a1ee";
		if(mnu_rem!=1 || s!=n || s==ind_num)
		{
			e.style.backgroundColor="#11a1ee";
		}
		var sub = $$$("mnu_sub_"+s);
		if(sub)
		{
			sub.style.top = (getTop(e)-getTop(p)+52)+"px";
			sub.style.left = (getLeft(e)-getLeft(p)-0)+"px";
			/*
			if(s==3)
			{
				sub.style.left = ((getLeft(e)-getLeft(p))-115)+"px";
			}
			if(s==8)
			{
				sub.style.left = ((getLeft(e)-getLeft(p))-50)+"px";
			}
			*/
			setTimeout("mnu_sub_shw("+s+")", 100);
			//ss(sub);
		}
	}
}

function mnu_hid(n, s) {
	if(mnu_arr[s] == 0)
	{
		return;
	}
	mnu_arr[s] = 0;
	setTimeout("mnu_hid_do("+n+", "+s+")", 100);
}

function mnu_hid_do(n, s) {
	if(mnu_arr[s] == 1)
	{
		return;
	}
	
	var e = $$$("mnu_"+s);
	if(e)
	{
		if(mnu_rem!=1 || s!=n || s==ind_num)
		{
			e.style.backgroundColor="";
		}
		var sub = $$$("mnu_sub_"+s);
		if(sub)
		{
			setTimeout("mnu_sub_hid("+s+")", 100);
		}
	}
}

function mnu_sub_shw(s)
{
	var e = $$$("mnu_sub_"+s);
	if(e.innerHTML!="")
	{
		e.style.display="block";
	}
}

function mnu_sub_hid(s)
{
	var e = $$$("mnu_sub_"+s);
	e.style.display = "none";
}