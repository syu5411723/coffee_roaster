import { wrapFunctional } from './utils'

export { default as PagesHome } from '../../components/pages/Home.vue'
export { default as TemplatesFooter } from '../../components/templates/Footer.vue'
export { default as TemplatesHeader } from '../../components/templates/Header.vue'
export { default as TemplatesImgWrapper } from '../../components/templates/ImgWrapper.vue'
export { default as TemplatesSec1 } from '../../components/templates/Sec1.vue'
export { default as TemplatesSec2 } from '../../components/templates/Sec2.vue'
export { default as TemplatesSec3 } from '../../components/templates/Sec3.vue'
export { default as TemplatesSec4 } from '../../components/templates/Sec4.vue'
export { default as Templates } from '../../components/templates/index.js'
export { default as MoleculesHeaderList } from '../../components/molecules/header/List.vue'
export { default as MoleculesHeaderLogo } from '../../components/molecules/header/Logo.vue'
export { default as MoleculesHeaderTitle } from '../../components/molecules/header/Title.vue'
export { default as AtomsDesignSecTitle } from '../../components/atoms/design/SecTitle.vue'
export { default as AtomsFooterBottom } from '../../components/atoms/footer/FooterBottom.vue'
export { default as AtomsFooterCntEn } from '../../components/atoms/footer/FooterCntEn.vue'
export { default as AtomsFooterCntJp } from '../../components/atoms/footer/FooterCntJp.vue'
export { default as AtomsHeaderList } from '../../components/atoms/header/HeaderList.vue'
export { default as AtomsHeaderLogo } from '../../components/atoms/header/HeaderLogo.vue'
export { default as AtomsHeaderTitle } from '../../components/atoms/header/HeaderTitle.vue'
export { default as MoleculesMainSec01Bottom } from '../../components/molecules/main/sec01/Sec01Bottom.vue'
export { default as MoleculesMainSec01Main } from '../../components/molecules/main/sec01/Sec01Main.vue'
export { default as MoleculesMainSec02Content } from '../../components/molecules/main/sec02/Sec02Content.vue'
export { default as MoleculesMainSec02Image } from '../../components/molecules/main/sec02/Sec02Image.vue'
export { default as MoleculesMainSec02Title } from '../../components/molecules/main/sec02/Sec02Title.vue'
export { default as MoleculesMainSec02 } from '../../components/molecules/main/sec02/index.js'
export { default as MoleculesMainMenu } from '../../components/molecules/main/sec03/MainMenu.vue'
export { default as MoleculesMainSec03SubMenu } from '../../components/molecules/main/sec03/SubMenu.vue'
export { default as MoleculesMainSec04FromOnline } from '../../components/molecules/main/sec04/FromOnline.vue'
export { default as MoleculesMainSec04Img } from '../../components/molecules/main/sec04/Sec04Img.vue'
export { default as MoleculesMainSec04Img02 } from '../../components/molecules/main/sec04/Sec04Img02.vue'
export { default as MoleculesMainSec04Text } from '../../components/molecules/main/sec04/Sec04Text.vue'
export { default as MoleculesMainSec04 } from '../../components/molecules/main/sec04/index.js'
export { default as AtomsMainSec01BottomText } from '../../components/atoms/main/sec01/Sec01BottomText.vue'
export { default as AtomsMainSec01Date } from '../../components/atoms/main/sec01/Sec01Date.vue'
export { default as AtomsMainSec01Image } from '../../components/atoms/main/sec01/Sec01Image.vue'
export { default as AtomsMainSec01Title } from '../../components/atoms/main/sec01/Sec01Title.vue'
export { default as AtomsMainSec02ContentEn } from '../../components/atoms/main/sec02/Sec02ContentEn.vue'
export { default as AtomsMainSec02ContentJp } from '../../components/atoms/main/sec02/Sec02ContentJp.vue'
export { default as AtomsMainSec02SubThumb } from '../../components/atoms/main/sec02/Sec02SubThumb.vue'
export { default as AtomsMainSec02Thumb } from '../../components/atoms/main/sec02/Sec02Thumb.vue'
export { default as AtomsMainMenuImg } from '../../components/atoms/main/sec03/MainMenuImg.vue'
export { default as AtomsMainMenuInfo } from '../../components/atoms/main/sec03/MainMenuInfo.vue'
export { default as AtomsMainMenuName } from '../../components/atoms/main/sec03/MainMenuName.vue'
export { default as AtomsMainSec03SubMenuCenter } from '../../components/atoms/main/sec03/SubMenuCenter.vue'
export { default as AtomsMainSec03SubMenuLeft } from '../../components/atoms/main/sec03/SubMenuLeft.vue'
export { default as AtomsMainSec03SubMenuRight } from '../../components/atoms/main/sec03/SubMenuRight.vue'
export { default as AtomsMainSec04Button } from '../../components/atoms/main/sec04/Sec04Button.vue'
export { default as AtomsMainSec04Content } from '../../components/atoms/main/sec04/Sec04Content.vue'
export { default as AtomsMainSec04 } from '../../components/atoms/main/sec04/index.js'

