(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/artikel/artikel.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/artikel/artikel.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-artikel></app-body-artikel>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/artikel/body-artikel/body-artikel.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/artikel/body-artikel/body-artikel.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start parallax hero section -->\r\n<section class=\"wow fadeIn p-0 parallax sm-background-image-center\" data-stellar-background-ratio=\"0.5\" [ngStyle]=\"{'background-image': 'url(' + imageUrl(newsDetail.imageCover) + ')'}\">\r\n  <div class=\"opacity-extra-medium bg-black\"></div>\r\n  <div class=\"container-fluid position-relative full-screen\">\r\n      <div class=\"slider-typography\">\r\n          <div class=\"slider-text-middle-main\">\r\n              <div class=\"slider-text-bottom\">\r\n                  <div class=\"col-12 col-xl-6 col-lg-7 bg-deep-pink-opacity width-500px sm-height-100px md-height-250px lg-height-200px lg-padding-seven-lr padding-five-tb position-pc\">\r\n  \r\n                      <p class=\"font-weight-600 alt-font text-white-2 width-95 md-width-100\" style=\"font-size: 2em;\">{{newsDetail.title}}</p>\r\n  \r\n                      <p class=\"text-large font-weight-300 text-white-2 width-75 lg-width-85 md-width-95 sm-width-100 d-none d-md-block\">{{newsDetail.date | date:'dd MMMM yyyy'}}</p>\r\n                  </div> \r\n                </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- end parallax hero section -->\r\n\r\n<!-- start section -->\r\n<section class=\"wow fadeIn\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-10 d-flex flex-wrap mx-auto last-paragraph-no-margin text-center text-md-left\">\r\n                <div class=\"col-12 col-lg-4 pl-0 text-center text-large md-no-padding-lr md-margin-30px-bottom\">\r\n                  <!-- start blockquote -->\r\n                  <p class=\"text-extra-dark-gray margin-50px-bottom md-margin-20px-bottom alt-font\">\r\n                    <i class=\"fas fa-quote-left text-light-gray icon-medium margin-15px-bottom\"></i>\r\n                    Apa yang mendefinisikan siapa kita, tidak ada artinya dibandingkan apa yang menyatukan kita.\r\n                    <i class=\"fas fa-quote-right text-right text-light-gray icon-medium margin-15px-bottom\"></i>\r\n                  </p>\r\n                  <!-- end blockquote -->\r\n                </div>\r\n\r\n                <div class=\"col-12 col-lg-8 pr-0 text-large md-no-padding-lr text-center text-md-left\">\r\n                  <p class=\"text-large line-height-30 text-medium-gray text-center text-md-justify sm-line-height-26\">{{newsDetail.body1}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end section -->\r\n\r\n<!-- start parallax section -->\r\n<section class=\"wow fadeIn parallax p-0 height-400px md-height-200px sm-height-100px background-position-x-50 cover-background\" data-stellar-background-ratio=\"0.5\" [ngStyle]=\"{'background-image': 'url(' + imageUrl(newsDetail.imageBody) + ')'}\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-12\"></div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- end parallax section -->\r\n\r\n<!-- start section -->\r\n<section class=\"wow fadeIn\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-10 d-flex flex-wrap mx-auto last-paragraph-no-margin text-center text-md-left\">\r\n                <div class=\"col-12 col-lg-5 pl-0 text-large md-no-padding-lr md-margin-30px-bottom\">\r\n                    <p class=\"text-large line-height-30 text-medium-gray text-center text-md-justify sm-line-height-26\">{{newsDetail.body2}}</p>\r\n                </div>\r\n\r\n                <div class=\"col-12 col-lg-7 pr-0 text-large md-no-padding-lr text-center text-md-left\">\r\n                    <p class=\"text-large line-height-30 text-medium-gray text-center text-md-justify sm-line-height-26\">{{newsDetail.body3}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end section -->\r\n\r\n<!-- start portfolio slider section -->\r\n<section class=\"wow fadeIn bg-light-gray\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-12 text-center margin-40px-bottom sm-margin-20px-bottom\">\r\n                <div class=\"position-relative overflow-hidden w-100\">\r\n                    <p class=\"text-deep-pink text-outside-line-full alt-font font-weight-600 text-uppercase margin-20px-bottom\" style=\"font-size: 2em;\">Deskripsi Foto</p>\r\n                    <br>\r\n                    <span class=\"text-justify\">{{newsDetail.otherImages.description}}</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-12 hover-option4 margin-5px-bottom\">\r\n                <div class=\"swiper-multy-row-container overflow-hidden\">\r\n                    <div class=\"swiper-wrapper\">\r\n\r\n                        <!-- start portfolio slider item -->\r\n                        <div class=\"swiper-slide grid-item\">\r\n                          <figure>\r\n                              <div class=\"portfolio-img bg-extra-dark-gray\">\r\n                                  <img [src]=\"formatImageSrc(newsDetail.otherImages.images1)\" alt=\"img-1\"/>\r\n                                </div>\r\n                          </figure>\r\n                        </div>\r\n                        <!-- end portfolio slider item -->\r\n\r\n                        <!-- start portfolio slider item -->\r\n                        <div class=\"swiper-slide grid-item\">\r\n                          <figure>\r\n                              <div class=\"portfolio-img bg-extra-dark-gray\">\r\n                                  <img [src]=\"formatImageSrc(newsDetail.otherImages.images2)\" alt=\"img-2\"/>\r\n                                </div>\r\n                          </figure>\r\n                        </div>\r\n                        <!-- end portfolio slider item -->\r\n\r\n                        <!-- start portfolio slider item -->\r\n                        <div class=\"swiper-slide grid-item\">\r\n                          <figure>\r\n                              <div class=\"portfolio-img bg-extra-dark-gray\">\r\n                                  <img [src]=\"formatImageSrc(newsDetail.otherImages.images3)\" alt=\"img-3\"/>\r\n                                </div>\r\n                          </figure>\r\n                        </div>\r\n                        <!-- end portfolio slider item -->\r\n\r\n                        <!-- start portfolio slider item -->\r\n                        <div class=\"swiper-slide grid-item\">\r\n                          <figure>\r\n                              <div class=\"portfolio-img bg-extra-dark-gray\">\r\n                                  <img [src]=\"formatImageSrc(newsDetail.otherImages.images4)\" alt=\"img-4\"/>\r\n                                </div>\r\n                          </figure>\r\n                        </div>\r\n                        <!-- end portfolio slider item -->\r\n                        \r\n                    </div>\r\n                    <!-- start slider pagination -->\r\n                    <div class=\"swiper-portfolio-prev swiper-button-black-highlight\"><i class=\"ti-arrow-left\"></i></div>\r\n                    <div class=\"swiper-portfolio-next swiper-button-black-highlight\"><i class=\"ti-arrow-right\"></i></div>\r\n                    <!-- end slider pagination -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end portfolio slider section -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/berita/berita.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/berita/berita.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-berita></app-body-berita>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/berita/body-berita/body-berita.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/berita/body-berita/body-berita.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- start slider section -->\n<section class=\"no-padding main-slider height-100 mobile-height wow fadeIn\" style=\"max-height:100vh;\">\n    <div class=\"swiper-full-screen swiper-container height-100 width-100 black-move\">\n        <div class=\"swiper-wrapper\">\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" style=\"background-image:url('../../../assets/img/web/Berita/bg-berita.jpg');\">\n                <div class=\"cover-background\" style=\"background-color: rgba(0,0,0,0.5);\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"col-md-12 slider-typography text-center text-md-left\">\n                            <div class=\"slider-text-middle-main\">\n                                <div class=\"slider-text-middle\">\n\n                                    <h4 class=\"alt-font text-white font-weight-400 letter-spacing-minus-1 line-height-80 width-55 margin-10px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\" style=\"border-bottom: solid 2px white;\">Highlight News</h4>\n    \n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" [ngStyle]=\"{'background-image': 'url(' + imageUrl(allNews[0].imageCover) + ')'}\">\n                <div class=\"cover-background\" style=\"background-color: rgba(0,0,0,0.5);\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"col-md-12 slider-typography text-center text-md-left\">\n                            <div class=\"slider-text-middle-main\">\n                                <div class=\"slider-text-middle\">\n\n                                    <h6 class=\"alt-font text-white font-weight-400 letter-spacing-minus-1 line-height-80 width-55 margin-10px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">Highlight News</h6>\n\n                                    <h5 class=\"alt-font text-white font-weight-700 letter-spacing-minus-1 line-height-80 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">{{allNews[0]?.title}}</h5>\n    \n                                    <p class=\"text-white text-large margin-four-bottom width-40 lg-width-50 md-width-60 sm-width-100 sm-margin-15px-bottom\">{{allNews[0]?.summary}}</p>\n    \n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" [ngStyle]=\"{'background-image': 'url(' + imageUrl(allNews[1].imageCover) + ')'}\">\n                <div class=\"cover-background\" style=\"background-color: rgba(0,0,0,0.5);\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"col-md-12 slider-typography text-center text-md-left\">\n                            <div class=\"slider-text-middle-main\">\n                                <div class=\"slider-text-middle\">\n                                    <h6 class=\"alt-font text-white font-weight-400 letter-spacing-minus-1 line-height-80 width-55 margin-10px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">Highlight News</h6>\n\n                                    <h5 class=\"alt-font text-white font-weight-700 letter-spacing-minus-1 line-height-80 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">{{allNews[1]?.title}}</h5>\n    \n                                    <p class=\"text-white text-large margin-four-bottom width-40 lg-width-50 md-width-60 sm-width-100 sm-margin-15px-bottom\">{{allNews[1]?.summary}}</p>\n    \n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" [ngStyle]=\"{'background-image': 'url(' + imageUrl(allNews[2].imageCover) + ')'}\">\n                <div class=\"cover-background\" style=\"background-color: rgba(0,0,0,0.5);\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"col-md-12 slider-typography text-center text-md-left\">\n                            <div class=\"slider-text-middle-main\">\n                                <div class=\"slider-text-middle\">\n                                    <h6 class=\"alt-font text-white font-weight-400 letter-spacing-minus-1 line-height-80 width-55 margin-10px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">Highlight News</h6>\n\n                                    <h5 class=\"alt-font text-white font-weight-700 letter-spacing-minus-1 line-height-80 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">{{allNews[2]?.title}}</h5>\n    \n                                    <p class=\"text-white text-large margin-four-bottom width-40 lg-width-50 md-width-60 sm-width-100 sm-margin-15px-bottom\">{{allNews[2]?.summary}}</p>\n    \n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n            \n        </div>\n        <!-- start slider pagination -->\n        <div class=\"swiper-pagination swiper-full-screen-pagination\"></div>\n        <!-- end slider pagination -->\n    </div>\n</section>\n<!-- end slider section --> \n\n<!-- start masonry portfolio section -->\n<section id=\"all-news\" class=\"p-0 wow fadeIn\">\n    <div class=\"container-fluid padding-five-all\" style=\"padding-top: 20vh;\">\n        <div class=\"row m-0\">\n            <div class=\"filter-content overflow-hidden w-100\">\n                <div class=\"col-12 margin-four-bottom lg-margin-six-bottom md-margin-40px-bottom sm-margin-30px-bottom sm-no-padding-lr text-center text-md-center\">\n                  <h4 class=\"alt-font text-dark text-center text-lg-center md-width-70 mx-auto mx-lg-0 md-no-margin-bottom sm-width-100 font-weight-700\">Daftar Berita</h4>\n                </div>\n                \n                <div class=\"container text-center\">\n                    <div class=\"row text-center\">\n                        <!-- start portfolio item -->\n                        <div class=\"col-12 col-sm-12 col-md-6 col-lg-4 text-center\" *ngFor=\"let data of allNews\">\n                            <div (click)=\"getData(data)\" class=\"grid-item wow zoomIn\">\n                                <a href=\"artikel/{{data._id}}\" target=\"_blank\">\n                                    <figure>\n                                        <img class=\"image-cropping\" [src]=\"formatImageSrc(data?.imageCover)\" alt=\"\" style=\"width: 300px; height: 300px\"/>\n                                        <figcaption style=\"margin-bottom: 3vh;\">\n                                            <div class=\"portfolio-hover-main text-center\">\n                                                <div class=\"portfolio-hover-box vertical-align-bottom\">\n                                                    <div class=\"portfolio-hover-content position-relative last-paragraph-no-margin text-center\" style=\"margin-bottom: 5vh;\">\n\n                                                        <div class=\"bg-deep-pink margin-25px-bottom separator-line-horrizontal-medium-light2\"></div>\n\n                                                        <span class=\"font-weight-600 line-height-normal alt-font text-dark text-uppercase display-block\">{{data.title}}</span>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </figcaption>\n                                    </figure>                             \n                                </a>\n                            </div>\n                        </div>\n                        <!-- end portfolio item -->\n                    </div>    \n                </div>            \n            </div>\n        </div>\n    </div>\n</section>\n<!-- end masonry portfolio section -->\n\n<!-- start blockquote style 02 section -->\n<section class=\"wow fadeIn bg-light-gray\">\n    <div class=\"container\">\n        <div class=\"row text-center justify-content-center\">\n            <div class=\"col-12 col-lg-8\">\n                <!-- start blockquote -->\n                <h5 class=\"text-extra-dark-gray margin-50px-bottom md-margin-20px-bottom alt-font\">\n                  <i class=\"fas fa-quote-left text-light-gray icon-large margin-15px-bottom\"></i>\n                  Apa yang mendefinisikan siapa kita, tidak ada artinya dibandingkan apa yang menyatukan kita.\n                  <i class=\"fas fa-quote-right text-right text-light-gray icon-large margin-15px-bottom\"></i>\n                </h5>\n                <!-- end blockquote -->\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end blockquote style 02 section -->\n\n<!-- start Event Timeline section --> \n<section class=\"wow fadeIn\">\n    <div class=\"container\" style=\"height: 50vh;\"> \n        <div class=\"row\"> \n            <div class=\"col-12\">\n                <div class=\"swiper-number-pagination swiper-container black-move\">\n                    <div class=\"bg-transparent-white opacity-full-dark z-index-5 d-none d-lg-block\"></div>\n                    <div class=\"col-12 col-lg-12 text-center\">\n                        <div class=\"position-relative overflow-hidden w-100\">\n                            <span class=\"text-large text-outside-line-full alt-font font-weight-600 text-uppercase\">Timeline Terdekat</span>\n                        </div>\n                    </div>\n                    <div class=\"swiper-wrapper\">\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[0]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[0]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[0]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[1]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[1]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[1]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\" *ngIf=\"timelines[2]\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[2]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[2]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[2]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                    </div>\n                    <div class=\"swiper-pagination swiper-number\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end Event Timeline section --> \n\n<!-- start slider section -->\n<section id=\"homepage-1\" class=\"no-padding main-slider mobile-height wow fadeIn\" style=\"max-height: 40vh;\">\n    <div class=\"swiper-container width-100\">\n        <div class=\"swiper-wrapper\">\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" style=\"background-image:url('../../../assets/img/galeri/mpkmb-7.webp');\">\n                <div style=\"background-color: rgba(0,0,0,0.5)\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"row\">\n                            <div class=\"col-md-10 slider-typography text-center text-md-left\">\n                                <div class=\"slider-text-middle-main\">\n                                    <div class=\"slider-text-middle\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n\n        </div>\n    </div>\n</section>\n<!-- end slider section --> \n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/buku/body-buku/body-buku.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/buku/body-buku/body-buku.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start parallax hero section -->\r\n<section class=\"wow fadeIn p-0 parallax sm-background-image-center desktop-view\" data-stellar-background-ratio=\"0.5\" style=\"background-image: url('../../../assets/img/web/Buku/bg-buku.jpg')\">\r\n  <div class=\"opacity-extra-medium bg-black\"></div>\r\n  <div class=\"container-fluid position-relative full-screen\">\r\n      <div class=\"slider-typography\" style=\"height: 100vh;\">\r\n          <div class=\"slider-text-middle-main\">\r\n              <div class=\"slider-text-bottom\">\r\n                  <div class=\"col-12 col-xl-6 col-lg-7 bg-deep-pink-opacity width-350px sm-height-100px md-height-250px lg-height-200px lg-padding-seven-lr padding-five-tb position-pc\">\r\n  \r\n                      <h1 class=\"font-weight-600 alt-font text-white-2 width-95 md-width-100\">Buku</h1>\r\n  \r\n                      <div class=\"box-separator-line width-180px bg-white lg-width-120px md-width-90px d-none d-lg-block\" style=\"margin-top: 1vh;\"></div>\r\n                                            \r\n                      <p class=\"text-large font-weight-300 text-white-2 width-75 lg-width-85 md-width-95 sm-width-100 d-none d-md-block\">MPKMB IPB 56</p>\r\n                  </div> \r\n                </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- end parallax hero section -->\r\n\r\n<!-- start page title section -->\r\n<section class=\"p-0 one-third-screen position-relative wow fadeIn mobile-view\">\r\n    <div class=\"opacity-medium bg-extra-dark-gray z-index-0\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-12 one-third-screen d-flex flex-column justify-content-center page-title-large text-center\">\r\n                <!-- start sub title -->\r\n                <span class=\"d-block text-white-2 opacity6 margin-10px-bottom alt-font\">MPKMB IPB 56</span>\r\n                <!-- end sub title -->\r\n\r\n                <!-- start page title -->\r\n                <h1 class=\"alt-font text-white-2 font-weight-600 width-55 md-width-80 sm-width-100 mx-auto mb-0\">Buku</h1>\r\n                <!-- end page title -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"swiper-auto-fade swiper-container z-index-minus2 position-absolute top-0 w-100 h-100\">\r\n        <div class=\"swiper-wrapper\">\r\n\r\n            <!-- start slider item -->\r\n            <div class=\"swiper-slide cover-background one-third-screen\" style=\"background-image:url('../../../assets/img/web/Buku/bg-buku.jpg');\"></div>\r\n            <!-- end slider item -->\r\n\r\n        </div>\r\n        <!-- <div class=\"swiper-pagination swiper-auto-pagination d-none\"></div> -->\r\n    </div>\r\n</section>\r\n<!-- end page title section -->\r\n\r\n<!-- start feature box section -->\r\n<section class=\"p-0 wow fadeIn bg-extra-dark-gray\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-lg-6 cover-background md-height-500px sm-height-350px wow fadeIn\" style=\"background-image:url('../../../assets/img/web/Buku/bg-spesifikasi.webp'); object-fit: cover\"><div class=\"sm-height-400px\"></div></div>\r\n\r\n            <div class=\"col-12 col-lg-6 padding-five-tb padding-five-half-lr lg-padding-50px-tb md-padding-70px-tb md-padding-15px-lr wow fadeIn\">\r\n              <div class=\"row m-0\">\r\n\r\n                <!-- Deskripsi Buku Start -->\r\n                <div class=\"col-12 margin-four-bottom lg-margin-six-bottom md-margin-40px-bottom sm-margin-30px-bottom sm-no-padding-lr text-center text-md-center\">\r\n                  <h4 class=\"alt-font text-white-2 text-center text-lg-center md-width-70 mx-auto mx-lg-0 md-no-margin-bottom sm-width-100 font-weight-700\">Jejak Mimpi Anak Negeri</h4>\r\n                </div>\r\n\r\n                <!-- start feature box item -->\r\n                <div class=\"col-12 col-xl-12 col-lg-12 col-md-12 margin-six-bottom md-margin-30px-bottom sm-no-padding last-paragraph-no-margin text-center text-md-left\">\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">Deskripsi Buku</span></div><br>\r\n                    <p>Sebuah antologi cerpen karya mahasiswa baru Institut Pertanian Bogor Angkatan 56 yang menceritakan perjuangan-perjuangan mereka masuk dalam kampus pertanian terbaik di Indonesia. Buku Jejak Mimpi Anak Negeri berisi 30 kisah inspiratif dari mahasiswa baru Institut Pertanian Bogor dari berbagai jalur masuk. Buku ini adalah salah satu inovasi terbaru  dalam Masa Pengenalan Kampus Mahasiswa Baru Institut Pertanian Bogor 2019.</p>\r\n                </div>\r\n                <!-- end feature box item -->\r\n                <!-- Deskripsi Buku End -->\r\n\r\n                <!-- Spesifikasi Start -->\r\n                <div class=\"col-12 margin-four-bottom lg-margin-six-bottom md-margin-40px-bottom sm-margin-30px-bottom sm-no-padding-lr text-center text-md-center\">\r\n                  <h4 class=\"alt-font text-white-2 text-center text-lg-center md-width-70 mx-auto mx-lg-0 md-no-margin-bottom sm-width-100 font-weight-700\">Spesifikasi</h4>\r\n                </div>\r\n\r\n                <!-- start feature box item -->\r\n                <div class=\"col-6 col-xl-6 col-lg-6 col-md-6 margin-six-bottom md-margin-30px-bottom sm-no-padding last-paragraph-no-margin text-center text-md-left\">\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">01.</span>Ukuran Buku</div>\r\n                    <p>21 x 14 cm</p>\r\n\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">03.</span>Jenis Kertas</div>\r\n                    <p>Paper Book</p>\r\n\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">05.</span>Jumlah Cerpen</div>\r\n                    <p>30 Cerpen Anak Negeri</p>\r\n                      \r\n                </div>\r\n                <!-- end feature box item -->\r\n\r\n                <!-- start feature box item -->\r\n                <div class=\"col-6 col-xl-6 col-lg-6 col-md-6 margin-six-bottom md-margin-30px-bottom sm-no-padding last-paragraph-no-margin text-center text-md-left\">\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">02.</span>Cover</div>\r\n                    <p>Spot UV Emboss</p>\r\n\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">04.</span>Harga</div>\r\n                    <p>Rp 55.000,00</p>\r\n                </div>\r\n                <!-- end feature box item -->\r\n                <!-- Spesifikasi End -->\r\n\r\n                <!-- Pembayaran Start -->\r\n                <div class=\"col-12 margin-four-bottom lg-margin-six-bottom md-margin-40px-bottom sm-margin-30px-bottom sm-no-padding-lr text-center text-md-center\">\r\n                  <h4 class=\"alt-font text-white-2 text-center text-lg-center md-width-70 mx-auto mx-lg-0 md-no-margin-bottom sm-width-100 font-weight-700\">Pembayaran</h4>\r\n                </div>\r\n\r\n                <!-- start feature box item -->\r\n                <div class=\"col-6 col-xl-6 col-lg-6 col-md-6 margin-six-bottom md-margin-30px-bottom sm-no-padding last-paragraph-no-margin text-center text-md-left\">\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">01.</span>No.Rekening (BCA)</div>\r\n                    <p>738-0537812 (A.N. Deviana Rosalia)</p>\r\n\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">03.</span>Konfirmasi</div>\r\n                    <p>0813-1602-3949 (Deviana Rosalia)</p>\r\n\r\n                </div>\r\n                <!-- end feature box item -->\r\n\r\n                <!-- start feature box item -->\r\n                <div class=\"col-6 col-xl-6 col-lg-6 col-md-6 margin-six-bottom md-margin-30px-bottom sm-no-padding last-paragraph-no-margin text-center text-md-left\">\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">02.</span>No.Rekening (BRI)</div>\r\n                    <p>4799-01-017887 (A.N. Deviana Rosalia)</p>\r\n                </div>\r\n                <!-- end feature box item -->\r\n                <!-- Pembayaran End -->\r\n\r\n                <!-- Format Konfirmasi Start -->\r\n                <div class=\"col-12 margin-four-bottom lg-margin-six-bottom md-margin-40px-bottom sm-margin-30px-bottom sm-no-padding-lr text-center text-md-center\">\r\n                  <h4 class=\"alt-font text-white-2 text-center text-lg-center md-width-70 mx-auto mx-lg-0 md-no-margin-bottom sm-width-100 font-weight-700\">Format Konfirmasi</h4>\r\n                </div>\r\n\r\n                <!-- start feature box item -->\r\n                <div class=\"col-12 col-xl-12 col-lg-12 col-md-12 margin-six-bottom md-margin-30px-bottom sm-no-padding last-paragraph-no-margin text-center text-md-left\">\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">01.</span>Mahasiswa Baru IPB 56</div>\r\n                    <p>Nama_Sanja_Jayantara + screenshot bukti transfer / bukti pembayaran</p>\r\n\r\n                    <div class=\"text-light-gray margin-10px-bottom md-margin-5px-bottom alt-font\"><span class=\"text-deep-pink margin-15px-right float-left text-large d-block d-md-inline-block sm-width-100\">02.</span>Umum</div>\r\n                    <p>Nama_Nomor Telepon + screenshot bukti transfer / bukti pembayaran</p>\r\n\r\n                </div>\r\n                <!-- end feature box item -->\r\n                <!-- Format Konfirmasi End -->\r\n\r\n              </div>\r\n            </div> \r\n            \r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end feature box section -->\r\n\r\n<!-- start recent work section -->\r\n<section id=\"homepage-3\" class=\"bg-light-gray wow fadeIn\">\r\n  <div class=\"container\">\r\n      <div class=\"row justify-content-center\">\r\n          <div class=\"col-12 col-xl-5 col-md-6 md-margin-40px-bottom sm-margin-30px-bottom text-center\">\r\n              <h5 class=\"alt-font text-extra-dark-gray font-weight-600 mb-0\">Pilihan Buku</h5>\r\n              <h5 class=\"alt-font text-extra-dark-gray font-weight-600 mb-0\"><s class=\"text-deep-pink\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s></h5>\r\n          </div>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"col-12 p-0 sm-padding-15px-lr\">\r\n              <div class=\"filter-content overflow-hidden\">\r\n                  <ul class=\"portfolio-grid work-3col gutter-large hover-option6 lightbox-portfolio\">\r\n                      <li class=\"grid-sizer\"></li>\r\n\r\n                      <!-- start portfolio item -->\r\n                      <li class=\"grid-item wow zoomIn last-paragraph-no-margin\" data-wow-delay=\"0.4s\">\r\n                          <figure>\r\n                              <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\">\r\n                                <img src=\"http://placehold.it/800x650\" alt=\"\"/>\r\n                              </div>\r\n                          </figure>\r\n                      </li>\r\n                      <!-- end portfolio item -->\r\n\r\n                      <!-- start portfolio item -->\r\n                      <li class=\"grid-item wow zoomIn last-paragraph-no-margin\" data-wow-delay=\"0.4s\">\r\n                              <figure>\r\n                                  <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\">\r\n                                    <img src=\"http://placehold.it/800x650\" alt=\"\"/>\r\n                                  </div>\r\n                              </figure>\r\n                          </li>\r\n                          <!-- end portfolio item -->\r\n  \r\n  \r\n                      <!-- start portfolio item -->\r\n                      <li class=\"grid-item wow zoomIn last-paragraph-no-margin\" data-wow-delay=\"0.4s\">\r\n                          <figure>\r\n                              <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\">\r\n                                <img src=\"http://placehold.it/800x650\" alt=\"\"/>\r\n                              </div>\r\n                          </figure>\r\n                      </li>\r\n                      <!-- end portfolio item -->\r\n\r\n                  </ul>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- end recent work section -->\r\n\r\n<!-- start section -->\r\n<section class=\"wow fadeIn\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-12 col-lg-5 col-md-11 padding-five-right md-margin-5px-bottom text-center text-lg-left md-padding-15px-lr sm-margin-10px-bottom wow fadeIn\">\r\n                <p class=\"alt-font text-deep-pink margin-10px-bottom\">MPKMB Store</p>\r\n                <h5 class=\"alt-font font-weight-600 text-extra-dark-gray\">Lembar Pemesanan</h5>\r\n                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam, nesciunt harum atque, vitae ex saepe odit vero non provident rerum accusamus. Rerum commodi id vel dicta autem pariatur alias?</p> -->\r\n            </div>\r\n\r\n            <div class=\"col-12 col-lg-7 padding-five-lr md-padding-15px-lr\">\r\n                <div class=\"row m-0\">\r\n                  <form [formGroup]=\"orderBuku\" (ngSubmit)=\"postOrder()\">\r\n                      <div class=\"row justify-content-center\">\r\n                          <div class=\"col-12 col-lg-8 wow fadeIn text-center\">\r\n                              <div id=\"success-contact-form-2\" class=\"mx-0\"></div>\r\n                                <input type=\"text\" formControlName=\"fullName\" id=\"fullName\" placeholder=\"Nama Lengkap*\" class=\"input-border-bottom\" required>\r\n\r\n                                <select formControlName=\"faculty\" id=\"faculty\" class=\"input-border-bottom\" required>\r\n                                    <option value=\"\">Fakultas*</option>\r\n                                    <option value=\"FAPERTA\">FAPERTA</option>\r\n                                    <option value=\"FKH\">FKH</option>\r\n                                    <option value=\"FPIK\">FPIK</option>\r\n                                    <option value=\"FAPET\">FAPET</option>\r\n                                    <option value=\"FAHUTAN\">FAHUTAN</option>\r\n                                    <option value=\"FATETA\">FATETA</option>\r\n                                    <option value=\"FMIPA\">FMIPA</option>\r\n                                    <option value=\"FEM\">FEM</option>\r\n                                    <option value=\"FEMA\">FEMA</option>\r\n                                    <option value=\"SB\">SB</option>\r\n                                </select>\r\n\r\n                                <input type=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"E-mail*\" class=\"input-border-bottom\" required>\r\n\r\n                                <input type=\"text\" id=\"contact\" formControlName=\"contact\" placeholder=\"ID Line / WhatsApp*\" class=\"input-border-bottom\" required>\r\n\r\n                                <textarea id=\"items\" formControlName=\"items\" placeholder=\"Barang yang Dipesan*\" class=\"input-border-bottom\" required></textarea>\r\n\r\n                                <button id=\"contact-us-button-2\" [disabled]=\"!orderBuku.valid\" type=\"submit\" class=\"btn btn-dark-gray btn-rounded btn-small no-margin-lr\">Pesan Sekarang</button>\r\n                          </div>\r\n                      </div>\r\n                  </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end section -->\r\n\r\n<!-- start Event Timeline section --> \r\n<section class=\"wow fadeIn\">\r\n    <div class=\"container\" style=\"height: 50vh;\"> \r\n        <div class=\"row\"> \r\n            <div class=\"col-12\">\r\n                <div class=\"swiper-number-pagination swiper-container black-move\">\r\n                    <div class=\"bg-transparent-white opacity-full-dark z-index-5 d-none d-lg-block\"></div>\r\n                    <div class=\"col-12 col-lg-12 text-center\">\r\n                        <div class=\"position-relative overflow-hidden w-100\">\r\n                            <span class=\"text-large text-outside-line-full alt-font font-weight-600 text-uppercase\">Timeline Terdekat</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-wrapper\">\r\n\r\n                        <!-- start slider item -->\r\n                        <div class=\"swiper-slide\">\r\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\r\n                                <div class=\"slider-typography text-left\">\r\n                                    <div class=\"slider-text-middle-main\">\r\n                                        <div class=\"slider-text-middle\">\r\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[0]?.date | date:'dd MMMM yyyy'}}</span>\r\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[0]?.title}}</h5>\r\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[0]?.body}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end slider item -->\r\n\r\n                        <!-- start slider item -->\r\n                        <div class=\"swiper-slide\">\r\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\r\n                                <div class=\"slider-typography text-left\">\r\n                                    <div class=\"slider-text-middle-main\">\r\n                                        <div class=\"slider-text-middle\">\r\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[1]?.date | date:'dd MMMM yyyy'}}</span>\r\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[1]?.title}}</h5>\r\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[1]?.body}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end slider item -->\r\n\r\n                        <!-- start slider item -->\r\n                        <div class=\"swiper-slide\" *ngIf=\"timelines[2]\">\r\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\r\n                                <div class=\"slider-typography text-left\">\r\n                                    <div class=\"slider-text-middle-main\">\r\n                                        <div class=\"slider-text-middle\">\r\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[2]?.date | date:'dd MMMM yyyy'}}</span>\r\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[2]?.title}}</h5>\r\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[2]?.body}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end slider item -->\r\n\r\n                    </div>\r\n                    <div class=\"swiper-pagination swiper-number\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end Event Timeline section --> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/buku/buku.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/buku/buku.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-buku></app-body-buku>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/galeri/body-galeri/body-galeri.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/galeri/body-galeri/body-galeri.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start slider section -->\n<section id=\"homepage-1\" class=\"no-padding main-slider height-100 mobile-height wow fadeIn \">\n    <div class=\"swiper-container height-100 width-100\">\n        <div class=\"swiper-wrapper\">\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" style=\"background-image:url('../../../assets/img/web/Galeri/bg-galeri.jpg');\">\n                <div style=\"background-color: rgba(0,0,0,0.5)\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"row\">\n                            <div class=\"col-md-10 slider-typography text-center text-md-left\">\n                                <div class=\"slider-text-middle-main\">\n                                    <div class=\"slider-text-middle\">\n                                        <h1 class=\"alt-font text-white font-weight-700 letter-spacing-minus-1 line-height-40 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">Galeri</h1>\n\n                                        <h3 class=\"alt-font text-white font-weight-400 letter-spacing-minus-1 line-height-20 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">MPKMB IPB 56</h3>\n                                        \n                                        <p class=\"text-white text-large margin-four-bottom width-40 lg-width-50 md-width-60 sm-width-100 sm-margin-15px-bottom\"><s class=\"text-deep-pink\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s> Bergerak, Bersinergi, Berkarya</p>\n                                        \n                                        <div class=\"btn-dual\">\n                                            <button [ngx-scroll-to]=\"'#homepage-2'\" class=\"btn btn-transparent-white btn-rounded btn-small margin-20px-lr sm-margin-5px-top\" style=\"color: #fccf02\">Selengkapnya -></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n\n        </div>\n    </div>\n</section>\n<!-- end slider section --> \n\n<!-- start slider section -->\n<div id=\"homepage-2\" class=\"bg-black position-relative left-0 top-0 width-100 galeri-web\" style=\"min-height: 100vh;\">\n    <section class=\"p-0\">\n        <div class=\"swiper-bottom-scrollbar-full swiper-container\">\n            <div class=\"swiper-wrapper\">\n\n                <!-- start slider item -->\n                <div class=\"swiper-slide width-550px sm-width-100 sm-height-auto\">\n                    <div class=\"position-relative width-90 height-100 d-flex align-items-center padding-ten-all sm-padding-fifteen-all sm-width-100\">\n                        <div>\n                            <h6 class=\"text-medium-deep-pink text-deep-pink d-block margin-5px-bottom alt-font\">Highlight</h6>\n                            <h4 class=\"text-medium-white font-weight-500 margin-20px-bottom alt-font\"  style=\"color: white;\">Video MPKMB <br>IPB</h4>\n                            <!-- <p class=\"text-large text-justify d-block float-left font-weight-300 width-90 margin-35px-bottom\" style=\"color: white;\">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, nobis, reiciendis labore placeat laudantium aperiam soluta veniam accusamus ea fuga necessitatibus cupiditate aut sint, debitis iste harum! Nihil, sunt doloremque.</p> -->\n                        </div>\n                    </div>\n                </div>\n                <!-- end slider item -->\n\n                <!-- start slider item -->\n                <div *ngFor=\"let video of videos; let i = index\" class=\"swiper-slide width-auto sm-height-auto last-paragraph-no-margin padding-three-all sm-padding-fifteen-all\">\n                    <div class=\"height-100 d-flex align-items-center\">\n                        <div class=\"d-block position-relative\">\n                            <iframe width=\"640\" height=\"480\" [src]=\"videoUrl(i)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"margin: 0% auto;\"></iframe>\n                        </div>\n                        <div class=\"hover-title-box padding-55px-lr width-300px md-width-100 md-padding-20px-lr\">\n                            <div class=\"separator width-60px bg-deep-pink d-none d-xl-inline-block sm-margin-lr-auto\"></div>\n                            <h3 class=\"text-deep-pink font-weight-600 alt-font text-deep-pink-hover\">{{video.title}}</h3>\n                        </div>\n                    </div>\n                </div>\n                <!-- end slider item -->\n\n                <div class=\"swiper-slide width-150px sm-width-100 sm-height-auto\">\n                </div>\n            </div>\n            <!-- start slider swiper pagination -->\n            <div class=\"swiper-scrollbar d-none d-md-inline-block\"></div>\n            <div class=\"swiper-pagination-vertical position-fixed bullet-deep-pink z-index-5\"></div>\n            <!-- end slider swiper pagination -->\n        </div>\n    </section>\n</div>\n<!-- end slider section -->\n\n<!-- start testimonial slider style 02 mobile section -->\n<section id=\"homepage-2\" class=\"parallax wow fadeIn bg-extra-dark-gray galeri-mobile\" data-stellar-background-ratio=\"0.5\">\n  <div class=\"opacity-medium bg-extra-dark-gray\"></div>\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-12 col-lg-7 text-center margin-20px-bottom sm-margin-20px-bottom\">\n              <div class=\"position-relative overflow-hidden w-100\">\n                  <span class=\"text-large text-deep-pink text-outside-line-full alt-font font-weight-600 text-uppercase\">Highlight Video MPKMB</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"swiper-slider-second swiper-container white-move\">\n              <div class=\"swiper-wrapper\">\n\n                  <!-- start testimonial slide item -->\n                  <div *ngFor=\"let video of videos; let i = index\" class=\"swiper-slide\">\n                      <div class=\"row justify-content-center m-0\">\n                          <div class=\"col-12 col-lg-17 col-md-10\">\n                              <div class=\"media-body last-paragraph-no-margin\">\n                                <span class=\"text-white-2 alt-font d-inline-block text-uppercase text-medium margin-15px-top\" style=\"margin-bottom: 5vh;\">{{video.title}}</span>\n                              </div>\n                              <div class=\"media d-block d-md-flex text-center text-md-left align-items-center padding-30px-lr lg-padding-15px-lr width-100 video-container\">\n                                <iframe width=\"640\" height=\"480\" [src]=\"videoUrl(i)\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen style=\"margin: 0% auto;\"></iframe>\n                              </div>\n                          </div>\n                      </div>\n                  </div>  \n                  <!-- end testimonial slide item -->\n\n              </div>\n              <div class=\"swiper-pagination d-none\"></div>\n              <div class=\"swiper-button-next slider-long-arrow-white\"></div>\n              <div class=\"swiper-button-prev slider-long-arrow-white\"></div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- end testimonial slider style 02 mobile section -->\n\n<!-- start tab style 01 section -->\n<section class=\"wow fadeIn\">\n    <div class=\"container tab-style2\">\n        <div class=\"row\">\n            <div class=\"col-12 col-lg-12 text-center margin-40px-bottom sm-margin-20px-bottom\">\n                <div class=\"position-relative overflow-hidden w-100\">\n                    <span class=\"text-deep-pink text-outside-line-full alt-font font-weight-600 text-uppercase margin-20px-bottom\" style=\"font-size: 2em; color: #b07f6f;\">Keep the Memories</span>\n                    <br>\n                    <span class=\"text-extra-dark-gray text-outside-line-full alt-font font-weight-600 text-uppercase margin-20px-bottom\" style=\"font-size: 3em;\">.  .  .  Alive</span>\n                    <br>\n                    <!-- <span class=\"text-justify\">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora porro quisquam eius minus repellat! Iste rerum fugit odio tenetur laboriosam natus neque accusantium nulla explicabo! Asperiores ipsa soluta eligendi itaque.</span> -->\n                </div>\n            </div>\n            <div class=\"col-12\">\n                <!-- start tab navigation -->\n                <ul class=\"nav nav-tabs alt-font text-uppercase text-small text-center font-weight-600 justify-content-center\">\n                    <li class=\"nav-item\" *ngFor=\"let data of categories; let i = index\">\n                        <a class=\"nav-link\" href=\"#tab_sec{{i+1}}\" data-toggle=\"tab\">{{data?.category.name}}</a>\n                    </li>\n                </ul>\n                <!-- end tab navigation -->\n            </div>\n        </div>                                \n        <div class=\"tab-content\">\n\n            <!-- start tab content -->\n            <div class=\"tab-pane fade in active show\" id=\"tab_sec1\">\n                <div class=\"row align-items-center\">\n\n                  <!-- start item -->\n                  <div class=\"col-12 col-md-4 sm-margin-30px-bottom\" *ngFor=\"let data of categories[0].images\">\n                    <figure>\n                        <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\" style=\"margin-bottom: 3vh;\">\n                            <a>\n                                <img [src]=\"imageUrl(data?.url)\" alt=\"\" style=\"width: 375px; height: 300px;\"/>\n                            </a>\n                        </div>\n                    </figure>\n                  </div>\n                  <!-- end item -->\n\n                </div>\n            </div>\n            <!-- end tab content -->\n\n            <!-- start tab content -->\n            <div *ngFor=\"let category of categories; let i = index\" class=\"tab-pane fade in show\" id=\"tab_sec{{i+1}}\">\n                <div class=\"row align-items-center\">\n\n                  <!-- start item -->\n                  <div class=\"col-12 col-md-4 sm-margin-30px-bottom\" *ngFor=\"let data of category.images\">\n                    <figure>\n                        <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\" style=\"margin-bottom: 3vh;\">\n                            <a>\n                                <img [src]=\"imageUrl(data?.url)\" alt=\"\" style=\"width: 375px; height: 300px;\"/>\n                            </a>\n                        </div>\n                    </figure>\n                  </div>\n                  <!-- end item -->\n\n                </div>\n            </div>\n            <!-- end tab content -->\n\n        </div>       \n    </div>\n</section>\n<!-- end tab style 01 section -->\n\n<!-- start Event Timeline section --> \n<section class=\"wow fadeIn\">\n    <div class=\"container\" style=\"height: 50vh;\"> \n        <div class=\"row\"> \n            <div class=\"col-12\">\n                <div class=\"swiper-number-pagination swiper-container black-move\">\n                    <div class=\"bg-transparent-white opacity-full-dark z-index-5 d-none d-lg-block\"></div>\n                    <div class=\"col-12 col-lg-12 text-center\">\n                        <div class=\"position-relative overflow-hidden w-100\">\n                            <span class=\"text-large text-outside-line-full alt-font font-weight-600 text-uppercase\">Timeline Terdekat</span>\n                        </div>\n                    </div>\n                    <div class=\"swiper-wrapper\">\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[0]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[0]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[0]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[1]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[1]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[1]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\" *ngIf=\"timelines[2]\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[2]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[2]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[2]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                    </div>\n                    <div class=\"swiper-pagination swiper-number\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end Event Timeline section --> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/galeri/galeri.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/galeri/galeri.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-galeri></app-body-galeri>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/body/body.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/body/body.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start slider section -->\n<section id=\"homepage-1\" class=\"no-padding main-slider height-100 mobile-height wow fadeIn \">\n    <div class=\"swiper-container height-100 width-100\">\n        <div class=\"swiper-wrapper\">\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background\" style=\"background-image:url('../../../assets/img/galeri/mpkmb-2.webp');\">\n                <div style=\"background-color: rgba(0,0,0,0.5)\">\n                    <div class=\"container position-relative full-screen\">\n                        <div class=\"row\">\n                            <div class=\"col-md-11 slider-typography text-center text-md-right\">\n                                <div class=\"slider-text-middle-main\">\n                                    <div class=\"slider-text-middle img-mpkmb\">\n                                        <img src=\"../../../assets/img/logo/logo-mpkmb-56.png\" alt=\"logo-mpkmb-56\" style=\"width: 25vw; height: auto;\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-10 slider-typography text-center text-md-left\">\n                                <div class=\"slider-text-middle-main\">\n                                    <div class=\"slider-text-middle\">\n                                        <h1 class=\"alt-font text-white font-weight-700 letter-spacing-minus-1 line-height-40 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">MPKMB</h1>\n\n                                        <h3 class=\"alt-font text-white font-weight-400 letter-spacing-minus-1 line-height-20 width-55 margin-35px-bottom lg-width-60 md-width-70 lg-line-height-auto sm-width-100 sm-margin-15px-bottom\">IPB 56</h3>\n                                        \n                                        <p class=\"text-white text-large margin-four-bottom width-40 lg-width-50 md-width-60 sm-width-100 sm-margin-15px-bottom\"><s class=\"text-deep-pink\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s> Bergerak, Bersinergi, Berkarya</p>\n                                        \n                                        <div class=\"btn-dual\">\n                                            <button [ngx-scroll-to]=\"'#homepage-2'\" class=\"btn btn-transparent-white btn-rounded btn-small margin-20px-lr sm-margin-5px-top\" style=\"color: #fccf02\">Selengkapnya -></button>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>            \n                </div>\n            </div>\n            <!-- end slider item -->\n\n        </div>\n    </div>\n</section>\n<!-- end slider section --> \n\n<!-- start testimonial section -->\n<section id=\"homepage-2\" class=\"bg-extra-dark-gray wow fadeIn\">\n    <div class=\"container\">\n        <div class=\"row position-relative\">\n            <div class=\"swiper-container swiper-pagination-bottom black-move blog-slider swiper-three-slides\">\n                <div class=\"swiper-wrapper\">\n\n                    <!-- start testimonial item -->\n                    <div class=\"col-12 col-lg-4 col-md-6 swiper-slide md-margin-four-bottom\">\n                        <div class=\"margin-half-all text-center\">\n                            <img src=\"../../../assets/img/web/Homepage/bg-carousel-1.jpg\" class=\"margin-15px-bottom\" alt=\"img-1\" style=\"border-radius: 10px; width: 50vw; height: auto;\"/>\n                        </div>\n                    </div>\n                    <!-- end testimonial item -->\n\n                    <!-- start testimonial item -->\n                    <div class=\"col-12 col-lg-4 col-md-6 swiper-slide md-margin-four-bottom\">\n                        <div class=\"margin-half-all text-center\">\n                            <img src=\"../../../assets/img/web/Homepage/bg-carousel-2.jpg\" class=\"margin-15px-bottom\" alt=\"img-1\" style=\"border-radius: 10px; width: 50vw; height: auto;\"/>\n                        </div>\n                    </div>\n                    <!-- end testimonial item -->\n\n                    <!-- start testimonial item -->\n                    <div class=\"col-12 col-lg-4 col-md-6 swiper-slide md-margin-four-bottom\">\n                        <div class=\"margin-half-all text-center\">\n                            <img src=\"../../../assets/img/web/Homepage/bg-carousel-3.jpg\" class=\"margin-15px-bottom\" alt=\"img-1\" style=\"border-radius: 10px; width: 50vw; height: auto;\"/>\n                        </div>\n                    </div>\n                    <!-- end testimonial item -->\n\n                    <!-- start testimonial item -->\n                    <div class=\"col-12 col-lg-4 col-md-6 swiper-slide md-margin-four-bottom\">\n                        <div class=\"margin-half-all text-center\">\n                            <img src=\"../../../assets/img/web/Homepage/bg-carousel-4.jpg\" class=\"margin-15px-bottom\" alt=\"img-1\" style=\"border-radius: 10px; width: 50vw; height: auto;\"/>\n                        </div>\n                    </div>\n                    <!-- end testimonial item -->\n\n                    <!-- start testimonial item -->\n                    <div class=\"col-12 col-lg-4 col-md-6 swiper-slide md-margin-four-bottom\">\n                        <div class=\"margin-half-all text-center\">\n                            <img src=\"../../../assets/img/web/Homepage/bg-carousel-5.jpg\" class=\"margin-15px-bottom\" alt=\"img-1\" style=\"border-radius: 10px; width: 50vw; height: auto;\"/>\n                        </div>\n                    </div>\n                    <!-- end testimonial item -->\n                </div>                        \n                <!-- <div class=\"swiper-pagination swiper-pagination-three-slides h-auto\"></div> -->\n            </div>\n        </div>\n\n        <div class=\"row justify-content-center\">\n            <div class=\"col-5 col-xl-5 col-md-6 margin-eight-bottom md-margin-20px-bottom sm-margin-20px-bottom text-left\">\n                <div class=\"alt-font text-deep-pink margin-5px-bottom text-uppercase text-medium\">Timeline Terdekat</div>\n                <h5 class=\"alt-font text-white font-weight-600 mb-0\">Apa itu MPKMB?</h5>\n            </div>\n            <div class=\"col-7 col-xl-7 col-md-6 text-white margin-eight-bottom md-margin-20px-bottom sm-margin-20px-bottom text-justify\">\n                <p>MPKMB sebagai momentum penyambutan terbesar mahasiswa baru Institut Pertanian Bogor menjadi wadah pertama untuk mengembangkan harapan guna menyiapkan generasi muda di masa depan dengan inovasi dan resolusi budaya orientasi yang lebih bermartabat dan menginspirasi.</p>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end testimonial section -->\n\n<!-- start recent work section -->\n<section id=\"homepage-3\" class=\"bg-light-gray wow fadeIn\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-xl-5 col-md-6 md-margin-40px-bottom sm-margin-30px-bottom text-center\">\n                <h5 class=\"alt-font text-extra-dark-gray font-weight-600 mb-0\">Portal</h5>\n                <h5 class=\"alt-font text-extra-dark-gray font-weight-600 mb-0\"><s class=\"text-deep-pink\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s></h5>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 p-0 sm-padding-15px-lr\">\n                <div class=\"filter-content overflow-hidden\">\n                    <ul class=\"portfolio-grid work-3col gutter-large hover-option6 lightbox-portfolio\">\n                        <li class=\"grid-sizer\"></li>\n\n                        <!-- start portfolio item -->\n                        <li class=\"grid-item wow zoomIn last-paragraph-no-margin\" data-wow-delay=\"0.4s\">\n                            <figure>\n                                <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\">\n                                    <a href=\"buku\">\n                                        <img src=\"../../../assets/img/web/Homepage/bg-portal-buku.jpg\" alt=\"\"/>\n                                    </a>\n                                </div>\n                                <figcaption class=\"bg-white\">\n                                    <div class=\"portfolio-hover-main text-center\">\n                                        <div class=\"portfolio-hover-box align-middle\">\n                                            <div class=\"portfolio-hover-content position-relative\">\n                                                <a href=\"buku\"><span class=\"line-height-normal font-weight-600 text-medium alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block\">Buku</span></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </figcaption>\n                            </figure>\n                        </li>\n                        <!-- end portfolio item -->\n\n                        <!-- start portfolio item -->\n                        <li class=\"grid-item wow zoomIn last-paragraph-no-margin\" data-wow-delay=\"0.4s\">\n                                <figure>\n                                    <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\">\n                                        <a href=\"berita\">\n                                            <img src=\"../../../assets/img/web/Homepage/bg-portal-berita.jpg\" alt=\"\"/>\n                                        </a>\n                                    </div>\n                                    <figcaption class=\"bg-white\">\n                                        <div class=\"portfolio-hover-main text-center\">\n                                            <div class=\"portfolio-hover-box align-middle\">\n                                                <div class=\"portfolio-hover-content position-relative\">\n                                                    <a href=\"berita\"><span class=\"line-height-normal font-weight-600 text-medium alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block\">Berita</span></a>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </figcaption>\n                                </figure>\n                            </li>\n                            <!-- end portfolio item -->\n    \n    \n                        <!-- start portfolio item -->\n                        <li class=\"grid-item wow zoomIn last-paragraph-no-margin\" data-wow-delay=\"0.4s\">\n                            <figure>\n                                <div class=\"portfolio-img bg-deep-pink position-relative text-center overflow-hidden\">\n                                    <a href=\"penugasan\">\n                                        <img src=\"../../../assets/img/web/Homepage/bg-portal-penugasan.jpg\" alt=\"\"/>\n                                    </a>\n                                </div>\n                                <figcaption class=\"bg-white\">\n                                    <div class=\"portfolio-hover-main text-center\">\n                                        <div class=\"portfolio-hover-box align-middle\">\n                                            <div class=\"portfolio-hover-content position-relative\">\n                                                <a href=\"penugasan\"><span class=\"line-height-normal font-weight-600 text-medium alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block\">Penugasan</span></a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </figcaption>\n                            </figure>\n                        </li>\n                        <!-- end portfolio item -->\n\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 col-md-12 col-lg-12\">\n                <div class=\"alt-font text-small text-deep-pink text-uppercase text-small text-justify\" style=\"width: 70%; margin: 3% auto;\">MPKMB kali ini mengangkat 3 nilai, yaitu Bergerak, Bersinergi, Berkarya! Jangan lewatkan keseruannya dan seluruh kegiatannya! Kami tunggu kontribusi Mahasiswa Baru angkatan 56 “Andamaru Jayantara” di Kampus Pertanian terbaik di Indonesia.</div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end recent work section -->\n\n<!-- start Event Timeline section --> \n<section class=\"wow fadeIn\">\n    <div class=\"container\" style=\"height: 50vh;\"> \n        <div class=\"row\"> \n            <div class=\"col-12\">\n                <div class=\"swiper-number-pagination swiper-container black-move\">\n                    <div class=\"bg-transparent-white opacity-full-dark z-index-5 d-none d-lg-block\"></div>\n                    <div class=\"col-12 col-lg-12 text-center\">\n                        <div class=\"position-relative overflow-hidden w-100\">\n                            <span class=\"text-large text-outside-line-full alt-font font-weight-600 text-uppercase\">Timeline Terdekat</span>\n                        </div>\n                    </div>\n                    <div class=\"swiper-wrapper\">\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[0]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[0]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[0]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[1]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[1]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[1]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                        <!-- start slider item -->\n                        <div class=\"swiper-slide\" *ngIf=\"timelines[2]\">\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\n                                <div class=\"slider-typography text-left\">\n                                    <div class=\"slider-text-middle-main\">\n                                        <div class=\"slider-text-middle\">\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[2]?.date | date:'dd MMMM yyyy'}}</span>\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[2]?.title}}</h5>\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[2]?.body}}</span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- end slider item -->\n\n                    </div>\n                    <div class=\"swiper-pagination swiper-number\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end Event Timeline section --> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/footer/footer.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/footer/footer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start footer --> \n<footer class=\"footer-standard-dark bg-extra-dark-gray\"> \n    <div class=\"footer-widget-area padding-five-tb sm-padding-30px-tb\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-6 widget border-right border-color-medium-dark-gray md-no-border-right md-margin-30px-bottom sm-text-center\">\n\n                    <h5 class=\"width-95 sm-width-100\" style=\"color: aliceblue;\">STAY CONNECTED WITH US</h5>\n\n                    <!-- start social media -->\n                    <div class=\"social-icon-style-8 d-inline-block vertical-align-middle\">\n                        <ul class=\"small-icon no-margin-bottom\">\n                            <li>\n                              <a class=\"google text-white-2\" href=\"mailto:mpkmbipb@apps.ipb.ac.id\" target=\"_blank\"><i class=\"fas fa-envelope icon-size\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li>\n                              <a class=\"facebook text-white-2\" href=\"https://wa.me/6281291756453\" target=\"_blank\"><i class=\"fab fa-whatsapp icon-size\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li>\n                              <a class=\"instagram text-white-2\" href=\"https://www.instagram.com/mpkmbipb\" target=\"_blank\"><i class=\"fab fa-instagram icon-size\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li>\n                              <a class=\"google text-white-2\" href=\"https://www.youtube.com/channel/UCdHt1R2mPVPZkP_Zr0eKGFw\" target=\"_blank\"><i class=\"fab fa-youtube icon-size\"></i></a>\n                            </li>\n                            <li>\n                              <a class=\"twitter text-white-2\" href=\"https://twitter.com/mpkmb_ipb\" target=\"_blank\"><i class=\"fab fa-twitter icon-size no-margin-right\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                    <!-- end social media -->\n                </div>\n\n                <div class=\"col-lg-3 col-md-6 widget md-no-border-right text-right sm-text-center\">\n                  <span class=\"text-large font-weight-300 text-white text-right d-block margin-two-top sm-width-100 sm-text-center\">Andamaru Jayantara</span>\n                  <h5 class=\"text-white d-inline-block text-right font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-100 sm-text-center\">MPKMB IPB 56</h5>\n                </div>  \n\n                <div class=\"col-lg-3 col-md-6 widget md-no-border-right sm-text-center\">\n                  <!-- start logo -->\n                  <a href=\"index.html\" class=\"margin-20px-bottom d-inline-block\">\n                    <img class=\"logo-bottom\" src=\"../../../assets/img/logo/logo-mpkmb-56.png\" data-rjs=\"../../../assets/img/logo/logo-mpkmb-56.png\" alt=\"logo\">\n                  </a>\n                  <!-- end logo -->\n                </div>  \n                  \n            </div>\n        </div>\n    </div>\n    <div class=\"bg-dark-footer padding-30px-tb text-center sm-padding-30px-tb\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <!-- start copyright -->\n                <div class=\"col-md-12 text-md-center text-small text-center\">&copy; 2019 <a href=\"http://mpkmb.ipb.ac.id\">Website MPKMB IPB</a> by <a href=\"https://www.codepanda.id\" target=\"_blank\">codepanda.id</a></div>\n                <!-- end copyright -->\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/header/header.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/header/header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- start header -->\n<header>\n    <!-- start navigation -->\n    <nav class=\"navbar navbar-default bootsnav navbar-fixed-top header-dark-transparent background-transparent nav-box-width white-link navbar-expand-lg menu-center\">\n        <div class=\"container-fluid nav-header-container\">\n            <!-- start logo -->\n            <div class=\"col-auto col-lg-2 pl-0\">\n            </div>\n            <!-- end logo -->\n\n            <div class=\"col accordion-menu pr-0 pr-md-3\">\n                <button type=\"button\" class=\"navbar-toggler collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-toggle-1\">\n                    <span class=\"sr-only\">toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <div class=\"navbar-collapse collapse justify-content-center\" id=\"navbar-collapse-toggle-1\">\n                    <ul id=\"accordion\" class=\"nav navbar-nav no-margin alt-font text-normal\" data-in=\"fadeIn\" data-out=\"fadeOut\">\n                        <!-- start menu item -->\n                        <li class=\"dropdown position-pc\">\n                            <a href=\"\">Beranda</a>\n                        </li>\n                        \n                        <li class=\"dropdown position-pc\">\n                            <a href=\"buku\">Buku</a>\n                        </li>\n\n                        <li class=\"dropdown position-pc\">\n                            <a href=\"berita\">Berita</a>\n                        </li>\n\n                        <!-- Start Logo -->\n                        <li class=\"dropdown\">\n                            <div class=\"logo-header-list\">\n                                <a href=\"homepage\" title=\"\">\n                                    <img src=\"../../../assets/ipb.png\" class=\"logo-dark default logo-header\" alt=\"Logo-IPB\">\n                                </a>            \n                            </div>\n                        </li>\n                        <!-- End Logo -->\n\n                        <li class=\"dropdown position-pc\">\n                            <a href=\"penugasan\">Penugasan</a>\n                        </li>\n\n                        <li class=\"dropdown position-pc\">\n                            <a href=\"galeri\">Galeri</a>\n                        </li>\n\n                        <li class=\"dropdown position-pc\">\n                            <a href=\"kontak\">Kontak</a>\n                        </li>\n\n                        <li class=\"dropdown store-show\">\n                            <a href=\"store\">MPKMB Store</a>\n                        </li>\n                        \n                    </ul>\n                </div>\n            </div>\n\n            <div class=\"col-auto col-lg-2 pr-0 text-right btn-dual\" style=\"padding-top: -5vh;\">\n                <a href=\"store\">\n                    <button class=\"btn btn-rounded btn-medium btn-white text-medium border-radius-4 margin-20px-lr sm-margin-5px-top header-social-icon d-none d-md-inline-block\">\n                        <span title=\"MPKMB Store\">MPKMB Store <i class=\"fas fa-shopping-cart\" aria-hidden=\"true\"></i></span>\n                    </button>            \n                </a>\n            </div>\n        </div>\n    </nav>\n    <!-- end navigation --> \n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-homepage></app-body-homepage>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kontak/body-kontak/body-kontak.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kontak/body-kontak/body-kontak.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start page title section -->\n<section class=\"p-0 one-third-screen position-relative wow fadeIn\">\n    <div class=\"opacity-medium bg-extra-dark-gray z-index-0\"></div>\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 one-third-screen d-flex flex-column justify-content-center page-title-large text-center\">\n                <!-- start sub title -->\n                <span class=\"d-block text-white-2 opacity6 margin-10px-bottom alt-font\">MPKMB IPB 56</span>\n                <!-- end sub title -->\n\n                <!-- start page title -->\n                <h1 class=\"alt-font text-white-2 font-weight-600 width-55 md-width-80 sm-width-100 mx-auto mb-0\">Kontak Kami</h1>\n                <!-- end page title -->\n            </div>\n            <div class=\"down-section text-center\">\n                <button [ngx-scroll-to]=\"'#kontak'\" class=\"inner-link btn btn-transparent\">\n                    <i class=\"ti-arrow-down icon-extra-small text-white-2 bg-deep-pink padding-15px-all sm-padding-10px-all rounded-circle\"></i>\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"swiper-auto-fade swiper-container z-index-minus2 position-absolute top-0 w-100 h-100\">\n        <div class=\"swiper-wrapper\">\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background one-third-screen\" style=\"background-image:url('../../../assets/img/web/Kontak/bg-kontak-1.jpg');\"></div>\n            <!-- end slider item -->\n\n        </div>\n        <!-- <div class=\"swiper-pagination swiper-auto-pagination d-none\"></div> -->\n    </div>\n</section>\n<!-- end page title section -->\n\n<!-- start contact section -->\n<section id=\"kontak\" class=\"no-padding bg-extra-dark-gray\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-12 col-lg-6 p-0 cover-background md-height-450px sm-height-350px wow fadeInLeft\" style=\"background: url('../../../assets/img/web/Kontak/bg-kontak-2.jpg')\"></div>\n          <div class=\"col-12 col-lg-6 p-0 wow fadeInRight\">\n              <div class=\"row m-0\">\n\n                  <!-- start contact item -->\n                  <div class=\"col-12 col-md-6 bg-extra-dark-gray d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin\">\n                      <i class=\"icon-map text-deep-pink icon-medium margin-25px-bottom\"></i>\n                      <div class=\"text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom\">Contact Address</div>\n                      <p class=\"width-60 lg-width-80 mx-auto text-medium\">Jl. Raya Dramaga Kampus IPB Dramaga Bogor 16680 Jawa Barat, Indonesia</p>\n                  </div>\n                  <!-- end contact item -->\n\n                  <!-- start contact item -->\n                  <div class=\"col-12 col-md-6 bg-extra-dark-gray d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin\">\n                        <i class=\"icon-envelope text-deep-pink icon-medium margin-25px-bottom\"></i>\n                        <div class=\"text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom\">Email Us</div>\n                          <p class=\"mx-auto text-medium mb-0\">\n                            <a href=\"mailto:mpkmbipb@apps.ipb.ac.id\">mpkmbipb@apps.ipb.ac.id</a>\n                        </p>\n                  </div>\n                  <!-- end contact item -->\n\n                  <!-- start contact item -->\n                  <div class=\"col-12 col-md-12 bg-black d-flex flex-column justify-content-center align-items-center text-center height-350px last-paragraph-no-margin\">\n                      <i class=\"icon-chat text-deep-pink icon-medium margin-25px-bottom\"></i>\n                      <div class=\"text-white-2 text-uppercase alt-font font-weight-600 margin-5px-bottom\">Let's Talk</div>\n                      <p class=\"mx-auto text-medium mb-0\">Phone: +62-896-0703-1184 (Aulia Qital)</p>\n                      <p class=\"mx-auto text-medium mb-0\">Phone: +62-822-1528-6181 (Shafira Nurani Putri)</p>\n                      <p class=\"mx-auto text-medium mb-0\">Phone: +62-812-9175-6453 (Langit Biru)</p>\n                  </div>\n                  <!-- end contact item -->\n\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- end contact section -->        \n\n<!-- start social network -->\n\n<section class=\"wow fadeIn bg-light-gray\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-12 text-center social-style-4\">\n              <span class=\"text-medium font-weight-600 text-uppercase d-block alt-font text-extra-dark-gray margin-30px-bottom\">On social networks</span>\n              <div class=\"social-icon-style-4\">\n                  <ul class=\"margin-30px-top large-icon\">\n                    <li>\n                        <a class=\"google\" href=\"mailto:mpkmbipb@apps.ipb.ac.id\" target=\"_blank\">\n                            <i class=\"fas fa-envelope\"></i>\n                            <span></span>\n                        </a>\n                    </li>\n\n                    <li>\n                        <a class=\"whatsapp\" href=\"https://wa.me/6281291756453\" target=\"_blank\">\n                            <i class=\"fab fa-line\"></i>\n                            <span></span>\n                        </a>\n                    </li>\n\n                    <li>\n                        <a class=\"instagram\" href=\"https://www.instagram.com/mpkmbipb\" target=\"_blank\">\n                            <i class=\"fab fa-instagram\"></i>\n                            <span></span>\n                        </a>\n                    </li>\n\n                    <li>\n                        <a class=\"youtube\" href=\"https://www.youtube.com/channel/UCdHt1R2mPVPZkP_Zr0eKGFw\" target=\"_blank\">\n                            <i class=\"fab fa-youtube\"></i>\n                            <span></span>\n                        </a>\n                    </li>\n\n                    <li>\n                        <a class=\"twitter\" href=\"https://twitter.com/mpkmb_ipb\" target=\"_blank\">\n                            <i class=\"fab fa-twitter\"></i>\n                            <span></span>\n                        </a>\n                    </li>\n                  </ul>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n\n<!-- end social network -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/kontak/kontak.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/kontak/kontak.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-kontak></app-body-kontak>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/penugasan/body-penugasan/body-penugasan.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/penugasan/body-penugasan/body-penugasan.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start parallax hero section -->\r\n<section class=\"wow fadeIn p-0 parallax sm-background-image-center desktop-view\" data-stellar-background-ratio=\"0.5\" style=\"background-image: url('../../../assets/img/web/Penugasan/bg-penugasan.jpg')\">\r\n  <div class=\"opacity-extra-medium bg-black\"></div>\r\n  <div class=\"container-fluid position-relative full-screen\">\r\n      <div class=\"slider-typography\" style=\"height: 100vh;\">\r\n          <div class=\"slider-text-middle-main\">\r\n              <div class=\"slider-text-bottom\">\r\n                  <div class=\"col-12 col-xl-6 col-lg-7 bg-deep-pink-opacity width-400px sm-height-100px md-height-250px lg-height-200px lg-padding-seven-lr padding-five-tb position-pc\">\r\n  \r\n                      <h4 class=\"font-weight-600 alt-font text-white-2 width-95 md-width-100\">Penugasan</h4>\r\n  \r\n                      <div class=\"box-separator-line width-180px bg-white lg-width-120px md-width-90px d-none d-lg-block\" style=\"margin-top: -1vh;\"></div>\r\n\r\n                      <p class=\"text-large font-weight-300 text-white-2 width-75 lg-width-85 md-width-95 sm-width-100 d-none d-md-block\">MPKMB IPB 56</p>\r\n                  </div> \r\n                </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- end parallax hero section -->\r\n\r\n<!-- start page title section -->\r\n<section class=\"p-0 one-third-screen position-relative wow fadeIn mobile-view\">\r\n    <div class=\"opacity-medium bg-extra-dark-gray z-index-0\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-12 one-third-screen d-flex flex-column justify-content-center page-title-large text-center\">\r\n                <!-- start sub title -->\r\n                <span class=\"d-block text-white-2 opacity6 margin-10px-bottom alt-font\">MPKMB IPB 56</span>\r\n                <!-- end sub title -->\r\n\r\n                <!-- start page title -->\r\n                <h1 class=\"alt-font text-white-2 font-weight-600 width-55 md-width-80 sm-width-100 mx-auto mb-0\">Penugasan</h1>\r\n                <!-- end page title -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"swiper-auto-fade swiper-container z-index-minus2 position-absolute top-0 w-100 h-100\">\r\n        <div class=\"swiper-wrapper\">\r\n\r\n            <!-- start slider item -->\r\n            <div class=\"swiper-slide cover-background one-third-screen\" style=\"background-image:url('../../../assets/img/web/Penugasan/bg-penugasan.jpg');\"></div>\r\n            <!-- end slider item -->\r\n\r\n        </div>\r\n        <!-- <div class=\"swiper-pagination swiper-auto-pagination d-none\"></div> -->\r\n    </div>\r\n</section>\r\n<!-- end page title section -->\r\n\r\n<!-- start tab style 01 section -->\r\n<section class=\"wow fadeIn\">\r\n    <div class=\"container tab-style2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-12\">\r\n                <!-- start tab navigation -->\r\n                <ul class=\"nav nav-tabs alt-font text-uppercase text-small text-center font-weight-600 justify-content-center\">\r\n                    <li class=\"nav-item\" *ngFor=\"let data of categories; let i = index\">\r\n                        <a class=\"nav-link\" href=\"#tab_sec{{i+1}}\" data-toggle=\"tab\">{{data?.category.name}}</a>\r\n                    </li>\r\n                </ul>\r\n                <!-- end tab navigation -->\r\n            </div>\r\n        </div>                                \r\n        <div class=\"tab-content\">\r\n\r\n            <!-- start tab content -->\r\n            <div class=\"tab-pane fade in active show\" id=\"tab_sec1\">\r\n                <div class=\"row align-items-center\">\r\n\r\n                  <!-- start item -->\r\n                  <div class=\"col-12 col-md-4 sm-margin-30px-bottom\" *ngFor=\"let data of categories[0]?.tasks\">\r\n                    <figure>\r\n                        <div class=\"portfolio-img bg-white position-relative text-center overflow-hidden\">\r\n                            <a>\r\n                                <img [src]=\"formatImageSrc(data?.img)\" alt=\"\" style=\"width: 375px; height: 300px;\"/>\r\n                            </a>\r\n                        </div>\r\n                        <figcaption class=\"bg-white\" style=\"padding-top: 3vh;\">\r\n                            <div class=\"portfolio-hover-main text-center\">\r\n                                <div class=\"portfolio-hover-box align-middle\">\r\n                                    <div class=\"portfolio-hover-content position-relative\">\r\n                                        <a href=\"{{data?.url}}\" target=\"_blank\">\r\n                                          <span class=\"line-height-normal font-weight-600 text-medium alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block\">{{data?.title}}</span>\r\n                                          <p>{{data?.description}}<br><span class=\"text-deep-pink\">Cek Disini</span></p>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </figcaption>\r\n                    </figure>\r\n                  </div>\r\n                  <!-- end item -->\r\n\r\n                </div>\r\n            </div>\r\n            <!-- end tab content -->\r\n\r\n            <!-- start tab content -->\r\n            <div *ngFor=\"let categories of categories; let i = index\" class=\"tab-pane fade in show\" id=\"tab_sec{{i+1}}\">\r\n                <div class=\"row align-items-center\">\r\n\r\n                  <!-- start item -->\r\n                  <div class=\"col-12 col-md-4 sm-margin-30px-bottom\" *ngFor=\"let data of categories.tasks\">\r\n                    <figure>\r\n                        <div class=\"portfolio-img bg-white position-relative text-center overflow-hidden\">\r\n                            <a>\r\n                                <img [src]=\"formatImageSrc(data?.img)\" alt=\"\" style=\"width: 375px; height: 300px;\"/>\r\n                            </a>\r\n                        </div>\r\n                        <figcaption class=\"bg-white\" style=\"padding-top: 3vh;\">\r\n                            <div class=\"portfolio-hover-main text-center\">\r\n                                <div class=\"portfolio-hover-box align-middle\">\r\n                                    <div class=\"portfolio-hover-content position-relative\">\r\n                                        <a href=\"{{data?.url}}\" target=\"_blank\">\r\n                                          <span class=\"line-height-normal font-weight-600 text-medium alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block\">{{data?.title}}</span>\r\n                                          <p>{{data?.description}}<br><span class=\"text-deep-pink\">Cek Disini</span></p>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </figcaption>\r\n                    </figure>\r\n                  </div>\r\n                  <!-- end item -->\r\n\r\n                </div>\r\n            </div>\r\n            <!-- end tab content -->\r\n            \r\n        </div>       \r\n    </div>\r\n</section>\r\n<!-- end tab style 01 section -->\r\n\r\n<!-- start blockquote style 02 section -->\r\n<section class=\"wow fadeIn bg-light-gray\">\r\n    <div class=\"container\">\r\n        <div class=\"row text-center justify-content-center\">\r\n            <div class=\"col-12 col-lg-8\">\r\n                <!-- start blockquote -->\r\n                <h5 class=\"text-extra-dark-gray margin-50px-bottom md-margin-20px-bottom alt-font\">\r\n                  <i class=\"fas fa-quote-left text-light-gray icon-large margin-15px-bottom\"></i>\r\n                  Apa yang mendefinisikan siapa kita, tidak ada artinya dibandingkan apa yang menyatukan kita.\r\n                  <i class=\"fas fa-quote-right text-right text-light-gray icon-large margin-15px-bottom\"></i>\r\n                </h5>\r\n                <!-- end blockquote -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end blockquote style 02 section -->\r\n\r\n<!-- start Event Timeline section --> \r\n<section class=\"wow fadeIn\">\r\n    <div class=\"container\" style=\"height: 50vh;\"> \r\n        <div class=\"row\"> \r\n            <div class=\"col-12\">\r\n                <div class=\"swiper-number-pagination swiper-container black-move\">\r\n                    <div class=\"bg-transparent-white opacity-full-dark z-index-5 d-none d-lg-block\"></div>\r\n                    <div class=\"col-12 col-lg-12 text-center\">\r\n                        <div class=\"position-relative overflow-hidden w-100\">\r\n                            <span class=\"text-large text-outside-line-full alt-font font-weight-600 text-uppercase\">Timeline Terdekat</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"swiper-wrapper\">\r\n\r\n                        <!-- start slider item -->\r\n                        <div class=\"swiper-slide\">\r\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\r\n                                <div class=\"slider-typography text-left\">\r\n                                    <div class=\"slider-text-middle-main\">\r\n                                        <div class=\"slider-text-middle\">\r\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[0]?.date | date:'dd MMMM yyyy'}}</span>\r\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[0]?.title}}</h5>\r\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[0]?.body}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end slider item -->\r\n\r\n                        <!-- start slider item -->\r\n                        <div class=\"swiper-slide\">\r\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\r\n                                <div class=\"slider-typography text-left\">\r\n                                    <div class=\"slider-text-middle-main\">\r\n                                        <div class=\"slider-text-middle\">\r\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[1]?.date | date:'dd MMMM yyyy'}}</span>\r\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[1]?.title}}</h5>\r\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[1]?.body}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end slider item -->\r\n\r\n                        <!-- start slider item -->\r\n                        <div class=\"swiper-slide\" *ngIf=\"timelines[2]\">\r\n                            <div class=\"slider-half-small-screen position-relative bg-white\">\r\n                                <div class=\"slider-typography text-left\">\r\n                                    <div class=\"slider-text-middle-main\">\r\n                                        <div class=\"slider-text-middle\">\r\n                                            <span class=\"text-extra-large font-weight-300 text-deep-pink d-block w-50 sm-width-65\">{{timelines[2]?.date | date:'dd MMMM yyyy'}}</span>\r\n                                            <h5 class=\"text-extra-dark-gray w-50 d-inline-block font-weight-300 letter-spacing-minus-1 lg-width-70 sm-width-80\">{{timelines[2]?.title}}</h5>\r\n                                            <span class=\"text-medium font-weight-300 text-extra-dark-gray d-block w-50 sm-width-65\">{{timelines[2]?.body}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- end slider item -->\r\n\r\n                    </div>\r\n                    <div class=\"swiper-pagination swiper-number\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- end Event Timeline section --> \r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/penugasan/penugasan.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/penugasan/penugasan.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-penugasan></app-body-penugasan>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/body-store/body-store.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/body-store/body-store.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start page title section -->\n<section class=\"p-0 one-third-screen position-relative wow fadeIn height-100\">\n    <div class=\"opacity-medium bg-extra-dark-gray z-index-0\"></div>\n    <div class=\"swiper-auto-fade swiper-container z-index-minus2 position-absolute top-0 w-100 height-100\">\n        <div class=\"swiper-wrapper\">\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background one-third-screen\" style=\"background-image:url('../../../assets/img/web/MPKMB Store/bg-store-1.jpg'); width: 100vw; height: auto;\"></div>\n            <!-- end slider item -->\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background one-third-screen\" style=\"background-image:url('../../../assets/img/web/MPKMB Store/bg-store-2.jpg'); width: 100vw; height: auto;\"></div>\n            <!-- end slider item -->\n\n            <!-- start slider item -->\n            <div class=\"swiper-slide cover-background one-third-screen\" style=\"background-image:url('../../../assets/img/web/MPKMB Store/bg-store-3.jpg'); width: 100vw; height: auto;\"></div>\n            <!-- end slider item -->\n        </div>\n        <!-- <div class=\"swiper-pagination swiper-auto-pagination d-none\"></div> -->\n    </div>\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-12 one-third-screen d-flex flex-column justify-content-center page-title-large text-center\">\n                <!-- start sub title -->\n                <p class=\"d-block text-white-2 font-weight-700 alt-font\" style=\"font-size: 6em; margin-bottom: 10vh;\">MPKMB</p>\n                <!-- end sub title -->\n\n                <!-- start page title -->\n                <p class=\"alt-font text-white-2 font-weight-300 width-55 md-width-80 sm-width-100 mx-auto mb-0\" style=\"font-size: 4em;\">STORE</p>\n                <!-- end page title -->\n\n                <!-- start description -->\n                <p class=\"alt-font text-white-2 font-weight-300 width-55 md-width-80 sm-width-100 mx-auto mb-0\" style=\"font-size: 1.25em; margin-top: 5vh\"><s class=\"text-deep-pink\" style=\"font-size: 1.5em;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</s> Bergerak, Bersinergi, Berkarya</p>\n                <!-- end description -->\n\n            </div>\n\n            <div class=\"down-section text-center\">\n              <button [ngx-scroll-to]=\"'#daftar-barang'\" class=\"inner-link btn btn-transparent scroll-down-mobile\">\n                <i class=\"ti-arrow-down icon-extra-small text-white-2 bg-deep-pink padding-15px-all sm-padding-10px-all rounded-circle\"></i>\n              </button>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end page title section -->\n\n<!-- start tab style 01 section -->\n<section id=\"daftar-barang\" class=\"wow fadeIn\">\n    <div class=\"container tab-style2\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <!-- start tab navigation -->\n                <ul class=\"nav nav-tabs alt-font text-uppercase text-small text-center font-weight-600 justify-content-center\">\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#tab_sec1\" data-toggle=\"tab\">Merchandise MPKMB</a>\n                    </li>\n                </ul>\n                <!-- end tab navigation -->\n            </div>\n        </div>                                \n        <div class=\"tab-content\">\n\n            <!-- start tab content -->\n            <div class=\"tab-pane fade in active show\" id=\"tab_sec1\">\n                <div class=\"row align-items-center\">\n\n                  <!-- start item -->\n                  <div class=\"col-lg-4 col-md-6 col-sm-12 sm-margin-30px-bottom\" *ngFor=\"let data of stores\">\n                    <figure>\n                        <div class=\"portfolio-img bg-white position-relative text-center overflow-hidden\">\n                            <a>\n                                <img class=\"image-cropping\" [src]=\"formatImageSrc(data.image)\" alt=\"\" style=\"width: 375px; height: 300px;\"/>\n                            </a>\n                        </div>\n                        <figcaption class=\"bg-white\" style=\"padding-top: 3vh;\">\n                            <div class=\"portfolio-hover-main text-center\">\n                                <div class=\"portfolio-hover-box align-middle\">\n                                    <div class=\"portfolio-hover-content position-relative\">\n                                        <a target=\"_blank\">\n                                          <span class=\"line-height-normal font-weight-600 text-medium alt-font margin-5px-bottom text-extra-dark-gray text-uppercase d-block\">{{data?.title}}</span>\n                                          <p>{{data?.desc}}<br><span class=\"text-deep-pink\">Rp. {{formatPrice(data?.price)}} ,00</span></p>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n                        </figcaption>\n                    </figure>\n                  </div>\n                  <!-- end item -->\n\n                </div>\n            </div>\n            <!-- end tab content -->\n\n        </div>       \n    </div>\n</section>\n<!-- end tab style 01 section -->\n\n<!-- start section -->\n<section class=\"wow fadeIn\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-12 col-lg-5 col-md-11 padding-five-right md-margin-5px-bottom text-center text-lg-left md-padding-15px-lr sm-margin-10px-bottom wow fadeIn\">\n                <p class=\"alt-font text-deep-pink margin-10px-bottom\">MPKMB Store</p>\n                <h5 class=\"alt-font font-weight-600 text-extra-dark-gray\">Lembar Pemesanan</h5>\n                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam, nesciunt harum atque, vitae ex saepe odit vero non provident rerum accusamus. Rerum commodi id vel dicta autem pariatur alias?</p> -->\n            </div>\n\n            <div class=\"col-12 col-lg-7 padding-five-lr md-padding-15px-lr\">\n                <div class=\"row m-0\">\n                  <form [formGroup]=\"orderItem\" (ngSubmit)=\"postOrder()\">\n                      <div class=\"row justify-content-center\">\n                          <div class=\"col-12 col-lg-8 wow fadeIn text-center\">\n                              <div id=\"success-contact-form-2\" class=\"mx-0\"></div>\n                                <input type=\"text\" formControlName=\"fullName\" id=\"fullName\" placeholder=\"Nama Lengkap*\" class=\"input-border-bottom\" required>\n\n                                <select formControlName=\"faculty\" id=\"faculty\" class=\"input-border-bottom\" required>\n                                    <option value=\"\">Fakultas*</option>\n                                    <option value=\"FAPERTA\">FAPERTA</option>\n                                    <option value=\"FKH\">FKH</option>\n                                    <option value=\"FPIK\">FPIK</option>\n                                    <option value=\"FAPET\">FAPET</option>\n                                    <option value=\"FAHUTAN\">FAHUTAN</option>\n                                    <option value=\"FATETA\">FATETA</option>\n                                    <option value=\"FMIPA\">FMIPA</option>\n                                    <option value=\"FEM\">FEM</option>\n                                    <option value=\"FEMA\">FEMA</option>\n                                    <option value=\"SB\">SB</option>\n                                </select>\n\n                                <input type=\"email\" formControlName=\"email\" id=\"email\" placeholder=\"E-mail*\" class=\"input-border-bottom\" required>\n\n                                <input type=\"text\" id=\"contact\" formControlName=\"contact\" placeholder=\"ID Line / WhatsApp*\" class=\"input-border-bottom\" required>\n\n                                <textarea id=\"items\" formControlName=\"items\" placeholder=\"Barang yang Dipesan*\" class=\"input-border-bottom\" required></textarea>\n\n                                <button id=\"contact-us-button-2\" [disabled]=\"!orderItem.valid\" type=\"submit\" class=\"btn btn-dark-gray btn-rounded btn-small no-margin-lr\">Pesan Sekarang</button>\n                          </div>\n                      </div>\n                  </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!-- end section -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar Start -->\n\n<app-header></app-header>\n\n<!-- Navbar End -->\n\n<!-- Body Start -->\n\n<app-body-store></app-body-store>\n\n<!-- Body End -->\n\n<!-- Footer Start -->\n\n<app-footer></app-footer>\n\n<!-- Footer End -->"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _buku_buku_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buku/buku.component */ "./src/app/buku/buku.component.ts");
/* harmony import */ var _berita_berita_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./berita/berita.component */ "./src/app/berita/berita.component.ts");
/* harmony import */ var _penugasan_penugasan_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./penugasan/penugasan.component */ "./src/app/penugasan/penugasan.component.ts");
/* harmony import */ var _galeri_galeri_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./galeri/galeri.component */ "./src/app/galeri/galeri.component.ts");
/* harmony import */ var _kontak_kontak_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kontak/kontak.component */ "./src/app/kontak/kontak.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _artikel_artikel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./artikel/artikel.component */ "./src/app/artikel/artikel.component.ts");











