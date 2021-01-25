/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateyatunes"]("main",{

/***/ "./src/module/radioPlayer.js":
/*!***********************************!*\
  !*** ./src/module/radioPlayer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"radioPlayerInit\": () => /* binding */ radioPlayerInit\n/* harmony export */ });\nvar radioPlayerInit = function radioPlayerInit() {\n  var radio = document.querySelector('.radio');\n  var radioCoverImg = document.querySelector('.radio-cover__img');\n  var radioNavigation = document.querySelector('.radio-navigation');\n  var radioHeaderBig = document.querySelector('.radio-header__big');\n  var radioItem = document.querySelectorAll('.radio-item');\n  var radioStop = document.querySelector('.radio-stop');\n  var radioVolume = document.querySelector('.radio-volume');\n  var radioMute = document.querySelector('.radio-mute');\n  var audio = new Audio();\n  audio.type = 'audio/aac';\n  var tempVolume = audio.volume; // radioStop.disabled = true;\n\n  var changeIconPlay = function changeIconPlay() {\n    if (audio.paused) {\n      radio.classList.remove('play');\n      radioStop.classList.add('fa-play');\n      radioStop.classList.remove('fa-stop');\n    } else {\n      radio.classList.add('play');\n      radioStop.classList.remove('fa-play');\n      radioStop.classList.add('fa-stop');\n    }\n  };\n\n  var selectItem = function selectItem(elem) {\n    radioItem.forEach(function (item) {\n      return item.classList.remove('select');\n    });\n    elem.classList.add('select');\n  };\n\n  var changeVolume = function changeVolume() {\n    audio.volume = radioVolume.value / 100;\n    audio.muted = false;\n  };\n\n  radioNavigation.addEventListener('change', function (event) {\n    var target = event.target;\n    var parrent = target.closest('.radio-item');\n    selectItem(parrent);\n    var title = parrent.querySelector('.radio-name').textContent;\n    radioHeaderBig.textContent = title;\n    var urlImg = parrent.querySelector('.radio-img');\n    console.log(urlImg);\n    radioCoverImg.src = urlImg.src;\n    radioStop.disabled = false;\n    audio.src = target.dataset.radioStantion;\n    audio.play();\n    changeIconPlay();\n  });\n  radioStop.addEventListener('click', function () {\n    if (audio.paused) {\n      audio.play();\n    } else {\n      audio.pause();\n    }\n\n    changeIconPlay();\n  });\n  radioVolume.addEventListener('input', changeVolume);\n  radioMute.addEventListener('click', function () {\n    audio.muted = !audio.muted;\n  });\n  changeVolume();\n\n  radioPlayerInit.stop = function () {\n    audio.pause();\n    changeIconPlay();\n  };\n};\n\n//# sourceURL=webpack://yatunes/./src/module/radioPlayer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "47a374ca5d37b6230f99"
/******/ 	})();
/******/ 	
/******/ }
);