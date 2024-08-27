
// document.getElementById("box_1").addEventListener("click", btn1);



function btn1() {
    document.getElementById("title").innerHTML = "Expanding Reach";
    document.getElementById("desc").innerHTML = "Web development enables companies and organizations to expand their reach into the digital space. The internet is vast and wide, most businesses that wants to be successful always have their connections on the global network through the internet. There are many platforms to use online that can help prolifirate businesses.";
    document.getElementById("about_content_box").style.opacity = 1;
}

function btn2() {
    document.getElementById("title").innerHTML = "Brand Awareness";
    document.getElementById("desc").innerHTML = "The digital world is easily accessible through many devices worldwide. Web development allows many different brands to be seen in the internet quickly, reliably, and with ease. Through various online advertisement, brand awareness will be much higher compared to conventional means."
    document.getElementById("about_content_box").style.opacity = 1;
}

function btn3() {
    document.getElementById("title").innerHTML = "Marketing";
    document.getElementById("desc").innerHTML = "Through the advances in web development, business has seen many great benefits. Making a website specifically for a business improves their connection and relationship with their customers online. It is commonly known that successful businesses has a huge presence online, and that presence is what makes them even more successful in prolifirating their products and services."
    document.getElementById("about_content_box").style.opacity = 1;
}

function btn4() {
    document.getElementById("title").innerHTML = "Cost Effectiveness";
    document.getElementById("desc").innerHTML = "Developing websites for your business or company is cost effective. It can significantly lower operational costs as the web will ensure your presence over the internet. Furthermore, there will be less cost in maintaining and editing a website online."
    document.getElementById("about_content_box").style.opacity = 1;
}

function btn5() {
    document.getElementById("title").innerHTML = "Credibility";
    document.getElementById("desc").innerHTML = "Web development is cruicial into cementing a business's credibility. By creating a great website with great functionalities and appeal, you can make your website look more that credible. Also, web developments are one of the ways to show your business's success and achievements. An appealing website will make you look more credible and trustworthy."
    document.getElementById("about_content_box").style.opacity = 1;
    document.getElementById("about_content_box").style.fontFamily = Verdana, Geneva, Tahoma, sans-serif;
}

function btn6() {
    document.getElementById("title").innerHTML = "Trust Building";
    document.getElementById("desc").innerHTML = "Websites can be a great tool for building trust with your community. Whether it is for business or social purposes. By simply providing help and factual information through people online, you can improve their reliance in you. Building trust with online users will improve your customers and organization's bond."
    document.getElementById("about_content_box").style.opacity = 1;
    document.getElementById("about_content_box").style.fontFamily = Verdana, Geneva, Tahoma, sans-serif;
}

function btn7() {
    document.getElementById("title").innerHTML = "Availability";
    document.getElementById("desc").innerHTML = "Web developments helps to make businesses available to everyone at anytime online. The availability of a product or service is just one search away, or even one click away. Availabillity is one of the greatest features of the web. Furthermore, websites of your businesses will make sure that your marketing and presence is running 24/7 online."
    document.getElementById("about_content_box").style.opacity = 1;
    document.getElementById("about_content_box").style.fontFamily = Verdana, Geneva, Tahoma, sans-serif;
}



function normal() {
    document.getElementById("title").innerHTML = " Title ";
    document.getElementById("desc").innerHTML = "Hover on the buttons from the left side to see each description.";
    document.getElementById("about_content_box").style.opacity = .7;

}




function mouse_hover(x) {
    if (x == 1) {
        btn1()
    } else if (x == 2) {
        btn2()
    } else if (x == 3) {
        btn3()
    } else if (x == 4) {
        btn4()
    } else if (x == 5) {
        btn5()
    } else if (x == 6) {
        btn6()
    } else if (x == 7) {
        btn7()
    }
}


function mouse_not_hover() {
    normal()
}