var routes = [
    { path: '',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
    },
    {
        path: 'homepage',
        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
    },
    {
        path: 'buku',
        component: _buku_buku_component__WEBPACK_IMPORTED_MODULE_4__["BukuComponent"],
    },
    {
        path: 'berita',
        component: _berita_berita_component__WEBPACK_IMPORTED_MODULE_5__["BeritaComponent"],
    },
    {
        path: 'artikel/:id',
        component: _artikel_artikel_component__WEBPACK_IMPORTED_MODULE_10__["ArtikelComponent"],
    },
    {
        path: 'penugasan',
        component: _penugasan_penugasan_component__WEBPACK_IMPORTED_MODULE_6__["PenugasanComponent"],
    },
    {
        path: 'galeri',
        component: _galeri_galeri_component__WEBPACK_IMPORTED_MODULE_7__["GaleriComponent"],
    },
    {
        path: 'kontak',
        component: _kontak_kontak_component__WEBPACK_IMPORTED_MODULE_8__["KontakComponent"],
    },
    {
        path: 'store',
        component: _store_store_component__WEBPACK_IMPORTED_MODULE_9__["StoreComponent"],
    },
    {
        path: '**',
        redirectTo: 'homepage'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mpkmbApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _homepage_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/header/header.component */ "./src/app/homepage/header/header.component.ts");
/* harmony import */ var _homepage_body_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./homepage/body/body.component */ "./src/app/homepage/body/body.component.ts");
/* harmony import */ var _homepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./homepage/footer/footer.component */ "./src/app/homepage/footer/footer.component.ts");
/* harmony import */ var _berita_berita_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./berita/berita.component */ "./src/app/berita/berita.component.ts");
/* harmony import */ var _buku_buku_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./buku/buku.component */ "./src/app/buku/buku.component.ts");
/* harmony import */ var _penugasan_penugasan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./penugasan/penugasan.component */ "./src/app/penugasan/penugasan.component.ts");
/* harmony import */ var _galeri_galeri_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./galeri/galeri.component */ "./src/app/galeri/galeri.component.ts");
/* harmony import */ var _kontak_kontak_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./kontak/kontak.component */ "./src/app/kontak/kontak.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _buku_body_buku_body_buku_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./buku/body-buku/body-buku.component */ "./src/app/buku/body-buku/body-buku.component.ts");
/* harmony import */ var _berita_body_berita_body_berita_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./berita/body-berita/body-berita.component */ "./src/app/berita/body-berita/body-berita.component.ts");
/* harmony import */ var _penugasan_body_penugasan_body_penugasan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./penugasan/body-penugasan/body-penugasan.component */ "./src/app/penugasan/body-penugasan/body-penugasan.component.ts");
/* harmony import */ var _galeri_body_galeri_body_galeri_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./galeri/body-galeri/body-galeri.component */ "./src/app/galeri/body-galeri/body-galeri.component.ts");
/* harmony import */ var _kontak_body_kontak_body_kontak_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./kontak/body-kontak/body-kontak.component */ "./src/app/kontak/body-kontak/body-kontak.component.ts");
/* harmony import */ var _store_body_store_body_store_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./store/body-store/body-store.component */ "./src/app/store/body-store/body-store.component.ts");
/* harmony import */ var _artikel_artikel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./artikel/artikel.component */ "./src/app/artikel/artikel.component.ts");
/* harmony import */ var _artikel_body_artikel_body_artikel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./artikel/body-artikel/body-artikel.component */ "./src/app/artikel/body-artikel/body-artikel.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                _homepage_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _homepage_body_body_component__WEBPACK_IMPORTED_MODULE_12__["BodyComponent"],
                _homepage_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _berita_berita_component__WEBPACK_IMPORTED_MODULE_14__["BeritaComponent"],
                _buku_buku_component__WEBPACK_IMPORTED_MODULE_15__["BukuComponent"],
                _penugasan_penugasan_component__WEBPACK_IMPORTED_MODULE_16__["PenugasanComponent"],
                _galeri_galeri_component__WEBPACK_IMPORTED_MODULE_17__["GaleriComponent"],
                _kontak_kontak_component__WEBPACK_IMPORTED_MODULE_18__["KontakComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_19__["StoreComponent"],
                _buku_body_buku_body_buku_component__WEBPACK_IMPORTED_MODULE_20__["BodyBukuComponent"],
                _berita_body_berita_body_berita_component__WEBPACK_IMPORTED_MODULE_21__["BodyBeritaComponent"],
                _penugasan_body_penugasan_body_penugasan_component__WEBPACK_IMPORTED_MODULE_22__["BodyPenugasanComponent"],
                _galeri_body_galeri_body_galeri_component__WEBPACK_IMPORTED_MODULE_23__["BodyGaleriComponent"],
                _kontak_body_kontak_body_kontak_component__WEBPACK_IMPORTED_MODULE_24__["BodyKontakComponent"],
                _store_body_store_body_store_component__WEBPACK_IMPORTED_MODULE_25__["BodyStoreComponent"],
                _artikel_artikel_component__WEBPACK_IMPORTED_MODULE_26__["ArtikelComponent"],
                _artikel_body_artikel_body_artikel_component__WEBPACK_IMPORTED_MODULE_27__["BodyArtikelComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__["ScrollToModule"].forRoot(),
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/artikel/artikel.component..scss":
/*!*************************************************!*\
  !*** ./src/app/artikel/artikel.component..scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlrZWwvYXJ0aWtlbC5jb21wb25lbnQuLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/artikel/artikel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/artikel/artikel.component.ts ***!
  \**********************************************/
/*! exports provided: ArtikelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtikelComponent", function() { return ArtikelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var ArtikelComponent = /** @class */ (function () {
    function ArtikelComponent(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    ArtikelComponent.prototype.ngOnInit = function () {
    };
    ArtikelComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    ArtikelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-artikel',
            template: __webpack_require__(/*! raw-loader!./artikel.component.html */ "./node_modules/raw-loader/index.js!./src/app/artikel/artikel.component.html"),
            styles: [__webpack_require__(/*! ./artikel.component..scss */ "./src/app/artikel/artikel.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], ArtikelComponent);
    return ArtikelComponent;
}());



/***/ }),

/***/ "./src/app/artikel/body-artikel/body-artikel.component..scss":
/*!*******************************************************************!*\
  !*** ./src/app/artikel/body-artikel/body-artikel.component..scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position-pc {\n  margin-left: 50vw;\n  visibility: visible;\n}\n\n@media screen and (max-width: 772px) {\n  .position-pc {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWtlbC9ib2R5LWFydGlrZWwvRDpcXFByb2plY3RcXEdpdHBhbmRhXFxtcGttYkFwcC9zcmNcXGFwcFxcYXJ0aWtlbFxcYm9keS1hcnRpa2VsXFxib2R5LWFydGlrZWwuY29tcG9uZW50Li5zY3NzIiwic3JjL2FwcC9hcnRpa2VsL2JvZHktYXJ0aWtlbC9ib2R5LWFydGlrZWwuY29tcG9uZW50Li5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxrQkFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcnRpa2VsL2JvZHktYXJ0aWtlbC9ib2R5LWFydGlrZWwuY29tcG9uZW50Li5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9uLXBje1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwdnc7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzJweCl7XHJcbiAgICAucG9zaXRpb24tcGN7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG59IiwiLnBvc2l0aW9uLXBjIHtcbiAgbWFyZ2luLWxlZnQ6IDUwdnc7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MnB4KSB7XG4gIC5wb3NpdGlvbi1wYyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/artikel/body-artikel/body-artikel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/artikel/body-artikel/body-artikel.component.ts ***!
  \****************************************************************/
/*! exports provided: BodyArtikelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyArtikelComponent", function() { return BodyArtikelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_berita_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/berita.service */ "./src/app/services/berita.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var BodyArtikelComponent = /** @class */ (function () {
    function BodyArtikelComponent(httpClient, configService, berita, sanitizer) {
        this.httpClient = httpClient;
        this.configService = configService;
        this.berita = berita;
        this.sanitizer = sanitizer;
        this.newsDetail = [];
        this.backgroundImageStyle = [];
        this.photo = "http://172.18.16.52:3056/news/image/5ced372dab67f67e86047f78%20Cover.jpg";
    }
    BodyArtikelComponent.prototype.ngOnInit = function () {
        this.dataLocal = JSON.parse(localStorage.getItem('newsDetail'));
        // console.log("Cek Data Local : ", this.dataLocal);
        this.getNewsDetail(this.dataLocal._id);
    };
    BodyArtikelComponent.prototype.formatURL = function (data) {
        return data.split(' ').join('%20');
    };
    BodyArtikelComponent.prototype.formatImageSrc = function (data) {
        // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
        return this.configService.baseUrl + "news/image/" + this.formatURL(data);
    };
    BodyArtikelComponent.prototype.getNewsDetail = function (id) {
        var _this = this;
        this.berita.getNewsDetail(id).subscribe(function (data) {
            _this.newsDetail = data.news;
            // console.log("Cek Detail Berita : ", this.newsDetail);
        });
    };
    BodyArtikelComponent.prototype.imageUrl = function (data) {
        var link = this.formatImageSrc(data);
        // console.log("Cek Link : ", link);
        return link;
        // return this.sanitizer.bypassSecurityTrustStyle('url(' + link + ')');
    };
    BodyArtikelComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: src_app_services_berita_service__WEBPACK_IMPORTED_MODULE_4__["BeritaService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    BodyArtikelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-artikel',
            template: __webpack_require__(/*! raw-loader!./body-artikel.component.html */ "./node_modules/raw-loader/index.js!./src/app/artikel/body-artikel/body-artikel.component.html"),
            styles: [__webpack_require__(/*! ./body-artikel.component..scss */ "./src/app/artikel/body-artikel/body-artikel.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_app_services_berita_service__WEBPACK_IMPORTED_MODULE_4__["BeritaService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], BodyArtikelComponent);
    return BodyArtikelComponent;
}());



/***/ }),

