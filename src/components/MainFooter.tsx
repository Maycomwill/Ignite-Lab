import { Heading } from "./Heading";
import { SVGFooter } from "./SVGFooter";
import { Text } from "./Text";

function MainFooter() {
  return (
    <div className="bg-gray-900 flex items-center px-12 justify-between w-screen">
      <div>
        <Text size="xxs" className="text-gray-500">Todos os direitos reservados &reg;</Text>
      </div>
      <div className="flex flex-col items-center justify-center">
      <SVGFooter width={25} height={25} />
      <Text size="xxs" className="text-gray-500">
        Plataforma desenvolvida por Maycom Willams
      </Text>
      </div>
    </div>
  );
}
export default MainFooter;
