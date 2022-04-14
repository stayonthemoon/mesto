(()=>{"use strict";var e=document.querySelector(".popup__input_type-name"),t=document.querySelector(".popup__input_type-description"),n=(document.querySelector(".popup__image"),document.querySelector(".profile__edit-button")),r=document.querySelector(".profile__add-button"),o=document.querySelector(".element"),i=document.querySelector(".popup_type_edit"),u=document.querySelector(".popup_type_addcard"),c=document.querySelector(".popup_type_zoom"),a={template:".template",element:".element__card",trash:".element__delete-button",image:".element__image",title:".element__title",like:".element__like-button"},s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__input-border_active",errorClass:"popup__input-error_active"};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=n}var t,n;return t=e,(n=[{key:"renderCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItems",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=t,this._closeByEscape=this._closeByEscape.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEscape)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEscape)}},{key:"_closeByEscape",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup__close-button")&&e.close(),t.target===t.currentTarget&&e.close()}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageLink=t._popupElement.querySelector(".popup__image"),t._popupImageDescription=t._popupElement.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageDescription.textContent=e,this._popupImageLink.src=t,this._popupImageLink.alt=e,m(E(u.prototype),"open",this).call(this)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function j(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function u(e,t){var n,r=t.submitFormHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submitFormHandler=r,n._form=n._popupElement.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__save-button"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;S(L(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFormHandler(e._getInputValues()),e.close()}))}},{key:"close",value:function(){this._form.reset(),S(L(u.prototype),"close",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.userName,r=t.userDescr;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e,t){this._name.textContent=e,this._description.textContent=t}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.classList.add(r._errorClass),n.textContent=t})),x(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),x(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),x(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),x(this,"_setSubmitButtonState",(function(){r._hasInvalidInput()?r.disableSubmitButton():r.enableSubmitButton()})),x(this,"disableSubmitButton",(function(){r._buttonElement.classList.add(r._inactiveButtonClass),r._buttonElement.disabled=!0})),x(this,"enableSubmitButton",(function(){r._buttonElement.classList.remove(r._inactiveButtonClass),r._buttonElement.disabled=!1})),x(this,"setEventListeners",(function(){r._setSubmitButtonState(),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._setSubmitButtonState()}))}))})),this._formElement=n,this._inputElement=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputElement)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._setSubmitButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n,r){var o,i,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i=function(){u._cardItem.remove(),u._cardItem=null},(o="_deleteCard")in this?Object.defineProperty(this,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):this[o]=i,this._place=t.place,this._link=t.link,this._template=n.template,this._cardItem=n.element,this._deleteButton=n.trash,this._cardImage=n.image,this._title=n.title,this._likeButton=n.like,this._zoomImage=r}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(".element__card").cloneNode(!0)}},{key:"_clickLike",value:function(e){e.classList.toggle("element__like-button_active")}},{key:"_setEventListenrs",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._clickLike(e._likeButton)})),this._deleteButton.addEventListener("click",(function(){e._deleteCard(e._cardItem)})),this._cardImage.addEventListener("click",(function(){e._zoomImage(e._place,e._link)}))}},{key:"addNewCard",value:function(){return this._cardItem=this._getTemplate(),this._cardTitle=this._cardItem.querySelector(this._title),this._cardImage=this._cardItem.querySelector(this._cardImage),this._likeButton=this._cardItem.querySelector(this._likeButton),this._deleteButton=this._cardItem.querySelector(this._deleteButton),this._cardTitle.textContent=this._place,this._cardImage.src=this._link,this._cardImage.alt=this._place,this._setEventListenrs(),this._cardItem}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=new R(s,u),F=new R(s,i);V.setEventListeners(),F.setEventListeners();var H=new B(i,{submitFormHandler:function(e){M.setUserInfo(e.name,e.description)}});n.addEventListener("click",(function(){var n=M.getUserInfo(),r=n.name,o=n.description;H.open(),e.value=r,t.value=o,F.resetValidation()})),H.setEventListeners();var N=new B(u,{submitFormHandler:function(e){var t=U({place:e.place,link:e.link});G.addItems(t)}});r.addEventListener("click",(function(){N.open(),V.resetValidation()})),N.setEventListeners();var z=new g(c);function A(e,t){z.open(e,t)}function U(e){return new D(e,a,A).addNewCard()}z.setEventListeners();var M=new P({userName:".profile__name",userDescr:".profile__description"}),G=new p({renderer:function(e){var t=U(e);G.addItems(t)}},o);G.renderCards([{place:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{place:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{place:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{place:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{place:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{place:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}])})();