let mobileDevice = document.getElementById("onMobile");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mobileDevice.innerHTML = '<br /> <br />'; //&nbsp
  }
  else{
    mobileDevice.innerHTML = '<br /> '; //&nbsp
  }
