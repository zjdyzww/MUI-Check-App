var common=(function($){var com={};var getAllDomBrothers=function(obj,arr){var arr=arr||[];var pre=obj.previousElementSibling;var nex=obj.nextElementSibling;if(obj&&!arr.Contains(obj)){arr.push(obj);}
if(pre&&pre.tagName==obj.tagName&&!arr.Contains(pre)){getAllDomBrothers(pre,arr);}
if(nex&&nex.tagName==obj.tagName&&!arr.Contains(nex)){getAllDomBrothers(nex,arr);}
return arr;};com.getAllDomBrothers=getAllDomBrothers;function myasync(list,cb_exec,cb_end){var each=function(_list,cb){if(_list.length<1){return cb_end&&cb_end();}
cb(_list.shift(),function(){each(list,cb);})}
each(list,cb_exec)};com.myasync=myasync;com.hashCode=function(str){var hash=0;if(!str||str.length==0)return hash.toString();for(i=0;i<str.length;i++){char=str.charCodeAt(i);hash=((hash<<5)-hash)+char;hash=hash&hash;}
return hash.toString();};com.getUid=function(){return Math.floor(Math.random()*100000000+10000000).toString();};com.GetDeviceInfo=function(){var device={IMEI:plus.device.imei,IMSI:'',Model:plus.device.model,Vendor:plus.device.vendor,UUID:plus.device.uuid,Screen:plus.screen.resolutionWidth*plus.screen.scale+'x'+plus.screen.resolutionHeight*plus.screen.scale+'',DPI:plus.screen.dpiX+'x'+plus.screen.dpiY,OS:new Object()};for(var i=0;i<plus.device.imsi.length;i++){device.IMSI+=plus.device.imsi[i];}
var types={};types[plus.networkinfo.CONNECTION_UNKNOW]='未知网络';types[plus.networkinfo.CONNECTION_NONE]='未连接网络';types[plus.networkinfo.CONNECTION_ETHERNET]='有线网络';types[plus.networkinfo.CONNECTION_WIFI]='WiFi网络';types[plus.networkinfo.CONNECTION_CELL2G]='2G蜂窝网络';types[plus.networkinfo.CONNECTION_CELL3G]='3G蜂窝网络';types[plus.networkinfo.CONNECTION_CELL4G]='4G蜂窝网络';device.NetworkInfo=types[plus.networkinfo.getCurrentType()];device.OS={Language:plus.os.language,Version:plus.os.version,Name:plus.os.name,Vendor:plus.os.vendor};return device;};com.createShortcut=function(name,iconUrl){if(mui.os.android){var Intent=plus.android.importClass("android.content.Intent");var BitmapFactory=plus.android.importClass("android.graphics.BitmapFactory");var main=plus.android.runtimeMainActivity();var shortcut=new Intent("com.android.launcher.action.INSTALL_SHORTCUT");shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME,name);shortcut.putExtra("duplicate",false);var iconPath=plus.io.convertLocalFileSystemURL(iconUrl);var bitmap=BitmapFactory.decodeFile(iconPath);shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON,bitmap);var action=new Intent(Intent.ACTION_MAIN);action.setComponent(main.getComponentName());shortcut.putExtra(Intent.EXTRA_SHORTCUT_INTENT,action);main.sendBroadcast(shortcut);}};com.bindQuit=function(){if(mui.os.android){var backButtonPress=0;mui.back=function(event){backButtonPress++;if(backButtonPress>1){plus.runtime.quit();}else{plus.nativeUI.toast('再按一次退出应用');}
setTimeout(function(){backButtonPress=0;},1000);return false;};}};com.androidMarket=function(pname){plus.runtime.openURL("market://details?id="+pname);};com.iosAppstore=function(url){plus.runtime.openURL("itms-apps://"+url);};return com;}(mui));