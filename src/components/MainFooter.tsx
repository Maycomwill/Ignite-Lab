import { SVGFooter } from "./SVGFooter"
import { Text } from "./Text"

function MainFooter() {
  return (
    <div className="bg-gray-900 flex items-center gap-4 pb-4 justify-center w-screen">
      <SVGFooter width={40} height={40} />
      <Text className='text-gray-400'>Plataforma desenvolvida por Maycom Willams</Text>
    </div>
  )
}
export default MainFooter