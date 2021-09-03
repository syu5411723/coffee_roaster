import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  PagesHome: () => import('../../components/pages/Home.vue' /* webpackChunkName: "components/pages-home" */).then(c => wrapFunctional(c.default || c)),
  TemplatesFooter: () => import('../../components/templates/Footer.vue' /* webpackChunkName: "components/templates-footer" */).then(c => wrapFunctional(c.default || c)),
  TemplatesHeader: () => import('../../components/templates/Header.vue' /* webpackChunkName: "components/templates-header" */).then(c => wrapFunctional(c.default || c)),
  TemplatesImgWrapper: () => import('../../components/templates/ImgWrapper.vue' /* webpackChunkName: "components/templates-img-wrapper" */).then(c => wrapFunctional(c.default || c)),
  TemplatesSec1: () => import('../../components/templates/Sec1.vue' /* webpackChunkName: "components/templates-sec1" */).then(c => wrapFunctional(c.default || c)),
  TemplatesSec2: () => import('../../components/templates/Sec2.vue' /* webpackChunkName: "components/templates-sec2" */).then(c => wrapFunctional(c.default || c)),
  TemplatesSec3: () => import('../../components/templates/Sec3.vue' /* webpackChunkName: "components/templates-sec3" */).then(c => wrapFunctional(c.default || c)),
  TemplatesSec4: () => import('../../components/templates/Sec4.vue' /* webpackChunkName: "components/templates-sec4" */).then(c => wrapFunctional(c.default || c)),
  Templates: () => import('../../components/templates/index.js' /* webpackChunkName: "components/templates" */).then(c => wrapFunctional(c.default || c)),
  MoleculesHeaderList: () => import('../../components/molecules/header/List.vue' /* webpackChunkName: "components/molecules-header-list" */).then(c => wrapFunctional(c.default || c)),
  MoleculesHeaderLogo: () => import('../../components/molecules/header/Logo.vue' /* webpackChunkName: "components/molecules-header-logo" */).then(c => wrapFunctional(c.default || c)),
  MoleculesHeaderTitle: () => import('../../components/molecules/header/Title.vue' /* webpackChunkName: "components/molecules-header-title" */).then(c => wrapFunctional(c.default || c)),
  AtomsDesignSecTitle: () => import('../../components/atoms/design/SecTitle.vue' /* webpackChunkName: "components/atoms-design-sec-title" */).then(c => wrapFunctional(c.default || c)),
  AtomsFooterBottom: () => import('../../components/atoms/footer/FooterBottom.vue' /* webpackChunkName: "components/atoms-footer-bottom" */).then(c => wrapFunctional(c.default || c)),
  AtomsFooterCntEn: () => import('../../components/atoms/footer/FooterCntEn.vue' /* webpackChunkName: "components/atoms-footer-cnt-en" */).then(c => wrapFunctional(c.default || c)),
  AtomsFooterCntJp: () => import('../../components/atoms/footer/FooterCntJp.vue' /* webpackChunkName: "components/atoms-footer-cnt-jp" */).then(c => wrapFunctional(c.default || c)),
  AtomsHeaderList: () => import('../../components/atoms/header/HeaderList.vue' /* webpackChunkName: "components/atoms-header-list" */).then(c => wrapFunctional(c.default || c)),
  AtomsHeaderLogo: () => import('../../components/atoms/header/HeaderLogo.vue' /* webpackChunkName: "components/atoms-header-logo" */).then(c => wrapFunctional(c.default || c)),
  AtomsHeaderTitle: () => import('../../components/atoms/header/HeaderTitle.vue' /* webpackChunkName: "components/atoms-header-title" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec01Bottom: () => import('../../components/molecules/main/sec01/Sec01Bottom.vue' /* webpackChunkName: "components/molecules-main-sec01-bottom" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec01Main: () => import('../../components/molecules/main/sec01/Sec01Main.vue' /* webpackChunkName: "components/molecules-main-sec01-main" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec02Content: () => import('../../components/molecules/main/sec02/Sec02Content.vue' /* webpackChunkName: "components/molecules-main-sec02-content" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec02Image: () => import('../../components/molecules/main/sec02/Sec02Image.vue' /* webpackChunkName: "components/molecules-main-sec02-image" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec02Title: () => import('../../components/molecules/main/sec02/Sec02Title.vue' /* webpackChunkName: "components/molecules-main-sec02-title" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec02: () => import('../../components/molecules/main/sec02/index.js' /* webpackChunkName: "components/molecules-main-sec02" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainMenu: () => import('../../components/molecules/main/sec03/MainMenu.vue' /* webpackChunkName: "components/molecules-main-menu" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec03SubMenu: () => import('../../components/molecules/main/sec03/SubMenu.vue' /* webpackChunkName: "components/molecules-main-sec03-sub-menu" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec04FromOnline: () => import('../../components/molecules/main/sec04/FromOnline.vue' /* webpackChunkName: "components/molecules-main-sec04-from-online" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec04Img: () => import('../../components/molecules/main/sec04/Sec04Img.vue' /* webpackChunkName: "components/molecules-main-sec04-img" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec04Img02: () => import('../../components/molecules/main/sec04/Sec04Img02.vue' /* webpackChunkName: "components/molecules-main-sec04-img02" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec04Text: () => import('../../components/molecules/main/sec04/Sec04Text.vue' /* webpackChunkName: "components/molecules-main-sec04-text" */).then(c => wrapFunctional(c.default || c)),
  MoleculesMainSec04: () => import('../../components/molecules/main/sec04/index.js' /* webpackChunkName: "components/molecules-main-sec04" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec01BottomText: () => import('../../components/atoms/main/sec01/Sec01BottomText.vue' /* webpackChunkName: "components/atoms-main-sec01-bottom-text" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec01Date: () => import('../../components/atoms/main/sec01/Sec01Date.vue' /* webpackChunkName: "components/atoms-main-sec01-date" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec01Image: () => import('../../components/atoms/main/sec01/Sec01Image.vue' /* webpackChunkName: "components/atoms-main-sec01-image" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec01Title: () => import('../../components/atoms/main/sec01/Sec01Title.vue' /* webpackChunkName: "components/atoms-main-sec01-title" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec02ContentEn: () => import('../../components/atoms/main/sec02/Sec02ContentEn.vue' /* webpackChunkName: "components/atoms-main-sec02-content-en" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec02ContentJp: () => import('../../components/atoms/main/sec02/Sec02ContentJp.vue' /* webpackChunkName: "components/atoms-main-sec02-content-jp" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec02SubThumb: () => import('../../components/atoms/main/sec02/Sec02SubThumb.vue' /* webpackChunkName: "components/atoms-main-sec02-sub-thumb" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec02Thumb: () => import('../../components/atoms/main/sec02/Sec02Thumb.vue' /* webpackChunkName: "components/atoms-main-sec02-thumb" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainMenuImg: () => import('../../components/atoms/main/sec03/MainMenuImg.vue' /* webpackChunkName: "components/atoms-main-menu-img" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainMenuInfo: () => import('../../components/atoms/main/sec03/MainMenuInfo.vue' /* webpackChunkName: "components/atoms-main-menu-info" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainMenuName: () => import('../../components/atoms/main/sec03/MainMenuName.vue' /* webpackChunkName: "components/atoms-main-menu-name" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec03SubMenuCenter: () => import('../../components/atoms/main/sec03/SubMenuCenter.vue' /* webpackChunkName: "components/atoms-main-sec03-sub-menu-center" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec03SubMenuLeft: () => import('../../components/atoms/main/sec03/SubMenuLeft.vue' /* webpackChunkName: "components/atoms-main-sec03-sub-menu-left" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec03SubMenuRight: () => import('../../components/atoms/main/sec03/SubMenuRight.vue' /* webpackChunkName: "components/atoms-main-sec03-sub-menu-right" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec04Button: () => import('../../components/atoms/main/sec04/Sec04Button.vue' /* webpackChunkName: "components/atoms-main-sec04-button" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec04Content: () => import('../../components/atoms/main/sec04/Sec04Content.vue' /* webpackChunkName: "components/atoms-main-sec04-content" */).then(c => wrapFunctional(c.default || c)),
  AtomsMainSec04: () => import('../../components/atoms/main/sec04/index.js' /* webpackChunkName: "components/atoms-main-sec04" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