export const LazyPagesHome = import('../../components/pages/Home.vue' /* webpackChunkName: "components/pages-home" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesFooter = import('../../components/templates/Footer.vue' /* webpackChunkName: "components/templates-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesHeader = import('../../components/templates/Header.vue' /* webpackChunkName: "components/templates-header" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesImgWrapper = import('../../components/templates/ImgWrapper.vue' /* webpackChunkName: "components/templates-img-wrapper" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesSec1 = import('../../components/templates/Sec1.vue' /* webpackChunkName: "components/templates-sec1" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesSec2 = import('../../components/templates/Sec2.vue' /* webpackChunkName: "components/templates-sec2" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesSec3 = import('../../components/templates/Sec3.vue' /* webpackChunkName: "components/templates-sec3" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplatesSec4 = import('../../components/templates/Sec4.vue' /* webpackChunkName: "components/templates-sec4" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplates = import('../../components/templates/index.js' /* webpackChunkName: "components/templates" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesHeaderList = import('../../components/molecules/header/List.vue' /* webpackChunkName: "components/molecules-header-list" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesHeaderLogo = import('../../components/molecules/header/Logo.vue' /* webpackChunkName: "components/molecules-header-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesHeaderTitle = import('../../components/molecules/header/Title.vue' /* webpackChunkName: "components/molecules-header-title" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsDesignSecTitle = import('../../components/atoms/design/SecTitle.vue' /* webpackChunkName: "components/atoms-design-sec-title" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsFooterBottom = import('../../components/atoms/footer/FooterBottom.vue' /* webpackChunkName: "components/atoms-footer-bottom" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsFooterCntEn = import('../../components/atoms/footer/FooterCntEn.vue' /* webpackChunkName: "components/atoms-footer-cnt-en" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsFooterCntJp = import('../../components/atoms/footer/FooterCntJp.vue' /* webpackChunkName: "components/atoms-footer-cnt-jp" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsHeaderList = import('../../components/atoms/header/HeaderList.vue' /* webpackChunkName: "components/atoms-header-list" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsHeaderLogo = import('../../components/atoms/header/HeaderLogo.vue' /* webpackChunkName: "components/atoms-header-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsHeaderTitle = import('../../components/atoms/header/HeaderTitle.vue' /* webpackChunkName: "components/atoms-header-title" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec01Bottom = import('../../components/molecules/main/sec01/Sec01Bottom.vue' /* webpackChunkName: "components/molecules-main-sec01-bottom" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec01Main = import('../../components/molecules/main/sec01/Sec01Main.vue' /* webpackChunkName: "components/molecules-main-sec01-main" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec02Content = import('../../components/molecules/main/sec02/Sec02Content.vue' /* webpackChunkName: "components/molecules-main-sec02-content" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec02Image = import('../../components/molecules/main/sec02/Sec02Image.vue' /* webpackChunkName: "components/molecules-main-sec02-image" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec02Title = import('../../components/molecules/main/sec02/Sec02Title.vue' /* webpackChunkName: "components/molecules-main-sec02-title" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec02 = import('../../components/molecules/main/sec02/index.js' /* webpackChunkName: "components/molecules-main-sec02" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainMenu = import('../../components/molecules/main/sec03/MainMenu.vue' /* webpackChunkName: "components/molecules-main-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec03SubMenu = import('../../components/molecules/main/sec03/SubMenu.vue' /* webpackChunkName: "components/molecules-main-sec03-sub-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec04FromOnline = import('../../components/molecules/main/sec04/FromOnline.vue' /* webpackChunkName: "components/molecules-main-sec04-from-online" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec04Img = import('../../components/molecules/main/sec04/Sec04Img.vue' /* webpackChunkName: "components/molecules-main-sec04-img" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec04Img02 = import('../../components/molecules/main/sec04/Sec04Img02.vue' /* webpackChunkName: "components/molecules-main-sec04-img02" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec04Text = import('../../components/molecules/main/sec04/Sec04Text.vue' /* webpackChunkName: "components/molecules-main-sec04-text" */).then(c => wrapFunctional(c.default || c))
export const LazyMoleculesMainSec04 = import('../../components/molecules/main/sec04/index.js' /* webpackChunkName: "components/molecules-main-sec04" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec01BottomText = import('../../components/atoms/main/sec01/Sec01BottomText.vue' /* webpackChunkName: "components/atoms-main-sec01-bottom-text" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec01Date = import('../../components/atoms/main/sec01/Sec01Date.vue' /* webpackChunkName: "components/atoms-main-sec01-date" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec01Image = import('../../components/atoms/main/sec01/Sec01Image.vue' /* webpackChunkName: "components/atoms-main-sec01-image" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec01Title = import('../../components/atoms/main/sec01/Sec01Title.vue' /* webpackChunkName: "components/atoms-main-sec01-title" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec02ContentEn = import('../../components/atoms/main/sec02/Sec02ContentEn.vue' /* webpackChunkName: "components/atoms-main-sec02-content-en" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec02ContentJp = import('../../components/atoms/main/sec02/Sec02ContentJp.vue' /* webpackChunkName: "components/atoms-main-sec02-content-jp" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec02SubThumb = import('../../components/atoms/main/sec02/Sec02SubThumb.vue' /* webpackChunkName: "components/atoms-main-sec02-sub-thumb" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec02Thumb = import('../../components/atoms/main/sec02/Sec02Thumb.vue' /* webpackChunkName: "components/atoms-main-sec02-thumb" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainMenuImg = import('../../components/atoms/main/sec03/MainMenuImg.vue' /* webpackChunkName: "components/atoms-main-menu-img" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainMenuInfo = import('../../components/atoms/main/sec03/MainMenuInfo.vue' /* webpackChunkName: "components/atoms-main-menu-info" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainMenuName = import('../../components/atoms/main/sec03/MainMenuName.vue' /* webpackChunkName: "components/atoms-main-menu-name" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec03SubMenuCenter = import('../../components/atoms/main/sec03/SubMenuCenter.vue' /* webpackChunkName: "components/atoms-main-sec03-sub-menu-center" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec03SubMenuLeft = import('../../components/atoms/main/sec03/SubMenuLeft.vue' /* webpackChunkName: "components/atoms-main-sec03-sub-menu-left" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec03SubMenuRight = import('../../components/atoms/main/sec03/SubMenuRight.vue' /* webpackChunkName: "components/atoms-main-sec03-sub-menu-right" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec04Button = import('../../components/atoms/main/sec04/Sec04Button.vue' /* webpackChunkName: "components/atoms-main-sec04-button" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec04Content = import('../../components/atoms/main/sec04/Sec04Content.vue' /* webpackChunkName: "components/atoms-main-sec04-content" */).then(c => wrapFunctional(c.default || c))
export const LazyAtomsMainSec04 = import('../../components/atoms/main/sec04/index.js' /* webpackChunkName: "components/atoms-main-sec04" */).then(c => wrapFunctional(c.default || c))
