let shps;
let shapecount = 202;
let purpcolors = ['#735cdd','#9000b3','#7e007b'];
let bluecolors = ['#004fff','#3d5e6d','#5296a5','#82ddf0'] ;// 272635
let pinks = ['#fe3d90','#fd79a0','#fcb6b0'];
let earths = ['#da7635','#ebb47b','#fbf2c0'];
let neons = ['#04e762','#f5b700','#dc0073','#00bf8'];
let slate = ['#4a5043','#b9d8c2','#ffcb47','#9ac2c9','#8aa1b1'];
let cfs =[1.01,1,.99,1,1.05];
let curveit;
function setup() {
  // scolors=purpcolors;
  createCanvas(400, 700);
  background("#272635");
  let scolors=random([bluecolors,purpcolors,pinks,earths,neons,slate]);
  shapecount=random([69,100,300,1400]);
  curveit=random([false,true]);
  shps = [];

  let s1 = 15;
  let s2=160;
  let s3=4;
  let crunfactor = random(cfs);
  let ppA = createVector(random(20,100),random(20,100));
  let ppB = createVector(random([80,width/2]),random([20,height/2]));
  for (let i=0;i<shapecount;i++){
    let points = [ppA,ppB];


    let pps = calcNewPoints(points,s1,s2,s3,crunfactor);
    points.push(pps[0]);
    points.push(pps[1]);

    ppA = pps[0];
    ppB = pps[1];

    let thiscolor = scolors[i%scolors.length];

    shps.push(new SHP(points,thiscolor));
    // shps.push(new SHP(points.reverse(),thiscolor));
    // shps.push(new SHP(points2));
    // shps.push(new SHP(points3));
    // shps.push(new SHP(points4));



  }

}

function draw() {
  // background(220);
  for (let i=5;i<shps.length;i++){
    if (curveit){
      shps[i].showcurve();
    }
    else{
      shps[i].show();

    }
    
  }
  print(shps);
  noLoop();
}

function calcNewPoints(points,s1=15,s2=180,s3=40,crunch=1.1){
  let newx = (points[0].x + points[1].x)/2;
  let newy = (points[0].y + points[1].y)/2;
  let xdiff = (points[0].x - points[1].x);
  let ydiff = (points[0].y - points[1].y);
  
  let xdr = [0,0];
  let ydr = [0,0];

  if (newx < width/2 && newy < height/2){
    //top left
    xdr = [0-s3,s2];
    ydr = [0-s1,s1];
  }
  else if (newx > width/2 && newy < height/2){
    //top right
    xdr = [s1/2,s1];
    ydr = [0-s3,s2];
  }
  else if (newx > width/2 && newy > height/2){
    //bottom right 
    xdr = [0-s2,s3];
    ydr = [0-s1,s1];
  }
  else if (newx < width/2 && newy > height/2){
    //bottom left
    xdr = [-s1/2,-s1];
    ydr = [0-s2,s3];
  }
  else if (newx > width){
    xdr = [-2*s2,-s2];
  }
  else if (newy > height){
    ydr = [-2*s2,-s2];
  }
  else if (newx <0){
    xdr = [s2,s2*2];
  }
  else if (newy <0){
    ydr = [s2,s2*2];
  }


  let finx = newx + random(xdr[0],xdr[1]);
  let finy = newy + random(ydr[0],ydr[1]);
  let ret1=createVector(finx,finy);
  let ret2=createVector(finx+xdiff*crunch,finy+ydiff*crunch);
  return [ret1,ret2];



}