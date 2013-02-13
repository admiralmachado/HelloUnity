#pragma strict

var gravity : float = -9.8;
var velo : float;
function Start () {
	Debug.Log("Here is a script");
	velo = 0;
}

function Update () {
	velo += gravity * Time.deltaTime;
	transform.position.y += velo * Time.deltaTime;
	if (transform.position.y <= 0 && velo < 0) {
		velo *= -1;
	}
}