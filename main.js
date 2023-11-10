const submitB1=document.getElementById("submitB1");
submitB1.onclick = function(){
    const adultTickets=document.getElementById("adultTickets").value *1;
    const kidTickets=document.getElementById("kidTickets").value *1;
    const sold1=document.getElementById("sold1").value *1;
    const sold2=document.getElementById("sold2").value *1;
    // trích 10% cho từ thiện
    const charity=0.1;
    // doanh thu
    const revenue = (adultTickets*sold1) + (kidTickets*sold2);
    // tiền từ thiện
    const charityMoney = revenue * charity;
    // Tiền còn lại sau khi trừ:
    const surplusMoney = revenue-charityMoney;
    

   // convert vnd
   const config = { style: "currency", currency:"VND"};
   const formated = new Intl.NumberFormat("vi-VN",config);

     var result="";
     result += "<p class='alert alert-success' >Doanh thu là:  "+ formated.format(revenue) +"</p>";
     result += "<p class='alert alert-success' >Tiền từ thiện là:  "+ formated.format(charityMoney) +"</p>";
     result += "<p class='alert alert-success' >Tiền còn lại là:  "+ formated.format(surplusMoney) +"</p>";

     

     var footerB1=document.getElementById("footerB1");
     footerB1.innerHTML=result;
 
    

}