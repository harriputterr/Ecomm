import HomePage from '@/app/pages/home-page/page'
import ShopPage from '@/app/pages/shop-page/page'
import Image from 'next/image'
import CreateItemForm from './components/CreateItem'
import ViewItem from './pages/view-item/page'
import LoginRegister from './pages/login-register-page/page'


export default function Home() {
  return (
    <main>
      <HomePage />
      {/* <ShopPage /> */}
      {/* <img src={"https://raw.githubusercontent.com/harriputterr/Test-fetch-images/main/air-freshner2.webp"} alt='Air Freshner Image'/> */}
      {/* <CreateItemForm /> */}
      {/* <ViewItem /> */}
      {/* <LoginRegister /> */}

    </main>
  )
}
