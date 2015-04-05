var http = require('http');

http.get("http://compras.dados.gov.br/contratos/v1/contratos.json", function(res) {
    console.log("Got response: " + res.statusCode);

    if(res.statusCode == 200){
        res.on('data', function(d) {
            console.info('GET result:\n');
            process.stdout.write(d);
            console.info('\n\nCall completed');
        });
    }
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
