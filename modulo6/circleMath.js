var MinhaMatematica;
(function (MinhaMatematica) {
    var Circulo;
    (function (Circulo) {
        var PI = 3.1415;
        function calculaCircunferencia(diametro) {
            return diametro * PI;
        }
        Circulo.calculaCircunferencia = calculaCircunferencia;
    })(Circulo = MinhaMatematica.Circulo || (MinhaMatematica.Circulo = {}));
})(MinhaMatematica || (MinhaMatematica = {}));
