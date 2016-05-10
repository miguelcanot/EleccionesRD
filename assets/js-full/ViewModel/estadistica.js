function Estadistica() {
    var self = this;
    
    self.btnDenunciaMunicipio = function () {
      $("#ifEstadistica").attr("src", pathWeb + "denuncia/estadistica");
      $( "#modalEstadistica").modal('show');
    }
    
    self.btnDenunciaRecinto = function () {
      $("#ifEstadistica").attr("src", pathWeb + "denuncia/estadistica/r");
      $( "#modalEstadistica").modal('show');
    }
    
    self.btnPoblacionPorSexo = function () {
      $("#ifEstadistica").attr("src", "http://dwh.one.gob.do:9704/xmlpserver/Portal/Censos/Censo/B01-S0100002/B01-S0100002.xdo?_xpf=&_xpt=2&_xf=html&_xmode=2");
      $( "#modalEstadistica").modal('show');
    }
    
}

var estadistica = new Estadistica();