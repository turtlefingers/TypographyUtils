const grid = (callback=()=>{},gap=50) => {
  for(let y=0; y<=height; y+=gap){
    for(let x=0; x<=width; x+=gap){
      callback(x,y);
    }
  }
}

const gridTriangle = (callback = () => {}, gap = 50) => {
  for (let y = 0; y <= height; y += gap) {
    for (let x = 0; x <= width; x += gap) {
      // 짝수 줄과 홀수 줄의 X 좌표 오프셋
      const offsetX = (y / gap) % 2 === 0 ? 0 : gap / 2;
      callback(x + offsetX, y);
    }
  }
};