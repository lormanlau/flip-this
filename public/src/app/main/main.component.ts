import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";
import { PlayerService } from './../player.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	board = [];
	counter = 0;
	player = { team: false, clicks: 0 };
	socket = io('http://54.198.176.200');
	players = [];
  position = 0
  constructor(private _player:PlayerService, private route: Router) { }

  ngOnInit() {
  	this.player = this._player.getPlayer();
  	this.socket.emit('new-player', this.player);
    this.socket.on('get-position', function(data){
      this.position = data;
    }.bind(this));
  	this.socket.on('new-update', function (data) {
  		this.counter = data.counter;
  		this.board = data.board;
  	}.bind(this));
  	this.socket.on('update-players', function (data) {
  		this.players = data;
  	}.bind(this));
  	this.socket.on('red-wins', function () {
  		this.route.navigateByUrl('red');
  	}.bind(this));
  	this.socket.on('blue-wins', function () {
  		this.route.navigateByUrl('blue');
  	}.bind(this));
  }

  toggle(i){
  	if (this.board[i] != this.player.team){
  		if(this.player.team){
  			this.counter++;
  		} else {
  			this.counter--;
  		}
  		this.board[i] = this.player.team;
  	}
  	this.player.clicks++;
  	this.socket.emit('update-player', {player: this.player, position: this.position})
  	this.socket.emit('click-update', {board: this.board, counter: this.counter});
  }
}
