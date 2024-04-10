const init = () => {
  //フラグ
	over        = false;
	loopStop    = false;
	stageClear  = false;
	currentLife = maxLife;
	hit         = false;
	//スコア
	count_b     = 0;
	count_a     = 0;
	score       = 0;
	//ロープ
	rope_x = 0;
  rope_y = SCREEN_H/2 - BLOCK_H*2;
	//サル
	saru_t=saruType[0][0];
	saru_x=START_X;
	saru_y=START_Y;
	dir_r =true;
	//アイコン
	icon_t=iconType[0];
	//ハート
	heart_1t = heartType[1];
	heart_2t = heartType[1];
	heart_3t = heartType[1];
	heart_4t = heartType[1];
	heart_5t = heartType[1];
	
	obj.splice(0);/*ドロップオブジェクトのクリア*/
	
	loop1 = setInterval(gameLoop, gameSpeed);
	loop2 = setInterval( function(){ obj.push( new Obj());} , repopTime );
	loop3 = setInterval( function(){
		for( let i=0 , len=obj.length ; i<len ; i++ )
		obj[i].moveObj();
	},dropSpeed);
};

export default init;
