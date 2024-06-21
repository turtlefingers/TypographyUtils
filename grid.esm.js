export const grid = (callback=()=>{},gap=50) => {
  for(let y=0; y<=height; y+=gap){
    for(let x=0; x<=width; x+=gap){
      callback(x,y);
    }
  }
}