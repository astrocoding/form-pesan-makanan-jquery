$(document).ready(function() {
  $("#calculateTotal").click(function() {
      let nasiGorengPrice = 10000;
      let ayamGorengPrice = 12000;
      let esTehPrice = 2000;
      let kopiPrice = 3000;
      
      let nasiGorengQty = parseInt($("#nasiGorengQty").val()) || 0;
      let ayamGorengQty = parseInt($("#ayamGorengQty").val()) || 0;
      let esTehQty = parseInt($("#esTehQty").val()) || 0;
      let kopiQty = parseInt($("#kopiQty").val()) || 0;
      
      let totalPrice = (nasiGorengPrice * nasiGorengQty) +
                       (ayamGorengPrice * ayamGorengQty) +
                       (esTehPrice * esTehQty) +
                       (kopiPrice * kopiQty);
      
      $("#totalPrice").text("Total Pesanan: Rp. " + totalPrice.toLocaleString("id-ID"));
  });
});