/***/ "./src/app/berita/berita.component..scss":
/*!***********************************************!*\
  !*** ./src/app/berita/berita.component..scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlcml0YS9iZXJpdGEuY29tcG9uZW50Li5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/berita/berita.component.ts":
/*!********************************************!*\
  !*** ./src/app/berita/berita.component.ts ***!
  \********************************************/
/*! exports provided: BeritaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeritaComponent", function() { return BeritaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var BeritaComponent = /** @class */ (function () {
    function BeritaComponent(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    BeritaComponent.prototype.ngOnInit = function () {
    };
    BeritaComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    BeritaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-berita',
            template: __webpack_require__(/*! raw-loader!./berita.component.html */ "./node_modules/raw-loader/index.js!./src/app/berita/berita.component.html"),
            styles: [__webpack_require__(/*! ./berita.component..scss */ "./src/app/berita/berita.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], BeritaComponent);
    return BeritaComponent;
}());



/***/ }),

/***/ "./src/app/berita/body-berita/body-berita.component..scss":
/*!****************************************************************!*\
  !*** ./src/app/berita/body-berita/body-berita.component..scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jlcml0YS9ib2R5LWJlcml0YS9ib2R5LWJlcml0YS5jb21wb25lbnQuLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/berita/body-berita/body-berita.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/berita/body-berita/body-berita.component.ts ***!
  \*************************************************************/
/*! exports provided: BodyBeritaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyBeritaComponent", function() { return BodyBeritaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/timeline.service */ "./src/app/services/timeline.service.ts");
/* harmony import */ var src_app_services_berita_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/berita.service */ "./src/app/services/berita.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");






