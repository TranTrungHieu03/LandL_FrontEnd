import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const locales = {
  en: 'English',
  vi: 'Tieng Viet'
}
const resources = {
  en: {
    translation: {
      Home: 'Home',
      'About us': 'About Us',
      'Create order': 'Create Order',
      Cost: 'Cost',
      Blog: 'Blog'
    }
  },
  vi: {
    translation: {
      Home: 'Trang chủ',
      'About us': 'Ve chúng tôi',
      'Create order': 'Tạo đơn hàng',
      Cost: 'Bảng giá',
      Blog: 'Bài đăng'
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
