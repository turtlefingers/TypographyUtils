function grid(callback=function(){},gap=50){
  for(let y=0; y<height; y+=gap){
    for(let x=0; x<width; x+=gap){
      callback({x,y});
    }
  }
}

function gridTriangle(callback=function(){}, gap = 50){
  const verticalGap = Math.sqrt(3) / 2 * gap;
  
  for (let y = 0; y <= height; y += verticalGap) {
    for (let x = 0; x <= width; x += gap) {
      // 짝수 줄과 홀수 줄의 X 좌표 오프셋
      const offsetX = (Math.floor(y / verticalGap) % 2 === 0) ? 0 : gap / 2;
      callback({x:x + offsetX, y});
    }
  }
};


function  chain(callback=function(){}, mouseX, mouseY, arr, gap=50){
  if(arr.length==0)callback({x:mouseX,y:mouseY});
  else{
    const last = arr[arr.length-1];

    const d = Math.sqrt(Math.pow(mouseX-last.x,2)+Math.pow(mouseY-last.y,2));

    if(d>=gap){
      const ratio = gap/d;
      const mx = (mouseX-last.x)*ratio;
      const my = (mouseY-last.y)*ratio;
      callback({x:last.x+mx,y:last.y+my});
    }
  }
}

function snap(value, size){
  return Math.floor(value / size) * size + size/2;
}