let vertices = [];
let verticesAmount = 600;
let circleRadius = 0;
let primAmount = 4;

function setup(){
    createCanvas(600, 600);
    background(17);
    
    for ( let i = 0; i < primAmount; i++){
        prim(0,0,width,height,200);
    }
     
    //createBorder();
}

function mouseClicked(){
    save("generative5.png");
    return false;
}

function draw(){
    
}


function prim(minX,minY,maxX,maxY,radius){

    for ( let b = 0; b < verticesAmount; b++){
        let v = createVector(random(minX,maxX),random(minY,maxY));
        let d = dist(width/2,height/2,v.x,v.y);
        if ( d <= radius){
            vertices.push(v);
        }
    }

    let reached = [];
    let unreached = [];

    for ( let k = 0; k < vertices.length; k++){
        unreached.push(vertices[k]);
    }

    reached.push(unreached[0]);
    unreached.splice(0,1);

    while ( unreached.length > 0 ){
        let record = 100000;
        let rIndex;
        let uIndex;
        for ( let i = 0; i < reached.length; i++){
            for ( let j = 0; j < unreached.length; j++){
                let v1 = reached[i];
                let v2 = unreached[j];
                let d = dist(v1.x, v1.y, v2.x, v2.y);

                if ( d < record){
                    record = d;
                    rIndex = i;
                    uIndex = j;
                }
            }
        }

        stroke(255,255,255,80);
        strokeWeight(1.3);
        line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);

        reached.push(unreached[uIndex]);
        unreached.splice(uIndex,1);

    }
    
    // for ( p = 0; p < verticesAmount; p+=10){
    //     stroke(240);
    //     noFill();
    //     ellipse(vertices[p].x, vertices[p].y, circleRadius);
    // }
}



function createBorder(){
    background(17);
    for ( i = 0; i < 50; i++){
        stroke(random(230,255));
        line(circleRadius,circleRadius,width-circleRadius,circleRadius);
        line(circleRadius,circleRadius,circleRadius,height-circleRadius);
        line(circleRadius,height-circleRadius,width-circleRadius,height-circleRadius);
        line(width-circleRadius,height-circleRadius,width-circleRadius,circleRadius);
        circleRadius-=15;
    }
}

