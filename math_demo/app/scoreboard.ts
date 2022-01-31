/// <reference path="result.ts" />

export class Scoreboard {

    private results: Result[] = [];

    addResult(newResult: Result): void {  // type for newResult comes from Result interface
        this.results.push(newResult);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        for (let index = 0; index < this.results.length; index++) {
            const result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ' : ' + result.score + '/' + result.problemCount + ' correct for factor' + result.factor;
            output += '</h4>';
        }
        const scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output; // replace between the div tags of id 'scores'
    }
}
