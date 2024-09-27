import { Navigate, Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/contants/routerEndpoint.ts'
import React, { Suspense } from 'react'
import Loading from '@/components/templates/Loading.tsx'
import AdminTruckPage from './components/pages/Admin/AdminTruckPage'
import AdminCustomerPage from './components/pages/Admin/AdminCustomerPage'
import AdminOrderPage from './components/pages/Admin/AdminOrderPage'
const LoginPage = React.lazy(() => import('@/components/pages/Login/LoginPage.tsx'))
const SignupPage = React.lazy(() => import('@/components/pages/Signup/SignupPage.tsx'))
const ForgotPasswordPage = React.lazy(() => import('@/components/pages/ForgotPassword/ForgotPasswordPage.tsx'))
const VerifyCodePage = React.lazy(() => import('@/components/pages/VerifyCode/VerifyCodePage.tsx'))
const SetPasswordPage = React.lazy(() => import('@/components/pages/SetPassword/SetPasswordPage.tsx'))
const HomeLayout = React.lazy(() => import('@/components/templates/HomeLayout.tsx'))
const MainLayout = React.lazy(() => import('@/components/templates/MainLayout.tsx'))
const ServicePage = React.lazy(() => import('@/components/pages/Service/ServicePage.tsx'))
const CostPage = React.lazy(() => import('@/components/pages/Cost/CostPage.tsx'))
const BlogPage = React.lazy(() => import('@/components/pages/Blog/BlogPage.tsx'))
const AboutUsPage = React.lazy(() => import('@/components/pages/AboutUs/AboutUsPage.tsx'))
const ProfilePage = React.lazy(() => import('@/components/pages/Profile/ProfilePage.tsx'))
const BlogDetailPage = React.lazy(() => import('@/components/pages/Blog/BlogDetailPage.tsx'))
const AdminLayout = React.lazy(() => import('@/components/templates/AdminLayout.tsx'))
const MyOrderPage = React.lazy(() => import('@/components/pages/MyOrder/MyOrderPage.tsx'))
const OrderDetailPage = React.lazy(() => import('@/components/pages/OrderDetail/OrderDetailPage.tsx'))
const AuthCallbackPage = React.lazy(() => import('@/components/pages/Auth0/AuthCallbackPage.tsx'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/auth-callback' element={<AuthCallbackPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignupPage />} />,
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />,
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />,
        <Route path={ROUTES.VERIFY_CODE} element={<VerifyCodePage />} />,
        <Route path={ROUTES.SET_PASSWORD} element={<SetPasswordPage />} />,
        <Route path={ROUTES.ROOT} element={<HomeLayout />} />,
        <Route path={ROUTES.ROOT} element={<MainLayout />}>
          <Route path={ROUTES.CREATE_ORDER} element={<ServicePage />} />,
          <Route path={ROUTES.COST} element={<CostPage />} />,
          <Route path={ROUTES.BLOG} element={<BlogPage />} />,
          <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />,
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />,
          <Route path={ROUTES.BLOG_DETAIL} element={<BlogDetailPage />} />,
          <Route path={ROUTES.MY_ORDER} element={<MyOrderPage />} />,
          <Route path={ROUTES.ORDER_DETAIL_ID} element={<OrderDetailPage />} />,
        </Route>
        ,
        <Route path={ROUTES.DASH_BOARD} element={<AdminLayout />}>
          <Route path={ROUTES.TRUCK} element={<AdminTruckPage />} />
          <Route path={ROUTES.CUSTOMER} element={<AdminCustomerPage />} />
          <Route path={ROUTES.ORDER} element={<AdminOrderPage />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}
export default AppRoutes
