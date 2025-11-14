
function on_lot() {
	if(confirm('确认退出？'))
	{
		$.ajax({   
			type:"POST",   
			dataType:"json",   
			url:bse+"svr.php?act=lot",   
			timeout:100000,
			data:{act:"lot",act:"lot"},   
			success:function(data,textStatus){  
				if(data.suc=="1"){   
					window.location=bse;
				} 
				else {
					alert("失败");
				}   
			},  
			error:function(XMLHttpRequest,textStatus,errorThrown){   
				 if(textStatus=="timeout"){   
					alert("超时");
				 }   
			}
		});
	}
}

function req_mem()
{
	if(!$$$("mem_i"))
	{
		return;
	}
	$.ajax({   
		type:"POST",   
		dataType:"json",   
		url:bse+"svr.php?act=mem",   
		timeout:100000,
		data:{},   
		success:function(data,textStatus){  
			if(data.tye!="")
			{
				/* 此处可用于参照
				if($$$("mem_vew"))
				{
					if(parseInt($$$("mem_vew").name)<=parseInt(data.tye))
					{
						$$$("mem_vew").style.display="block";
					}
					else
					{
						$$$("mem_vew").style.display="block";
						switch(parseInt($$$("mem_vew").name))
						{
							case 1:$$$("mem_vew").innerHTML = "<div style='line-height:60px;color:#ff0000;'>阅读该文章需要具有\"普通会员\"或\"高级会员\"权限</div>";break;
							case 2:$$$("mem_vew").innerHTML = "<div style='line-height:60px;color:#ff0000;'>阅读该文章需要具有\"高级会员\"权限</div>";break;
						}
					}
				}
				*/
				if(parseInt(data.tye)>=0)
				{
					if($$$("mem_inf"))
					{
						$$$("mem_inf").innerHTML = "您好！"+data.nme+"（"+data.usr+"）";
					}
					$$$("mem_o").style.display="none";
					$$$("mem_i").style.display="block";
				}
			} 
			else
			{
			}   
		},  
		error:function(XMLHttpRequest,textStatus,errorThrown){   
			 if(textStatus=="timeout"){
			 }   
		}
	}); 
}