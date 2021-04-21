var score = 0;
step1=20;
step2=50;
var sqr=document.querySelector('#clickbtn');
function clickBtn() {
	score =score+1;
  document.getElementsByTagName("h1")[0].firstChild.data = score + '$';
  update();
}
function update()
{
	if(getRandom(3)==0)
	{
		moveLeft();
	}
	else if(getRandom(3)==1)
	{
		moveTop();
	}
	else if(getRandom(3)==2)
	{
		moveLeftTop();
	}
}
function getRandom(max)
{
	return Math.floor(Math.random()*max);
}
function moveLeft()
{
	if(score>=step2)
	{
		sqr.style.left=getRandom(1440)+'px';
	}
	else if(score>=step1)
	{
		sqr.style.left=685+getRandom(50)+'px';
	}
}
function moveTop()
{
	if(score>=step2)
	{
		sqr.style.top=getRandom(610)+'px';
	}
	else if(score>=step1)
	{
		sqr.style.top=125+getRandom(50)+'px';
	}
}
function moveLeftTop()
{
	if(score>=step2)
	{
		sqr.style.left=getRandom(1440)+'px';
		sqr.style.top=getRandom(610)+'px';
	}
	else if(score>=step1)
	{
		sqr.style.left=685+getRandom(50)+'px';
		sqr.style.top=125+getRandom(50)+'px';
	}
}