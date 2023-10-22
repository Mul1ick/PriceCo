// Function to handle the button click event
function search(event) {
    // Prevent the default form submission behavior
    event.preventDefault()

    var searchValue = document.getElementById("searchbox").value

    if (searchValue === "iPhone 13"){

    // Get references to the elements where you want to display the product name
    var name1Element = document.getElementById("name1")
    var name2Element = document.getElementById("name2")
    var price1Element = document.getElementById("price1")
    var price2Element = document.getElementById("price2")
    var link1Element = document.getElementById("link1")
    var link2Element = document.getElementById("link2")
    var img1Element = document.getElementById("photo1")
    var img2Element = document.getElementById("photo2")

    // Set the text content of both elements to "Product name: Apple iPhone 13"
   setTimeout(function(){

   
    name1Element.textContent = "Product name: Apple iPhone 13 (128GB) - Midnight"
    name2Element.textContent = "Product name: APPLE iPhone 13 (Midnight, 128 GB)"
    price1Element.textContent = "Price: ₹48,999"
    price1Element.style.color = "green"
    price2Element.textContent = "Price: ₹51,999"
    price2Element.style.color = "red";
    
    // Create the first link and set its href attribute
    var link1 = document.createElement("a");
    link1.href = "https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=ZI1I0QRTLDDP&keywords=iphone+13&nsdOptOutParam=true&qid=1696964659&s=electronics&sprefix=%2Celectronics%2C197&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"; // Replace with the actual URL
    link1.textContent = "Visit Product Page 1"; // Text to be displayed for the link

    // Create the second link and set its href attribute
    var link2 = document.createElement("a");
    link2.href = "https://www.flipkart.com/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0?pid=MOBG6VF5Q82T3XRS&lid=LSTMOBG6VF5Q82T3XRSOXJLM9&marketplace=FLIPKART&q=iphone+13+128&store=tyy%2F4io&srno=s_1_1&otracker=AS_Query_PredictiveAutoSuggest_1_0_na_na_na&otracker1=AS_Query_PredictiveAutoSuggest_1_0_na_na_na&fm=organic&iid=3da8dbb4-31a6-4b98-94e8-499a14b2dbf1.MOBG6VF5Q82T3XRS.SEARCH&ppt=hp&ppn=homepage&ssid=k37anp1lemrnaccg1696964240884&qH=f69496424e64cd29"; // Replace with the actual URL for the second link
    link2.textContent = "Visit Product Page 2"; // Text to be displayed for the second link

    // Clear any existing content and append the links
    link1Element.innerHTML = '';
    link1Element.appendChild(link1);

    // Clear any existing content for the second link
    link2Element.innerHTML = '';
    link2Element.appendChild(link2);



    var imgElement = document.createElement("img")

    imgElement.src = "iphone-13.jpg"

    imgElement.style.width = "20%"

    var imgElement2 = document.createElement("img")

    imgElement2.src = "iphone-13.jpg"

    imgElement2.style.width = "20%"

    img1Element.innerHTML = ''; // Clear any existing content
    img1Element.appendChild(imgElement);

    img2Element.innerHTML = ''
    img2Element.appendChild(imgElement2)

    },2000)
    }
    else if (searchValue === "skullcandy headphones"){
          // Get references to the elements where you want to display the product name
    var name1Element = document.getElementById("name1")
    var name2Element = document.getElementById("name2")
    var price1Element = document.getElementById("price1")
    var price2Element = document.getElementById("price2")
    var link1Element = document.getElementById("link1")
    var link2Element = document.getElementById("link2")
    var img1Element = document.getElementById("photo1")
    var img2Element = document.getElementById("photo2")


    // Set the text content of both elements to "Product name: Apple iPhone 13"
   setTimeout(function(){

   
    name1Element.textContent = "Product name: Skullcandy Push Active in-Ear Wireless Earbuds, 43 Hr Battery, Skull-iQ, Alexa Enabled, Microphone, Works with iPhone Android and Bluetooth Devices -Black Orange"
    name2Element.textContent = "Product name: Skullcandy Push Active True Wireless Earbuds, Voice Control Bluetooth Headset  (Black Orange, True Wireless)"
    price1Element.textContent = "Price: ₹6,499"
    price1Element.style.color = "green"
    price2Element.textContent = "Price: ₹6,499"
    price2Element.style.color = "green"

    // Create the first link and set its href attribute
    var link1 = document.createElement("a");
    link1.href = "https://www.amazon.in/dp/B08X1V7V92?ref_=cm_sw_r_apan_dp_HS7BEQ3FA440FPBTSW9D&th=1"; // Replace with the actual URL
    link1.textContent = "Visit Product Page 1"; // Text to be displayed for the link

    // Create the second link and set its href attribute
    var link2 = document.createElement("a");
    link2.href = "https://www.flipkart.com/skullcandy-push-active-true-wireless-earbuds-voice-control-bluetooth-headset/p/itmc549731156760?pid=ACCGBVZA8NZG4NBZ&cmpid=product.share.pp&_refId=PP.000b7541-1ea7-48e3-96a1-217f023b1fa5.ACCGBVZA8NZG4NBZ&_appId=WA"; // Replace with the actual URL for the second link
    link2.textContent = "Visit Product Page 2"; // Text to be displayed for the second link

    // Clear any existing content and append the links
    link1Element.innerHTML = '';
    link1Element.appendChild(link1);

    // Clear any existing content for the second link
    link2Element.innerHTML = '';
    link2Element.appendChild(link2);


    var imgElement = document.createElement("img")

    imgElement.src = "skullcandy headphones-amz.jpeg"

    imgElement.style.width = "20%"

    var imgElement2 = document.createElement("img")

    imgElement2.src = "skull flip.webp"

    imgElement2.style.width = "30%"

    img1Element.innerHTML = ''; // Clear any existing content
    img1Element.appendChild(imgElement);

    img2Element.innerHTML = ''
    img2Element.appendChild(imgElement2)
    },2000)
    }
}