var BodyBeritaComponent = /** @class */ (function () {
    function BodyBeritaComponent(timeline, news, route, router, configService) {
        this.timeline = timeline;
        this.news = news;
        this.route = route;
        this.router = router;
        this.configService = configService;
        this.timelines = [];
        this.allNews = [];
        // News Highlight
        this.highlight = [];
    }
    BodyBeritaComponent.prototype.ngOnInit = function () {
        this.dataLocal = JSON.parse(localStorage.getItem('newsDetail'));
        // console.log("Cek Data Local : ", this.dataLocal);
        this.getTimeline();
        this.getAllNews();
        this.getNewsDetail(this.dataLocal._id);
    };
    BodyBeritaComponent.prototype.formatURL = function (data) {
        return data.split(' ').join('%20');
    };
    BodyBeritaComponent.prototype.formatImageSrc = function (data) {
        // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
        return this.configService.baseUrl + "news/image/" + this.formatURL(data);
    };
    BodyBeritaComponent.prototype.getTimeline = function () {
        var _this = this;
        this.timeline.timeline().subscribe(function (data) {
            var i;
            for (i = 0; i < data.timelines.length; i++) {
                var id = data.timelines[i]._id;
                var date = data.timelines[i].date;
                var title = data.timelines[i].title;
                var body = data.timelines[i].body;
                _this.timelines.push({ "id": id, "date": date, "title": title, "body": body });
            }
            // console.log("Cek Timelines : ", this.timelines);
        });
    };
    BodyBeritaComponent.prototype.getAllNews = function () {
        var _this = this;
        this.news.getAllNews().subscribe(function (data) {
            var i;
            _this.allNews = data.news.docs;
            // console.log("Cek All News : ", data)
            // News Highlight
            var highlight_1 = 2;
            var highlight_2 = 1;
            var highlight_3 = 0;
            _this.highlight.push({ "news_1": highlight_1, "news_2": highlight_2, "news_3": highlight_3 });
        });
    };
    BodyBeritaComponent.prototype.getNewsDetail = function (id) {
        var _this = this;
        this.news.getNewsDetail(id).subscribe(function (data) {
            if (data.status == 200) {
                _this.newsDetail = data.news;
            }
        });
    };
    BodyBeritaComponent.prototype.getData = function (data) {
        localStorage.setItem('newsDetail', JSON.stringify(data));
        // console.log("Cek News Detail : ", data);
    };
    BodyBeritaComponent.prototype.imageUrl = function (data) {
        var link = this.formatImageSrc(data);
        // console.log("Cek Link : ", link);
        return link;
        // return this.sanitizer.bypassSecurityTrustStyle('url(' + link + ')');
    };
    BodyBeritaComponent.ctorParameters = function () { return [
        { type: src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] },
        { type: src_app_services_berita_service__WEBPACK_IMPORTED_MODULE_3__["BeritaService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    BodyBeritaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-berita',
            template: __webpack_require__(/*! raw-loader!./body-berita.component.html */ "./node_modules/raw-loader/index.js!./src/app/berita/body-berita/body-berita.component.html"),
            styles: [__webpack_require__(/*! ./body-berita.component..scss */ "./src/app/berita/body-berita/body-berita.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"], src_app_services_berita_service__WEBPACK_IMPORTED_MODULE_3__["BeritaService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], BodyBeritaComponent);
    return BodyBeritaComponent;
}());



/***/ }),

/***/ "./src/app/buku/body-buku/body-buku.component..scss":
/*!**********************************************************!*\
  !*** ./src/app/buku/body-buku/body-buku.component..scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position-pc {\n  margin-left: 60vw;\n  visibility: visible;\n}\n\n.desktop-view {\n  display: block;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.mobile-view {\n  display: none;\n}\n\n@media screen and (max-width: 772px) {\n  .position-pc {\n    visibility: hidden;\n  }\n\n  .desktop-view {\n    display: none;\n  }\n\n  .mobile-view {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVrdS9ib2R5LWJ1a3UvRDpcXFByb2plY3RcXEdpdHBhbmRhXFxtcGttYkFwcC9zcmNcXGFwcFxcYnVrdVxcYm9keS1idWt1XFxib2R5LWJ1a3UuY29tcG9uZW50Li5zY3NzIiwic3JjL2FwcC9idWt1L2JvZHktYnVrdS9ib2R5LWJ1a3UuY29tcG9uZW50Li5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksa0JBQUE7RUNDTjs7RURFRTtJQUNJLGFBQUE7RUNDTjs7RURFRTtJQUNJLGNBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYnVrdS9ib2R5LWJ1a3UvYm9keS1idWt1LmNvbXBvbmVudC4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3NpdGlvbi1wY3tcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHZ3O1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmRlc2t0b3Atdmlld3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1vYmlsZS12aWV3e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcycHgpe1xyXG4gICAgLnBvc2l0aW9uLXBje1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuZGVza3RvcC12aWV3e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2JpbGUtdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSIsIi5wb3NpdGlvbi1wYyB7XG4gIG1hcmdpbi1sZWZ0OiA2MHZ3O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZGVza3RvcC12aWV3IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbn1cblxuLm1vYmlsZS12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcycHgpIHtcbiAgLnBvc2l0aW9uLXBjIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAuZGVza3RvcC12aWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS12aWV3IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/buku/body-buku/body-buku.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/buku/body-buku/body-buku.component.ts ***!
  \*******************************************************/
/*! exports provided: BodyBukuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyBukuComponent", function() { return BodyBukuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/timeline.service */ "./src/app/services/timeline.service.ts");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_buku_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/buku.service */ "./src/app/services/buku.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var BodyBukuComponent = /** @class */ (function () {
    function BodyBukuComponent(router, timeline, config, buku, formBuilder) {
        this.router = router;
        this.timeline = timeline;
        this.config = config;
        this.buku = buku;
        this.formBuilder = formBuilder;
        this.timelines = [];
        this.orderBuku = this.formBuilder.group({
            fullName: [""],
            faculty: [""],
            email: [""],
            contact: [""],
            items: [""],
        });
    }
    BodyBukuComponent.prototype.ngOnInit = function () {
        this.getTimeline();
    };
    BodyBukuComponent.prototype.getTimeline = function () {
        var _this = this;
        this.timeline.timeline().subscribe(function (data) {
            // let timelines = [];
            var i;
            for (i = 0; i < data.timelines.length; i++) {
                var id = data.timelines[i]._id;
                var date = data.timelines[i].date;
                var title = data.timelines[i].title;
                var body = data.timelines[i].body;
                _this.timelines.push({ "id": id, "date": date, "title": title, "body": body });
            }
            // console.log("Cek Timelines : ", this.timelines);
        });
    };
    BodyBukuComponent.prototype.postOrder = function () {
        this.buku.postOrderItem(this.orderBuku.value).subscribe(function (data) {
            alert("Pemesanan berhasil Direkam");
            window.location.reload();
            // console.log("Cek Pesan : ", data)
        }, function (err) {
            console.log('err', err);
            if (err.status == 401)
                alert("Data anda Salah");
        });
    };
    BodyBukuComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: src_app_services_buku_service__WEBPACK_IMPORTED_MODULE_4__["BukuService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    BodyBukuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-buku',
            template: __webpack_require__(/*! raw-loader!./body-buku.component.html */ "./node_modules/raw-loader/index.js!./src/app/buku/body-buku/body-buku.component.html"),
            styles: [__webpack_require__(/*! ./body-buku.component..scss */ "./src/app/buku/body-buku/body-buku.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_app_services_buku_service__WEBPACK_IMPORTED_MODULE_4__["BukuService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], BodyBukuComponent);
    return BodyBukuComponent;
}());



/***/ }),

