$(function(){
	$("#btn1").click(function(){
		var appid = '2015063000000001';
		var key = '12345678';
		var salt = (new Date).getTime();
		var query = $("#txt1").val();
		// 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
		var val1= $("#drop1").val();
		if(val1==0){
			var from = 'auto';
		}else if(val1==1){
			var from = 'zh';
		}else if(val1==2){
			var from = 'en';
		}else{
			var from = 'jp';
		}
		var val2=$("#drop2").val();
		if(val2==1){
			var to = 'zh';
		}else if(val2==2){
			var to = 'en';
		}else{
			var to = 'jp';
		}
		var str1 = appid + query + salt +key;
		var sign = MD5(str1);	
		$.ajax({
		    url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
		    type: 'get',
		    dataType: 'jsonp',
		    data: {
		        q: query,
		        appid: appid,
		        salt: salt,
		        from: from,
		        to: to,
		        sign: sign
		    },
		    success: function (data) {
		        console.log(data);
//		        debugger;
		        $("#txt2").empty();
		        var len = data.trans_result.length;
		        txtContent=[]
		        for(var i=0;i<len;i++){
		        	var str = data.trans_result[i].dst;
		        	txtContent.push(str);
		        }
		        $("#txt2").text(txtContent);
		    } 
		});		
	})
})

$(function(){
	$("#btn2").click(function(){
		$("#txt1").val('');
		$("#txt2").html('');
	})	
})
	

