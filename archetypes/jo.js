const _0x5969ae=_0x1f04;(function(_0x41b2d4,_0x14a1fe){const _0x4200c2=_0x1f04,_0x496b6c=_0x41b2d4();while(!![]){try{const _0x1a296b=-parseInt(_0x4200c2(0x150))/0x1*(parseInt(_0x4200c2(0x132))/0x2)+parseInt(_0x4200c2(0x145))/0x3*(parseInt(_0x4200c2(0x133))/0x4)+parseInt(_0x4200c2(0x14e))/0x5*(-parseInt(_0x4200c2(0x149))/0x6)+parseInt(_0x4200c2(0x130))/0x7+parseInt(_0x4200c2(0x12f))/0x8+parseInt(_0x4200c2(0x155))/0x9*(-parseInt(_0x4200c2(0x13e))/0xa)+parseInt(_0x4200c2(0x14a))/0xb*(-parseInt(_0x4200c2(0x148))/0xc);if(_0x1a296b===_0x14a1fe)break;else _0x496b6c['push'](_0x496b6c['shift']());}catch(_0x57963f){_0x496b6c['push'](_0x496b6c['shift']());}}}(_0x5ab5,0xb31d9),document[_0x5969ae(0x135)](_0x5969ae(0x144),function(){const _0x3f9805=_0x5969ae,_0x3a644b=new Date();_0x3a644b[_0x3f9805(0x140)](_0x3a644b[_0x3f9805(0x152)]()+0x1),_0x3a644b[_0x3f9805(0x14d)](0x1e),document[_0x3f9805(0x154)](_0x3f9805(0x143))['textContent']=_0x2d681e(_0x3a644b);function _0x2d681e(_0x499124){const _0x5a5166=_0x3f9805,_0x5c8992={'hour':_0x5a5166(0x136),'minute':_0x5a5166(0x136),'hour12':!![]};return _0x499124['toLocaleTimeString'](undefined,_0x5c8992)[_0x5a5166(0x139)]();}}));const cameraButton=document['getElementById'](_0x5969ae(0x13c)),micButton=document[_0x5969ae(0x154)]('micButton'),userVideo=document[_0x5969ae(0x154)](_0x5969ae(0x14c)),userImage=document['getElementById'](_0x5969ae(0x137)),inactiveCameraButton=document[_0x5969ae(0x154)](_0x5969ae(0x134)),inactiveMicButton=document[_0x5969ae(0x154)](_0x5969ae(0x142));cameraButton[_0x5969ae(0x135)](_0x5969ae(0x131),deactivateCamera),micButton[_0x5969ae(0x135)]('click',deactivateMic),inactiveCameraButton[_0x5969ae(0x135)]('click',activateCamera),inactiveMicButton[_0x5969ae(0x135)](_0x5969ae(0x131),activateMic);let videoStream,audioStream;async function activateCamera(){const _0xf70f10=_0x5969ae;try{videoStream=await navigator[_0xf70f10(0x13b)][_0xf70f10(0x146)]({'video':!![]}),userVideo[_0xf70f10(0x13a)]=videoStream,userImage['classList'][_0xf70f10(0x14b)](_0xf70f10(0x13d)),userVideo[_0xf70f10(0x151)]['remove'](_0xf70f10(0x13d)),cameraButton['classList'][_0xf70f10(0x14f)](_0xf70f10(0x13d)),inactiveCameraButton[_0xf70f10(0x151)]['toggle'](_0xf70f10(0x13d));}catch(_0x1a424e){console[_0xf70f10(0x141)]('Error\x20accessing\x20the\x20camera:',_0x1a424e);}}function deactivateCamera(){const _0x37ee7=_0x5969ae;if(videoStream){let _0x25aea3=videoStream['getTracks']();_0x25aea3[_0x37ee7(0x153)](_0x32fb92=>_0x32fb92[_0x37ee7(0x13f)]()),userVideo[_0x37ee7(0x151)][_0x37ee7(0x14b)]('hidden'),userImage['classList']['remove']('hidden'),cameraButton['classList'][_0x37ee7(0x14f)](_0x37ee7(0x13d)),inactiveCameraButton[_0x37ee7(0x151)]['toggle'](_0x37ee7(0x13d));}}function _0x1f04(_0x468cac,_0x1e83b3){const _0x5ab569=_0x5ab5();return _0x1f04=function(_0x1f0469,_0x2538aa){_0x1f0469=_0x1f0469-0x12f;let _0xfcc73f=_0x5ab569[_0x1f0469];return _0xfcc73f;},_0x1f04(_0x468cac,_0x1e83b3);}async function activateMic(){const _0x30793a=_0x5969ae;try{audioStream=await navigator[_0x30793a(0x13b)]['getUserMedia']({'audio':!![]}),micButton[_0x30793a(0x151)][_0x30793a(0x14f)](_0x30793a(0x13d)),inactiveMicButton['classList'][_0x30793a(0x14f)](_0x30793a(0x13d));}catch(_0x38eb3f){console[_0x30793a(0x141)]('Error\x20accessing\x20the\x20microphone:',_0x38eb3f);}}function deactivateMic(){const _0x25c626=_0x5969ae;if(audioStream){let _0x5db36b=audioStream['getTracks']();_0x5db36b['forEach'](_0x3e3535=>_0x3e3535[_0x25c626(0x13f)]()),console[_0x25c626(0x147)](_0x25c626(0x138)),micButton['classList'][_0x25c626(0x14f)]('hidden'),inactiveMicButton['classList'][_0x25c626(0x14f)](_0x25c626(0x13d));}}activateCamera();function _0x5ab5(){const _0x12ecb5=['forEach','getElementById','8326386kbPGEM','5936776NCKVun','2492567AqkDaR','click','6JQwxVV','8UCCnsT','inactiveCameraButton','addEventListener','numeric','userImage','Microphone\x20access\x20revoked','toLowerCase','srcObject','mediaDevices','cameraButton','hidden','10ARcVmR','stop','setHours','error','inactiveMicButton','time-schedule','DOMContentLoaded','1971051BnxLvA','getUserMedia','log','12UHkeJh','352806fPJiMT','3135099ShNhyN','add','userVideo','setMinutes','25QFPFNy','toggle','58129AiPhiN','classList','getHours'];_0x5ab5=function(){return _0x12ecb5;};return _0x5ab5();}