/***/ "./src/app/buku/buku.component..scss":
/*!*******************************************!*\
  !*** ./src/app/buku/buku.component..scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1a3UvYnVrdS5jb21wb25lbnQuLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/buku/buku.component.ts":
/*!****************************************!*\
  !*** ./src/app/buku/buku.component.ts ***!
  \****************************************/
/*! exports provided: BukuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BukuComponent", function() { return BukuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var BukuComponent = /** @class */ (function () {
    function BukuComponent(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    BukuComponent.prototype.ngOnInit = function () {
    };
    BukuComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    BukuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buku',
            template: __webpack_require__(/*! raw-loader!./buku.component.html */ "./node_modules/raw-loader/index.js!./src/app/buku/buku.component.html"),
            styles: [__webpack_require__(/*! ./buku.component..scss */ "./src/app/buku/buku.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], BukuComponent);
    return BukuComponent;
}());



/***/ }),

/***/ "./src/app/galeri/body-galeri/body-galeri.component..scss":
/*!****************************************************************!*\
  !*** ./src/app/galeri/body-galeri/body-galeri.component..scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".galeri-web {\n  display: block;\n}\n\n.galeri-mobile {\n  display: none;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.title-position {\n  padding-bottom: -50vh !important;\n}\n\n@media screen and (max-width: 768px) {\n  .galeri-web {\n    display: none;\n  }\n\n  .galeri-mobile {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsZXJpL2JvZHktZ2FsZXJpL0Q6XFxQcm9qZWN0XFxHaXRwYW5kYVxcbXBrbWJBcHAvc3JjXFxhcHBcXGdhbGVyaVxcYm9keS1nYWxlcmlcXGJvZHktZ2FsZXJpLmNvbXBvbmVudC4uc2NzcyIsInNyYy9hcHAvZ2FsZXJpL2JvZHktZ2FsZXJpL2JvZHktZ2FsZXJpLmNvbXBvbmVudC4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBOzs7RUFHSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGFBQUE7RUNDTjs7RURFRTtJQUNJLGNBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2FsZXJpL2JvZHktZ2FsZXJpL2JvZHktZ2FsZXJpLmNvbXBvbmVudC4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxlcmktd2Vie1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5nYWxlcmktbW9iaWxle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiAgICBcclxuLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsXHJcbi52aWRlby1jb250YWluZXIgb2JqZWN0LFxyXG4udmlkZW8tY29udGFpbmVyIGVtYmVkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlLXBvc2l0aW9ue1xyXG4gICAgcGFkZGluZy1ib3R0b206IC01MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5nYWxlcmktd2Vie1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmdhbGVyaS1tb2JpbGV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIuZ2FsZXJpLXdlYiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZ2FsZXJpLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aWRlby1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi52aWRlby1jb250YWluZXIgaWZyYW1lLFxuLnZpZGVvLWNvbnRhaW5lciBvYmplY3QsXG4udmlkZW8tY29udGFpbmVyIGVtYmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXRsZS1wb3NpdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAtNTB2aCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZ2FsZXJpLXdlYiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5nYWxlcmktbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/galeri/body-galeri/body-galeri.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/galeri/body-galeri/body-galeri.component.ts ***!
  \*************************************************************/
/*! exports provided: BodyGaleriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyGaleriComponent", function() { return BodyGaleriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/timeline.service */ "./src/app/services/timeline.service.ts");
/* harmony import */ var src_app_services_galeri_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/galeri.service */ "./src/app/services/galeri.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var BodyGaleriComponent = /** @class */ (function () {
    function BodyGaleriComponent(timeline, galeri, sanitizer) {
        this.timeline = timeline;
        this.galeri = galeri;
        this.sanitizer = sanitizer;
        this.timelines = [];
        this.galeries = [];
        this.videos = [];
        this.categories = [];
        this.getTimeline();
    }
    BodyGaleriComponent.prototype.ngOnInit = function () {
        this.getGaleriesImages();
        this.getCategory();
        this.getVideos();
    };
    BodyGaleriComponent.prototype.getTimeline = function () {
        var _this = this;
        this.timeline.timeline().subscribe(function (data) {
            // let timelines = [];
            var i;
            for (i = 0; i < data.timelines.length; i++) {
                var id = data.timelines[i]._id;
                var date = data.timelines[i].date;
                var title = data.timelines[i].title;
                var body = data.timelines[i].body;
                _this.timelines.push({ "id": id, "date": date, "title": title, "body": body });
            }
            // console.log("Cek Timelines : ", this.timelines);
        });
    };
    BodyGaleriComponent.prototype.getGaleriesImages = function () {
        var _this = this;
        this.galeri.getAllGaleriesImages().subscribe(function (data) {
            _this.galeries = data.imageGalery;
            // console.log("Cek Galeri : ", this.galeries);
        });
    };
    BodyGaleriComponent.prototype.getCategory = function () {
        var _this = this;
        this.galeri.getAllCategories().subscribe(function (data) {
            _this.categories = data.categories;
            // console.log("Cek Kategori : ", this.categories);
        });
    };
    BodyGaleriComponent.prototype.getVideos = function () {
        var _this = this;
        this.galeri.getAllVideos().subscribe(function (data) {
            _this.videos = data.videoGaleries;
            // console.log("Cek Videos : ", this.videos);
        });
    };
    BodyGaleriComponent.prototype.videoUrl = function (i) {
        var url = this.videos[i].url;
        return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url);
    };
    BodyGaleriComponent.prototype.imageUrl = function (data) {
        var link = data;
        return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    };
    BodyGaleriComponent.ctorParameters = function () { return [
        { type: src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] },
        { type: src_app_services_galeri_service__WEBPACK_IMPORTED_MODULE_3__["GaleriService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    BodyGaleriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-galeri',
            template: __webpack_require__(/*! raw-loader!./body-galeri.component.html */ "./node_modules/raw-loader/index.js!./src/app/galeri/body-galeri/body-galeri.component.html"),
            styles: [__webpack_require__(/*! ./body-galeri.component..scss */ "./src/app/galeri/body-galeri/body-galeri.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"], src_app_services_galeri_service__WEBPACK_IMPORTED_MODULE_3__["GaleriService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], BodyGaleriComponent);
    return BodyGaleriComponent;
}());



/***/ }),

/***/ "./src/app/galeri/galeri.component..scss":
/*!***********************************************!*\
  !*** ./src/app/galeri/galeri.component..scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGVyaS9nYWxlcmkuY29tcG9uZW50Li5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/galeri/galeri.component.ts":
/*!********************************************!*\
  !*** ./src/app/galeri/galeri.component.ts ***!
  \********************************************/
/*! exports provided: GaleriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriComponent", function() { return GaleriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var GaleriComponent = /** @class */ (function () {
    function GaleriComponent(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    GaleriComponent.prototype.ngOnInit = function () {
    };
    GaleriComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    GaleriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-galeri',
            template: __webpack_require__(/*! raw-loader!./galeri.component.html */ "./node_modules/raw-loader/index.js!./src/app/galeri/galeri.component.html"),
            styles: [__webpack_require__(/*! ./galeri.component..scss */ "./src/app/galeri/galeri.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], GaleriComponent);
    return GaleriComponent;
}());



/***/ }),

/***/ "./src/app/homepage/body/body.component..scss":
/*!****************************************************!*\
  !*** ./src/app/homepage/body/body.component..scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-mpkmb {\n  visibility: visible;\n}\n\n.slide-2-desc {\n  position: relative;\n  right: 15vw;\n}\n\n.img-hover {\n  opacity: 1;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.img-hover:hover {\n  opacity: 0.5;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.center-slide-1 {\n  width: 50vw;\n  height: 50vh;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n@media screen and (max-width: 768px) {\n  .img-mpkmb {\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvYm9keS9EOlxcUHJvamVjdFxcR2l0cGFuZGFcXG1wa21iQXBwL3NyY1xcYXBwXFxob21lcGFnZVxcYm9keVxcYm9keS5jb21wb25lbnQuLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2JvZHkvYm9keS5jb21wb25lbnQuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksa0JBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvYm9keS9ib2R5LmNvbXBvbmVudC4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctbXBrbWJ7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uc2xpZGUtMi1kZXNje1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDE1dnc7XHJcbn1cclxuXHJcbi5pbWctaG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmltZy1ob3Zlcjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5jZW50ZXItc2xpZGUtMXtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmltZy1tcGttYntcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbn0iLCIuaW1nLW1wa21iIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnNsaWRlLTItZGVzYyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1dnc7XG59XG5cbi5pbWctaG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uaW1nLWhvdmVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uY2VudGVyLXNsaWRlLTEge1xuICB3aWR0aDogNTB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW1nLW1wa21iIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/body/body.component.ts":
/*!*************************************************!*\
  !*** ./src/app/homepage/body/body.component.ts ***!
  \*************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/timeline.service */ "./src/app/services/timeline.service.ts");



var BodyComponent = /** @class */ (function () {
    function BodyComponent(timeline) {
        this.timeline = timeline;
        this.timelines = [];
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.getTimeline();
        console.log("Cek timelines : ", this.timelines);
    };
    BodyComponent.prototype.getTimeline = function () {
        var _this = this;
        this.timeline.timeline().subscribe(function (data) {
            // let timelines = [];
            var i;
            for (i = 0; i < data.timelines.length; i++) {
                var id = data.timelines[i]._id;
                var date = data.timelines[i].date;
                var title = data.timelines[i].title;
                var body = data.timelines[i].body;
                _this.timelines.push({ "id": id, "date": date, "title": title, "body": body });
            }
            // console.log("Cek Timelines : ", this.timelines);
        });
    };
    BodyComponent.prototype.scrollToElement = function ($element) {
        // console.log($element);
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    BodyComponent.ctorParameters = function () { return [
        { type: src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] }
    ]; };
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-homepage',
            template: __webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component..scss */ "./src/app/homepage/body/body.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/homepage/footer/footer.component..scss":
/*!********************************************************!*\
  !*** ./src/app/homepage/footer/footer.component..scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-size {\n  font-size: 2em;\n}\n\n.logo-bottom {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvZm9vdGVyL0Q6XFxQcm9qZWN0XFxHaXRwYW5kYVxcbXBrbWJBcHAvc3JjXFxhcHBcXGhvbWVwYWdlXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Li5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Li5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc2l6ZXtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4ubG9nby1ib3R0b217XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufSIsIi5pY29uLXNpemUge1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmxvZ28tYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/homepage/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component..scss */ "./src/app/homepage/footer/footer.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/header/header.component..scss":
/*!********************************************************!*\
  !*** ./src/app/homepage/header/header.component..scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-header-list {\n  padding-top: 2vh;\n  display: block;\n}\n\n.logo-header {\n  display: block;\n  width: 5vw;\n  height: auto;\n}\n\n.store-show {\n  display: none;\n}\n\n.store-hover {\n  color: #000000;\n}\n\n.store-hover:hover {\n  color: #ffffff;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.position-pc {\n  padding-top: 1vh;\n}\n\n@media screen and (max-width: 991px) {\n  .logo-header-list {\n    display: none;\n  }\n\n  .logo-header {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .store-show {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaGVhZGVyL0Q6XFxQcm9qZWN0XFxHaXRwYW5kYVxcbXBrbWJBcHAvc3JjXFxhcHBcXGhvbWVwYWdlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuLnNjc3MiLCJzcmMvYXBwL2hvbWVwYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Li5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxhQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047QUFDRjs7QURHQTtFQUVJO0lBQ0ksY0FBQTtFQ0ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWhlYWRlci1saXN0e1xyXG4gICAgcGFkZGluZy10b3A6IDJ2aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubG9nby1oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zdG9yZS1zaG93e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnN0b3JlLWhvdmVye1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zdG9yZS1ob3Zlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1wY3tcclxuICAgIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KXtcclxuICAgIC5sb2dvLWhlYWRlci1saXN0e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28taGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcblxyXG4gICAgLnN0b3JlLXNob3d7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIubG9nby1oZWFkZXItbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAydmg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubG9nby1oZWFkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDV2dztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc3RvcmUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zdG9yZS1ob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3RvcmUtaG92ZXI6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLnBvc2l0aW9uLXBjIHtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmxvZ28taGVhZGVyLWxpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9nby1oZWFkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zdG9yZS1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/homepage/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.gotoStore = function () {
        this.router.navigate(["/store"]);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component..scss */ "./src/app/homepage/header/header.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component..scss":
/*!***************************************************!*\
  !*** ./src/app/homepage/homepage.component..scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC4uc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/timeline.service */ "./src/app/services/timeline.service.ts");



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(timeline) {
        this.timeline = timeline;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getTimeline();
    };
    HomepageComponent.prototype.getTimeline = function () {
        // console.log('check boi');
        // this.timeline.timeline().subscribe((data)=>{
        //   console.log('test', data);
        // });
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component..scss */ "./src/app/homepage/homepage.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/kontak/body-kontak/body-kontak.component..scss":
/*!****************************************************************!*\
  !*** ./src/app/kontak/body-kontak/body-kontak.component..scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tvbnRhay9ib2R5LWtvbnRhay9ib2R5LWtvbnRhay5jb21wb25lbnQuLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/kontak/body-kontak/body-kontak.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/kontak/body-kontak/body-kontak.component.ts ***!
  \*************************************************************/
/*! exports provided: BodyKontakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyKontakComponent", function() { return BodyKontakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BodyKontakComponent = /** @class */ (function () {
    function BodyKontakComponent() {
    }
    BodyKontakComponent.prototype.ngOnInit = function () {
    };
    BodyKontakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-kontak',
            template: __webpack_require__(/*! raw-loader!./body-kontak.component.html */ "./node_modules/raw-loader/index.js!./src/app/kontak/body-kontak/body-kontak.component.html"),
            styles: [__webpack_require__(/*! ./body-kontak.component..scss */ "./src/app/kontak/body-kontak/body-kontak.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BodyKontakComponent);
    return BodyKontakComponent;
}());



/***/ }),

/***/ "./src/app/kontak/kontak.component..scss":
/*!***********************************************!*\
  !*** ./src/app/kontak/kontak.component..scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tvbnRhay9rb250YWsuY29tcG9uZW50Li5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/kontak/kontak.component.ts":
/*!********************************************!*\
  !*** ./src/app/kontak/kontak.component.ts ***!
  \********************************************/
/*! exports provided: KontakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontakComponent", function() { return KontakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KontakComponent = /** @class */ (function () {
    function KontakComponent() {
    }
    KontakComponent.prototype.ngOnInit = function () {
    };
    KontakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kontak',
            template: __webpack_require__(/*! raw-loader!./kontak.component.html */ "./node_modules/raw-loader/index.js!./src/app/kontak/kontak.component.html"),
            styles: [__webpack_require__(/*! ./kontak.component..scss */ "./src/app/kontak/kontak.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KontakComponent);
    return KontakComponent;
}());



/***/ }),

/***/ "./src/app/penugasan/body-penugasan/body-penugasan.component..scss":
/*!*************************************************************************!*\
  !*** ./src/app/penugasan/body-penugasan/body-penugasan.component..scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position-pc {\n  margin-left: 60vw;\n  visibility: visible;\n}\n\n.desktop-view {\n  display: block;\n  min-height: 100vh;\n  max-height: 100vh;\n}\n\n.mobile-view {\n  display: none;\n}\n\n@media screen and (max-width: 772px) {\n  .position-pc {\n    visibility: hidden;\n  }\n\n  .desktop-view {\n    display: none;\n  }\n\n  .mobile-view {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVudWdhc2FuL2JvZHktcGVudWdhc2FuL0Q6XFxQcm9qZWN0XFxHaXRwYW5kYVxcbXBrbWJBcHAvc3JjXFxhcHBcXHBlbnVnYXNhblxcYm9keS1wZW51Z2FzYW5cXGJvZHktcGVudWdhc2FuLmNvbXBvbmVudC4uc2NzcyIsInNyYy9hcHAvcGVudWdhc2FuL2JvZHktcGVudWdhc2FuL2JvZHktcGVudWdhc2FuLmNvbXBvbmVudC4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGtCQUFBO0VDQ047O0VERUU7SUFDSSxhQUFBO0VDQ047O0VERUU7SUFDSSxjQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BlbnVnYXNhbi9ib2R5LXBlbnVnYXNhbi9ib2R5LXBlbnVnYXNhbi5jb21wb25lbnQuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tcGN7XHJcbiAgICBtYXJnaW4tbGVmdDogNjB2dztcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5kZXNrdG9wLXZpZXd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5tb2JpbGUtdmlld3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MnB4KXtcclxuICAgIC5wb3NpdGlvbi1wY3tcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2t0b3Atdmlld3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9iaWxlLXZpZXd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iLCIucG9zaXRpb24tcGMge1xuICBtYXJnaW4tbGVmdDogNjB2dztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmRlc2t0b3AtdmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbi5tb2JpbGUtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MnB4KSB7XG4gIC5wb3NpdGlvbi1wYyB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgLmRlc2t0b3AtdmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/penugasan/body-penugasan/body-penugasan.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/penugasan/body-penugasan/body-penugasan.component.ts ***!
  \**********************************************************************/
/*! exports provided: BodyPenugasanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyPenugasanComponent", function() { return BodyPenugasanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/timeline.service */ "./src/app/services/timeline.service.ts");
/* harmony import */ var src_app_services_penugasan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/penugasan.service */ "./src/app/services/penugasan.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");






var BodyPenugasanComponent = /** @class */ (function () {
    function BodyPenugasanComponent(timeline, penugasan, sanitizer, configService) {
        this.timeline = timeline;
        this.penugasan = penugasan;
        this.sanitizer = sanitizer;
        this.configService = configService;
        this.timelines = [];
        this.categories = [];
    }
    BodyPenugasanComponent.prototype.ngOnInit = function () {
        this.getTimeline();
        this.getAllCategories();
    };
    BodyPenugasanComponent.prototype.formatURL = function (data) {
        return data.split(' ').join('%20');
    };
    BodyPenugasanComponent.prototype.formatImageSrc = function (data) {
        // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
        return this.configService.baseUrl + "task/image/" + this.formatURL(data);
    };
    BodyPenugasanComponent.prototype.getTimeline = function () {
        var _this = this;
        this.timeline.timeline().subscribe(function (data) {
            var i;
            for (i = 0; i < data.timelines.length; i++) {
                var id = data.timelines[i]._id;
                var date = data.timelines[i].date;
                var title = data.timelines[i].title;
                var body = data.timelines[i].body;
                _this.timelines.push({ "id": id, "date": date, "title": title, "body": body });
            }
            // console.log("Cek Timelines : ", this.timelines);
        });
    };
    BodyPenugasanComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.penugasan.getCategories().subscribe(function (data) {
            _this.categories = data.categories;
            // console.log("Cek Kategori : ", this.categories);
        });
    };
    BodyPenugasanComponent.ctorParameters = function () { return [
        { type: src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"] },
        { type: src_app_services_penugasan_service__WEBPACK_IMPORTED_MODULE_3__["PenugasanService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }
    ]; };
    BodyPenugasanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-penugasan',
            template: __webpack_require__(/*! raw-loader!./body-penugasan.component.html */ "./node_modules/raw-loader/index.js!./src/app/penugasan/body-penugasan/body-penugasan.component.html"),
            styles: [__webpack_require__(/*! ./body-penugasan.component..scss */ "./src/app/penugasan/body-penugasan/body-penugasan.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timeline_service__WEBPACK_IMPORTED_MODULE_2__["TimelineService"], src_app_services_penugasan_service__WEBPACK_IMPORTED_MODULE_3__["PenugasanService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]])
    ], BodyPenugasanComponent);
    return BodyPenugasanComponent;
}());



