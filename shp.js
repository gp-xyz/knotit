class SHP{
    constructor(listofpoints,colorr){
        this.lop=listofpoints;
        this.c=colorr;
   
    }
    show(){
        // stroke('lime');
        noStroke();
        let newcolor = color(this.c);
        newcolor.setAlpha(50);
        fill(newcolor);
        beginShape()
        for (let i=0; i<this.lop.length; i++){
            vertex(this.lop[i].x,this.lop[i].y);
        }
        endShape();

    }
    showcurve(){
        // stroke('lime');
        noStroke();
        let newcolor = color(this.c);
        newcolor.setAlpha(50);
        fill(newcolor);
        beginShape()
        // curveVertex(width/2,height/2);
        curveVertex(this.lop[0].x,this.lop[0].y);
        for (let i=0; i<this.lop.length; i++){
            curveVertex(this.lop[i].x,this.lop[i].y);
        }
        // curveVertex(this.lop[this.lop.length-1].x,this.lop[this.lop.length-1].y);
        curveVertex(width/2,height/2);
        endShape();

    }
}
