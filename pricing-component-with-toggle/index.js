(() => {
  document.getElementById("switch").addEventListener("click", togglePrices);

  function togglePrices() {
    console.log(document.getElementById("switch_img").style.rotate);
    if (
      !document.getElementById("switch_img").style.rotate ||
      document.getElementById("switch_img").style.rotate == "0deg"
    ) {
      document.getElementById("switch_img").style.rotate = "180deg";

      // Hide monthly prices
      const monthly_collection =
        document.getElementsByClassName("price_monthly");
      for (let i = 0; i < monthly_collection.length; i++) {
        monthly_collection[i].className = "price_monthly price hidden";
      }

      // Show yearly prices
      const yearly_collection = document.getElementsByClassName("price_yearly");
      for (let i = 0; i < yearly_collection.length; i++) {
        yearly_collection[i].className = "price_yearly price";
      }
    } else {
      document.getElementById("switch_img").style.rotate = "0deg";

      // Show monthly prices
      const monthly_collection =
        document.getElementsByClassName("price_monthly");
      for (let i = 0; i < monthly_collection.length; i++) {
        monthly_collection[i].className = "price_monthly price";
      }

      // Hide yearly prices
      const yearly_collection = document.getElementsByClassName("price_yearly");
      for (let i = 0; i < yearly_collection.length; i++) {
        yearly_collection[i].className = "price_yearly price hidden";
      }
    }

    console.log("toggle");
  }
})();