/***/ }),

/***/ "./src/app/penugasan/penugasan.component..scss":
/*!*****************************************************!*\
  !*** ./src/app/penugasan/penugasan.component..scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlbnVnYXNhbi9wZW51Z2FzYW4uY29tcG9uZW50Li5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/penugasan/penugasan.component.ts":
/*!**************************************************!*\
  !*** ./src/app/penugasan/penugasan.component.ts ***!
  \**************************************************/
/*! exports provided: PenugasanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenugasanComponent", function() { return PenugasanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var PenugasanComponent = /** @class */ (function () {
    function PenugasanComponent(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    PenugasanComponent.prototype.ngOnInit = function () {
    };
    PenugasanComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    PenugasanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-penugasan',
            template: __webpack_require__(/*! raw-loader!./penugasan.component.html */ "./node_modules/raw-loader/index.js!./src/app/penugasan/penugasan.component.html"),
            styles: [__webpack_require__(/*! ./penugasan.component..scss */ "./src/app/penugasan/penugasan.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], PenugasanComponent);
    return PenugasanComponent;
}());



/***/ }),

/***/ "./src/app/services/berita.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/berita.service.ts ***!
  \********************************************/
/*! exports provided: BeritaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeritaService", function() { return BeritaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BeritaService = /** @class */ (function () {
    function BeritaService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    BeritaService.prototype.getAllNews = function () {
        return this.http.get(this.configService.baseUrl + 'news/gets?page=1&limit=1000&select=title summary imageCover&sort=-1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    BeritaService.prototype.getNewsDetail = function (id) {
        return this.http.get(this.configService.baseUrl + 'news/get/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    BeritaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    BeritaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], BeritaService);
    return BeritaService;
}());



/***/ }),

/***/ "./src/app/services/buku.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/buku.service.ts ***!
  \******************************************/
/*! exports provided: BukuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BukuService", function() { return BukuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BukuService = /** @class */ (function () {
    function BukuService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    BukuService.prototype.postOrderItem = function (data) {
        return this.http.post(this.configService.baseUrl + 'order/create', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            if (resp.status == 200) {
                alert("Pemesanan Berhasil Direkam, Terimakasih");
                return resp;
            }
            return resp;
        }));
    };
    BukuService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    BukuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], BukuService);
    return BukuService;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        // this.baseUrl = "http://backend-mpkmb.codepanda.id/";
        this.baseUrl = "http://api.mpkmb.ipb.ac.id/";
        // this.baseUrl = "http://localhost:3000/";
    }
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/galeri.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/galeri.service.ts ***!
  \********************************************/
