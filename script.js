var _0xa4d5=["\x23\x63\x6C\x69\x63\x6B\x62\x74\x6E","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\u041F\u043E\u0440\u0430\x20\u043F\u043B\u0430\u0442\u0438\u0442\u044C\x20\u043D\u0430\u043B\u043E\u0433\u0438","\x64\x61\x74\x61","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x68\x31","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65","\x24","\u0422\u044B\x20\u043F\u043E\u0442\u0435\u0440\u044F\u043B\x20\x24","\x4B\x4E\x54\x52\x55\x7B\x4D\x6F\x6E\x65\x79\x21\uD83D\uDCB5\uD83D\uDCB5\uD83D\uDCB5\x7D","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x6C\x65\x66\x74","\x73\x74\x79\x6C\x65","\x70\x78","\x74\x6F\x70"];var score=0;step1= 20;step2= 100;finish= 576;nalog= 600;timer= 10;var sqr=document[_0xa4d5[1]](_0xa4d5[0]);function clickBtn(){if(score== nalog){alert(_0xa4d5[2]);score= nalog- finish- getRandom(10)};if(score== finish){score= score+ 2;document[_0xa4d5[6]](_0xa4d5[5])[0][_0xa4d5[4]][_0xa4d5[3]]= score+ _0xa4d5[7];update();setTimeout(function(){if(score== finish+ 2){score= finish+ 1;document[_0xa4d5[6]](_0xa4d5[5])[0][_0xa4d5[4]][_0xa4d5[3]]= score+ _0xa4d5[7];update()}},timer* 1000)}else {score= score+ 1;document[_0xa4d5[6]](_0xa4d5[5])[0][_0xa4d5[4]][_0xa4d5[3]]= score+ _0xa4d5[7];update()}}function update(){if(score== finish+ 1){setTimeout(function(){alert(_0xa4d5[8]);alert(_0xa4d5[9])},2000)};if(getRandom(3)== 0){moveLeft()}else {if(getRandom(3)== 1){moveTop()}else {if(getRandom(3)== 2){moveLeftTop()}}}}function getRandom(_0xbe5ax6){return Math[_0xa4d5[11]](Math[_0xa4d5[10]]()* _0xbe5ax6)}function moveLeft(){if(score>= step2){sqr[_0xa4d5[13]][_0xa4d5[12]]= getRandom(1440)+ _0xa4d5[14]}else {if(score>= step1){sqr[_0xa4d5[13]][_0xa4d5[12]]= 685+ getRandom(50)+ _0xa4d5[14]}}}function moveTop(){if(score>= step2){sqr[_0xa4d5[13]][_0xa4d5[15]]= getRandom(610)+ _0xa4d5[14]}else {if(score>= step1){sqr[_0xa4d5[13]][_0xa4d5[15]]= 325+ getRandom(50)+ _0xa4d5[14]}}}function moveLeftTop(){if(score>= step2){sqr[_0xa4d5[13]][_0xa4d5[12]]= getRandom(1440)+ _0xa4d5[14];sqr[_0xa4d5[13]][_0xa4d5[15]]= getRandom(610)+ _0xa4d5[14]}else {if(score>= step1){sqr[_0xa4d5[13]][_0xa4d5[12]]= 685+ getRandom(50)+ _0xa4d5[14];sqr[_0xa4d5[13]][_0xa4d5[15]]= 325+ getRandom(50)+ _0xa4d5[14]}}}
