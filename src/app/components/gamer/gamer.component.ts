import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/case';

@Component({
  selector: 'app-gamer',
  templateUrl: './gamer.component.html',
  styleUrls: ['./gamer.component.css']
})
export class GamerComponent implements OnInit {
  playerOneIsPlaying: boolean = true;
  cases: any = [];
  datePlaying!: Date | undefined;
  validatedCases!: number;
  playerOneName!: string;
  playerTwoName!: string;
  playersNameSave: boolean = false;
  resultsCase: any = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],

    [3, 5, 7],
    [1, 5, 9],
  ];

  playerOneNumbers: number[] = [];
  playerTwoNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initGame();
  }

  nameSave() {
    this.playersNameSave = true;
  }

  changeGamer() {
    this.playerOneIsPlaying = !this.playerOneIsPlaying;
  }

  chooseCase(caseToChange: Case): void {
    if (!this.datePlaying) {
      this.datePlaying = new Date();
    }

    const value = this.playerOneIsPlaying ? 'X' : 'O';
    caseToChange.setValue(value);

    const playerNumbers = this.playerOneIsPlaying
      ? this.playerOneNumbers
      : this.playerTwoNumbers
      ;

    playerNumbers.push(caseToChange.id);

    const playerName = this.playerOneIsPlaying
      ? this.playerOneName
      : this.playerTwoName
      ;

    this.checkResult(playerNumbers, playerName);

    this.validatedCases = this.cases.filter((caseToFilter: Case) => caseToFilter.value).length;

    this.changeGamer();
  }

  initGame() {
    // initialisation des cases
    this.cases = [];

    for (let i = 0; i < 9; i++) {
      const nCase = new Case();
      nCase.setValue('');
      nCase.setId(i + 1);
      this.cases.push(nCase);
    }
  }

  checkResult(playerNumbers: number[], playerName: string) {
    let win = false;

    this.resultsCase.forEach((resultCase: number[]) => {
      const winResult = resultCase.every(number => playerNumbers.includes(number));

      if (winResult) {
        win = true;
      }
    });

    if (win) {
      setTimeout(() => {
        alert(`Vous avez gagné ${playerName}!`);

        this.clearAll();
      }, 300);
    }
  }

  clearAll() {
    this.cases.forEach((caseToEmpty: Case) => caseToEmpty.setValue(''));

    this.playerOneName = '';
    this.playerTwoName = '';

    this.playersNameSave = false;

    this.playerOneNumbers = [];
    this.playerTwoNumbers = [];

    this.datePlaying = undefined;

    this.playerOneIsPlaying = true;

    this.validatedCases = 0;
  }
}