/*! exports provided: GaleriService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleriService", function() { return GaleriService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var GaleriService = /** @class */ (function () {
    function GaleriService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    GaleriService.prototype.getAllGaleriesImages = function () {
        return this.http.get(this.configService.baseUrl + 'galery/image/list?status=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    GaleriService.prototype.getAllCategories = function () {
        return this.http.get(this.configService.baseUrl + 'galery/category/get?isPopulate=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    GaleriService.prototype.getAllVideos = function () {
        return this.http.get(this.configService.baseUrl + 'galery/video/list?status=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    GaleriService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    GaleriService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], GaleriService);
    return GaleriService;
}());



/***/ }),

/***/ "./src/app/services/penugasan.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/penugasan.service.ts ***!
  \***********************************************/
/*! exports provided: PenugasanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenugasanService", function() { return PenugasanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PenugasanService = /** @class */ (function () {
    function PenugasanService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    PenugasanService.prototype.getCategories = function () {
        return this.http.get(this.configService.baseUrl + 'category/get?isPopulate=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    PenugasanService.prototype.getImage = function (id) {
        return this.http.get(this.configService.baseUrl + 'task/image/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    PenugasanService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    PenugasanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], PenugasanService);
    return PenugasanService;
}());



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var StoreService = /** @class */ (function () {
    function StoreService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    StoreService.prototype.getStoreItem = function () {
        return this.http.get(this.configService.baseUrl + 'store/gets?page=1&limit=100')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    StoreService.prototype.getStoreImage = function (url) {
        return this.http.get(this.configService.baseUrl + 'store/image/' + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    StoreService.prototype.postOrderItem = function (data) {
        return this.http.post(this.configService.baseUrl + 'order/create', JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            if (resp.status == 200) {
                alert("Pemesanan Berhasil Direkam, Terimakasih");
                return resp;
            }
            return resp;
        }));
    };
    StoreService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/services/timeline.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/timeline.service.ts ***!
  \**********************************************/
/*! exports provided: TimelineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineService", function() { return TimelineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TimelineService = /** @class */ (function () {
    function TimelineService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    TimelineService.prototype.timeline = function () {
        return this.http.get(this.configService.baseUrl + 'timeline/nearest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    TimelineService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    TimelineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], TimelineService);
    return TimelineService;
}());



/***/ }),

/***/ "./src/app/store/body-store/body-store.component..scss":
/*!*************************************************************!*\
  !*** ./src/app/store/body-store/body-store.component..scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-down-mobile {\n  display: none;\n}\n\n.center-cropped {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n@media screen and (min-width: 767px) {\n  .scroll-down-mobile {\n    margin-top: 0vh !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvYm9keS1zdG9yZS9EOlxcUHJvamVjdFxcR2l0cGFuZGFcXG1wa21iQXBwL3NyY1xcYXBwXFxzdG9yZVxcYm9keS1zdG9yZVxcYm9keS1zdG9yZS5jb21wb25lbnQuLnNjc3MiLCJzcmMvYXBwL3N0b3JlL2JvZHktc3RvcmUvYm9keS1zdG9yZS5jb21wb25lbnQuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtLQUFBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLDBCQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtJQUNBLGNBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RvcmUvYm9keS1zdG9yZS9ib2R5LXN0b3JlLmNvbXBvbmVudC4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtZG93bi1tb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyLWNyb3BwZWQge1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KXtcclxuICAgIC5zY3JvbGwtZG93bi1tb2JpbGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSIsIi5zY3JvbGwtZG93bi1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2VudGVyLWNyb3BwZWQge1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLnNjcm9sbC1kb3duLW1vYmlsZSB7XG4gICAgbWFyZ2luLXRvcDogMHZoICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/store/body-store/body-store.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/body-store/body-store.component.ts ***!
  \**********************************************************/
/*! exports provided: BodyStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyStoreComponent", function() { return BodyStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var src_app_services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/store.service */ "./src/app/services/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var BodyStoreComponent = /** @class */ (function () {
    function BodyStoreComponent(router, httpClient, configService, store, formBuilder) {
        this.router = router;
        this.httpClient = httpClient;
        this.configService = configService;
        this.store = store;
        this.formBuilder = formBuilder;
        this.stores = [];
        this.orderItem = this.formBuilder.group({
            fullName: [""],
            faculty: [""],
            email: [""],
            contact: [""],
            items: [""],
        });
    }
    BodyStoreComponent.prototype.ngOnInit = function () {
        this.getItem();
    };
    BodyStoreComponent.prototype.formatURL = function (data) {
        return data.split(' ').join('%20');
    };
    BodyStoreComponent.prototype.formatImageSrc = function (data) {
        // console.log("final", this.configService.baseUrl + "store/image/" + this.formatURL(data))
        return this.configService.baseUrl + "store/image/" + this.formatURL(data);
    };
    BodyStoreComponent.prototype.getItem = function () {
        var _this = this;
        this.store.getStoreItem().subscribe(function (data) {
            _this.stores = data.stores.docs;
            // console.log("Cek Items : ", this.stores);
        });
    };
    BodyStoreComponent.prototype.postOrder = function () {
        this.store.postOrderItem(this.orderItem.value).subscribe(function (data) {
            alert("Pemesanan berhasil Direkam");
            window.location.reload();
            // console.log("Cek Pesan : ", data)
        }, function (err) {
            console.log('err', err);
            if (err.status == 401)
                alert("Data anda Salah");
        });
    };
    BodyStoreComponent.prototype.formatPrice = function (value) {
        var val = (value / 1);
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    BodyStoreComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] },
        { type: src_app_services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    BodyStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-store',
            template: __webpack_require__(/*! raw-loader!./body-store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/body-store/body-store.component.html"),
            styles: [__webpack_require__(/*! ./body-store.component..scss */ "./src/app/store/body-store/body-store.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], src_app_services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], BodyStoreComponent);
    return BodyStoreComponent;
}());



/***/ }),

/***/ "./src/app/store/store.component..scss":
/*!*********************************************!*\
  !*** ./src/app/store/store.component..scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC4uc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var StoreComponent = /** @class */ (function () {
    function StoreComponent(httpClient, configService) {
        this.httpClient = httpClient;
        this.configService = configService;
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
    ]; };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component..scss */ "./src/app/store/store.component..scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA7Lacb7kEgOD2RpiiY-G0DYe82ZVAm_pw",
        authDomain: "mpkmb-test.firebaseapp.com",
        databaseURL: "https://mpkmb-test.firebaseio.com",
        projectId: "mpkmb-test",
        storageBucket: "mpkmb-test.appspot.com",
        messagingSenderId: "647120911494",
        appId: "1:647120911494:web:9b6a806696f3fbaf"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\Gitpanda\mpkmbApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map