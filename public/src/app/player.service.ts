import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
	player = {
		name: "default",
		clicks: 0,
		team: false
	}
  constructor() { }

  setPlayer(player){
  	this.player = player;
  }
  getPlayer(){
  	return this.player;
  }
  updateClicks(){
  	this.player.clicks++;
  }
}
