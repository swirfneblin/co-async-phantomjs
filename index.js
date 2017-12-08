var horseman = require('./horsemanjs');

var countlogin = () => {
    let count = horseman.countlinks();
    return count;
};

var fazalgo = () => {
    let valor = '000';
    console.log('+ antes = '+ valor);
};

var init = async() => {
    console.log('=========1...');
    await fazalgo();

    console.log('=========2...');
    let itens = await countlogin();
    
    console.log('=========3...');
    console.log('+ depois = ', itens);

    console.log('=========4...');
}

(()=>{
    try{
        init();   
    }
    catch(err){
        console.log('erro => ', err);
    }
})();