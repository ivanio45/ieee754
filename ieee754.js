let fs=require('fs')
let num=parseFloat(fs.readFileSync("text.txt").toString());

let sign;
if(num>=0){
sign = "0";
}
else sign = "1";

num = Math.abs(num);
num=num.toString(2);
let a=num.indexOf(".");

if(a==1){
	exp=1-num.indexOf("1")+127;
	}
else if(a!=-1){
	exp=num.indexOf(".")-1+127;
	}
else{
	exp=num.length-1+127;
	}
exp=exp.toString(2);
while(exp.length!=8){
	exp="0"+exp
}


let mant="";
let i=0;
while(num[i]!=1){
	i+=1;
}
for(let j=i+1;j<num.length;j++){
	if(num[j]!="."){
		mant+=num[j];
	}
	if(mant.length==23){
		break;
	}
}
mant=mant.padEnd(23, '0')

let res=sign+" "+exp+" "+mant;

console.log(res)