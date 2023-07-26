import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const startTime = Date.now();
const timesec = 300; // 5분

const board = Array(30).fill(null).map(() => Array(30).fill('⬛️'));

let turn = '🔴';

const isValid = (arr) => {
  if (arr.length !== 2) return false;
  if (arr[0] <= 0 || arr[0] > board.length) return false;
  if (arr[1] <= 0 || arr[1] > board.length) return false;
  if (isNaN(arr[0]) || isNaN(arr[1])) return false;
  return true;
};

const input = (query) => new Promise(resolve =>
  rl.question(`[${getTimeLeft(startTime)}s left] ${query}`, answer => {
    answer = answer.split(',').map(x => parseInt(x));
    if (isValid(answer) === false) {
      console.log('invalid input');
      resolve(input(query));
    }
    const [x, y] = answer;
    resolve([y - 1, x - 1]);
  })
);

const printBoard = () => {
  console.log(board.map(x => x.join('')).join('\n'));
};

const checkWin = (x, y, color) => {
  const dx = [1, -1, 0, 0, 1, -1, 1, -1];
  const dy = [0, 0, 1, -1, 1, -1, -1, 1];

  for (let dir = 0; dir < 8; dir++) {
    let count = 1;
    for (let i = 1; i < 5; i++) {
      const nx = x + i * dx[dir];
      const ny = y + i * dy[dir];
      if (nx < 0 || nx >= board.length || ny < 0 || ny >= board.length || board[nx][ny] !== color) {
        break;
      }
      count++;
    }

    if (count >= 5) {
      return true;
    }
  }

  return false;
};

const endGame = () => {
  console.log('Time\'s up!');
  rl.close();
  process.exit(); // 프로세스 종료
};

const getTimeLeft = (startTime) => {
  return parseInt(timesec - ((Date.now() - startTime) / 1000));
};

async function init() {
  setTimeout(endGame, 1000 * timesec); // 5분 후에 endGame 함수 실행
  while (true) {

    let [x, y] = await input(`input x, y: `);
    if (board[x][y] !== '⬛️') {
      console.log('already filled');
      continue;
    }
    board[x][y] = turn;
    turn = turn === '🔴' ? '🔵' : '🔴';
    printBoard();

    if (checkWin(x, y, board[x][y])) {
      console.log(`${board[x][y]} win!`);
      rl.close();
      process.exit(); // 프로세스 종료
    }
  }
}

init();
