const objectLima = {
 generacion:"tercera , cuarta , quinta"
 }
const objectMex = {
 generacion:"tercera , cuarta , quinta"
}
const objectSant = {
 generacion:"tercera , cuarta , quinta"
}

const objectSedes = [objectLima,objectMex,objectSant];

window.generaciones = {
 computeStudentsStats: () => {
   for (let i = 0; i < objectSedes.length; i++) {
     return objectSedes[i].generacion
   }
 }
};
