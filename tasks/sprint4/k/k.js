const readline = require('readline');
const fs = require('fs');

class InitData {
  constructor(stream = fs.createReadStream('input.txt')) {
    this._curLine = 0;
    this.n = 0;
    this.m = 0;
    this.metro = [];
    this.bus = [];
    this.stream = stream;
    this._readline = readline
      .createInterface({ input: stream })
      .on('line', (line) => this.set(line));
  }

  set(line) {
    if (this._curLine === 0) {
      this.n = Number(line);
    } else if (this._curLine > 0 && this._curLine < this.n + 1) {
      this.metro.push(line.split(' ').map(Number));
    } else if (this._curLine === this.n + 1) {
      this.m = Number(line);
    } else if (this._curLine > this.n + 1 && this._curLine < this.n + 2 + this.m) {
      this.bus.push(line.split(' ').map(Number));
    }

    this._curLine++;
  }
}

const MAX_DISTANCE = 400;
const SEGMENT_SIZE = 20;

function getSegment([x, y]) {
  return `${Math.floor(x / SEGMENT_SIZE)},${Math.floor(y / SEGMENT_SIZE)}`;
}

function getNumber(metroStations, busStops) {
  const stopsBySegment = {};
  let maxCount = 0;
  let maxSubwayIndex = 0;

  for (let i = 0; i < busStops.length; i++) {
    const segment = getSegment(busStops[i]);

    if (!stopsBySegment[segment]) {
      stopsBySegment[segment] = [];
    }
    stopsBySegment[segment].push(busStops[i]);
  }

  for (let index = 0; index < metroStations.length; index++) {
    const [segX, segY] = getSegment(metroStations[index]).split(',').map(Number);
    let count = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const segment = `${segX + i},${segY + j}`;

        if (stopsBySegment[segment]) {
          for (let k = 0; k < stopsBySegment[segment].length; k++) {
            const [sx, sy] = stopsBySegment[segment][k];
            const [mx, my] = metroStations[index];

            if ((mx - sx) ** 2 + (my - sy) ** 2 <= MAX_DISTANCE) {
              count += 1;
            }
          }
        }
      }
    }

    if (count > maxCount) {
      maxCount = count;
      maxSubwayIndex = index;
    }
  }

  return maxSubwayIndex + 1;
}

const initData = new InitData();
const solve = () => console.log(getNumber(initData.metro, initData.bus));
initData.stream.on('end', solve);
