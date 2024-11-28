const products = {
    "K. Accessories": 39.00,
    "Board": 49.00,
    "Cooker": 69.00,

    "Sports Cap": 119.00,
    "Full Jersey Set": 299.00,
    "Sports cates": 79.00,

    "Single Relax Chair": 555.00,
    "Children play": 777.00,
    "Sofa": 1000.00,

}

let totalPrice = 0;
let discount = 0;
let count = 1;
let productlist = document.getElementById("productlist");



document.querySelectorAll(".card-title").forEach((card) => {
    card.addEventListener("click", (name) => {
        const productName = name.target.innerText;
        const price = products[productName];
        const couponCode = document.getElementById("code").value;

        

        totalPrice += price;
        if (couponCode === "SELL200" && totalPrice >= 200) {
            discount = totalPrice * 0.2;
            document.getElementById("discnt").innerText = `${discount.toFixed(2)} Tk`;
        }
        document.getElementById("totalmoney").innerText = `${totalPrice.toFixed(2)} Tk`;

        const totalwithdis = totalPrice - discount;

        document.getElementById("totalwithDiscount").innerText = `${totalwithdis.toFixed(2)} TK`;

        let productListarea = document.createElement("div");
        productListarea.innerHTML = `${count++}. ${productName}`;
        productListarea.setAttribute("class", "text-[24px] font-semibold mb-[22px]");
        productlist.append(productListarea);
    });
});


