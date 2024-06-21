const grid = (callback=()=>{},gap=50) => {
  for(let y=0; y<height; y+=gap){
    for(let x=0; x<width; x+=gap){
      callback(x,y);
    }
  }
}

const gridTriangle = (callback = () => {}, gap = 50) => {
  for (let y = 0; y <height; y += gap) {
    for (let x = 0; x <width; x += gap) {
      // 짝수 줄과 홀수 줄의 X 좌표 오프셋
      const offsetX = (y / gap) % 2 === 0 ? 0 : gap / 2;
      callback(x + offsetX, y);
    }
  }
};

const chain = (callback=()=>{},mouseX,mouseY,arr,gap=50) => {
  if(arr.length==0)callback(mouseX,mouseY);
  else{
    const last = arr[arr.length-1];

    const d = Math.sqrt(Math.pow(mouseX-last.x,2)+Math.pow(mouseY-last.y,2));

    if(d>=gap){
      const ratio = gap/d;
      const mx = (mouseX-last.x)*ratio;
      const my = (mouseY-last.y)*ratio;
      callback(last.x+mx,last.y+my);
    }
  }
}

