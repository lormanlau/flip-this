import { Component, OnInit } from '@angular/core';
import { PlayerService } from './../player.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	player = {
		name: "",
		clicks: 0,
		team: false
	}
  constructor(private _player: PlayerService) { }

  ngOnInit() {
  }

  redTeam(){
  	this.player.team = true
  	this._player.setPlayer(this.player);
  }
  blueTeam(){
  	this._player.setPlayer(this.player);
  }


}
