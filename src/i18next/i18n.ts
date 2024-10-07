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
      Blog: 'Blog',
      'Change language': 'Change language',
      English: 'English',
      Vietnamese: 'Vietnamese',
      ContentBanner:
        'Welcome to Leopard Lorry - a groundbreaking sharing economy platform in the Vietnamese transportation industry. With 5 years of experience in the content field , we are confident to bring you a smart, efficient and economical transportation experience.',
      Step: 'Step',
      'Sign up and log in': 'Sign up and log in',
      Step2: 'Step 2',
      'Enter the information you need to search for': 'Enter the information you need to search for',
      Step3: 'Step 3',
      'Select the appropriate option': 'Select the appropriate option',
      Step4: 'Step 4',
      'Confirm and wait for a response within 24 hours': 'Confirm and wait for a response within 24 hours',
      Step5: 'Step 5',
      'Complete payment and delivery': 'Complete payment and delivery',
      'How to use our service?': 'How to use our service?',
      'Leap and Lead': 'Leap and Lead',
      AboutUsContent1:
        'Welcome to Leopard Lorry (L&L), a pioneering force in the transportation industry, driven by a passion for innovating domestic logistics. "Bao" leverages the power of the sharing economy to create an innovative platform that optimizes transportation efficiency across Vietnam.',
      AboutUsContent2:
        'With a vision to transform the way goods move, "Bao"\'s platform connects shippers with a network of trusted carriers, ensuring fast, reliable and cost-effective delivery solutions.',
      AboutUsContent3:
        'Benefits for drivers and businesses: "Bao" offers drivers the opportunity to increase their income with flexible shipments, optimizing time and effort, along with dedicated support through modern applications. For businesses, access to a large transportation network helps reduce costs and optimize the supply chain, while expanding business capabilities effectively.',
      AboutUsContent4:
        'Join "Bao" on the journey to redefine transportation. Experience the future of logistics with Leopard Lorry and discover how we can drive success together.',
      'Our story': 'Our story',
      About: 'About',
      'Read more': 'Read more',
      team: 'team',
      members: 'members',
      successfully: 'successfully',
      project: 'project',
      Global: 'Global',
      partners: 'partners',
      q1: 'How does Leopard Lorry work?',
      a1: '"Bao" connects shippers with a network of trusted drivers through an advanced digital platform. Allowing other orders to share the same cargo compartment in a single bill of lading helps to significantly optimize shipping costs',
      q2: "What are the benefits of using Leopard Lorry's service?",
      a2: 'Customers will save up to 30%, have 20% faster delivery times, and receive flexible, reliable service. Drivers have the opportunity to increase their income by up to 25% and manage their work more easily through the application.',
      q3: "How can businesses join Leopard Lorry's platform?",
      a3: 'Businesses can register online through the "Bao" website, then will be guided in detail to get started. Currently, there are more than 50 businesses ready to join and satisfied with the service.',

      q4: 'How does Leopard Lorry ensure the safety of goods?',
      a4: '"Bao" applies strict safety standards and continuously monitors the journey of goods, with a cargo safety rate of 99.8%, ensuring that your goods are always in the best condition.',

      q5: "How much does it cost to use Leopard Lorry's service?",
      a5: 'The cost depends on the characteristics of each shipment, but "Bao" is committed to providing the most competitive and transparent prices. Customers can receive a quick quote via the app or website.',
      safe: 'Safe',
      getQuote: 'Get a quote',
      fast: 'Fast',
      global: 'Global Forwarding'
    }
  },
  vi: {
    translation: {
      global: 'Toàn cầu',
      fast: 'Nhanh chóng',
      getQuote: 'Nhận báo giá',
      safe: 'An toàn',
      q3: 'Làm thế nào để doanh nghiệp tham gia vào nền tảng của Leopard Lorry?',
      a3: 'Doanh nghiệp có thể đăng ký trực tuyến qua website của "Báo", sau đó sẽ được hướng dẫn chi tiết để bắt đầu. Hiện tại, đã có hơn 50 doanh nghiệp sẵn sàng tham gia và hài lòng với dịch vụ.',

      q4: 'Leopard Lorry đảm bảo an toàn hàng hóa như thế nào?',
      a4: '"Báo" áp dụng các tiêu chuẩn an toàn nghiêm ngặt và theo dõi hành trình hàng hóa liên tục, với tỷ lệ an toàn hàng hóa đạt 99.8%, đảm bảo hàng hóa của bạn luôn trong tình trạng tốt nhất.',

      q5: 'Chi phí sử dụng dịch vụ của Leopard Lorry là bao nhiêu?',
      a5: 'Chi phí phụ thuộc vào đặc thù từng chuyến hàng, nhưng "Báo" cam kết mang lại mức giá cạnh tranh và minh bạch nhất. Khách hàng có thể nhận báo giá nhanh chóng qua ứng dụng hoặc website.',
      q1: 'Leopard Lorry hoạt động như thế nào?',
      a1: '"Bao" kết nối người gửi hàng với một mạng lưới tài xế đáng tin cậy thông qua một nền tảng kỹ thuật số tiên tiến. Việc cho phép các đơn hàng khác chia sẻ cùng một khoang hàng trong một vận đơn giúp tối ưu hóa chi phí vận chuyển một cách đáng kể.',
      q2: 'Lợi ích của việc sử dụng dịch vụ của Leopard Lorry là gì?',
      a2: 'Khách hàng sẽ tiết kiệm được tới 30%, có thời gian giao hàng nhanh hơn 20%, và nhận được dịch vụ linh hoạt, đáng tin cậy. Các tài xế có cơ hội tăng thu nhập lên tới 25% và quản lý công việc của họ dễ dàng hơn thông qua ứng dụng.',
      team: 'Thành',
      members: 'viên',
      successfully: 'Dự án',
      project: 'Thành công',
      Global: 'Đối tác',
      partners: 'toàn cầu',
      'Read more': 'Tìm hỉểu thêm',
      About: 'Về',
      'Our story': 'Câu chuyện của chúng tôi',
      Home: 'Trang chủ',
      'About us': 'Về chúng tôi',
      'Create order': 'Tạo đơn hàng',
      Cost: 'Bảng giá',
      Blog: 'Bài đăng',
      'Change language': 'Đổi ngôn ngữ',
      English: 'Tiếng Anh',
      Vietnamese: 'Tiếng Việt',
      ContentBanner:
        'Chào mừng bạn đến với Leopard Lorry - nền tảng kinh tế chia sẻ mang tính đột phá trong ngành vận tải Việt Nam. Với 5 năm kinh nghiệm trong lĩnh vực nội dung, chúng tôi tự tin mang đến cho bạn trải nghiệm di chuyển thông minh, hiệu quả và tiết kiệm.',
      Step: 'Bước',
      'Sign up and log in': 'Đăng ký và đăng nhập',
      Step2: 'Bước 2',
      'Enter the information you need to search for': 'Nhập thông tin bạn cần tìm kiếm',
      Step3: 'Bước 3',
      'Select the appropriate option': 'Chọn tùy chọn phù hợp',
      Step4: 'Bước 4',
      'Confirm and wait for a response within 24 hours': 'Xác nhận và chờ phản hồi trong vòng 24 giờ',
      Step5: 'Bước 5',
      'Complete payment and delivery': 'Hoàn tất thanh toán và giao hàng',
      'How to use our service?': 'Cách sử dụng dịch vụ của chúng tôi?',
      'Leap and Lead': 'Bắt kịp xu thế',
      AboutUsContent1:
        'Chào mừng bạn đến với Leopard Lorry (L&L), một lực lượng tiên phong trong ngành vận tải, được thúc đẩy bởi đam mê cải tiến logistics nội địa. "Báo" tận dụng sức mạnh của nền kinh tế chia sẻ để tạo ra một nền tảng sáng tạo, tối ưu hóa hiệu quả vận chuyển khắp Việt Nam.',
      AboutUsContent2:
        'Với tầm nhìn chuyển đổi cách thức di chuyển hàng hóa, nền tảng của "Báo" kết nối người gửi hàng với mạng lưới các nhà vận chuyển đáng tin cậy, đảm bảo giải pháp giao hàng nhanh chóng, tin cậy và tiết kiệm chi phí.',
      AboutUsContent3:
        'Lợi ích cho các bác tài và doanh nghiệp: "Báo" mang đến cơ hội tăng thu nhập cho các bác tài với các chuyến hàng linh hoạt, giúp tối ưu hóa thời gian và công sức, cùng với sự hỗ trợ tận tình qua ứng dụng hiện đại. Đối với doanh nghiệp, việc tiếp cận một mạng lưới vận tải rộng lớn giúp giảm chi phí và tối ưu hóa chuỗi cung ứng, đồng thời mở rộng khả năng kinh doanh một cách hiệu quả.',
      AboutUsContent4:
        'Hãy cùng "Báo" trên hành trình tái định nghĩa vận tải. Trải nghiệm tương lai của logistics với Leopard Lorry và khám phá cách chúng ta có thể cùng nhau thúc đẩy thành công. '
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
