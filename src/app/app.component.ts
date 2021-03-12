import { Component } from "@angular/core";
import { PlayerService } from "./service/player.service";
import { Player } from "./model/player";
import { Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Hands";
  players: Observable<Player[]>;

  constructor(private playerService: PlayerService) {
    this.players = this.playerService.getPlayersWithCards();
  }
}
