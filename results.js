// Declaring variables that select elements on the HTML page so that we can interact with the using code
var playAgain_el = document.querySelector("#play-again")
//var download_el = document.querySelector("#download")
var window_el = document.querySelector("#result-window")
var result_img_el = document.querySelector("#result-image")
var description_el = document.querySelector("#image-description");//add

// Pulls the winning result information from the previous page to this one
var result = sessionStorage.getItem("result")

var descriptions = {
    "0": "一等賞！！！\nアマゾン 30000円！！！！！！",
    "1": "アマゾン 10000円！！！",
    "2": "アマゾン 5000円！！",
	"3": "Steamのゲームを自由に選ぶ！",
	"4": "アマゾン 3000円！",
    // 你可以根據需要添加更多圖片描述
};

// this function tells the page to load up with the winning result
function loadPage() {
    window_el.style.opacity = "1"
    window_el.style.transform = "translateY(0px)"
    //download_el.style.opacity = "1"
    playAgain_el.style.opacity = "1"
    result_img_el.src = `Assets/preview_imgs/preview${result}.png`
	//add
	const savedCoinCount = sessionStorage.getItem("coinCount");
    if (savedCoinCount !== null) {
        // 如果有保存的金币数值，更新显示
        document.getElementById("coin-count").textContent = savedCoinCount;
    }
	
	/*const savedCoinCount = sessionStorage.getItem("coinCount");
if (savedCoinCount !== null) {
    document.getElementById("coin-count").textContent = savedCoinCount;
} else {
    document.getElementById("coin-count").textContent = 0;
}*/
	
	if (descriptions[result]) {
        description_el.textContent = descriptions[result];
    } else {
        description_el.textContent = "未知的圖片內容";
    }
}

// this actually calls that loading function
loadPage();

// this tells the website to find the winning prize imagine and prompt the user to download if they hit the download button
/*download_el.addEventListener("click", () => {
    const link = document.createElement('a')
    link.href = `Assets/prize_imgs/prize${result}.jpeg` // this is where you can change the file type of the prize to something besides .jpeg
    link.download = `claw-machine-prize.jpeg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
})*/

// this tells the website to go back to the game page if the user hits the play again button
playAgain_el.addEventListener("click", ()=> {
    //window.location.replace("game.html");
	//sessionStorage.setItem("coinCount", totalCoins);
	window.location.href = `game.html?coins=${totalCoins}`;
    window_el.style.opacity = "0"
    window_el.style.transform = "translateY(10px)"
    //download_el.style.opacity = "0"
    playAgain_el.style.opacity = "0"
})
