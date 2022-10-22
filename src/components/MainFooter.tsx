import { Heading } from "./Heading";
import { SVGFooter } from "./SVGFooter";
import { Text } from "./Text";

function MainFooter() {
  return (
    <div className="bg-gray-900 flex items-center gap-1 px-4 justify-between w-screen">
      <div>
        <Text size="xsm">Todos os direitos reservados &reg;</Text>
      </div>
      <div className="flex flex-col items-center justify-center">
      <SVGFooter width={40} height={40} />
      <Text size="xsm" className="text-gray-400">
        Plataforma desenvolvida por Maycom Willams
      </Text>
      </div>
    </div>
  );
}
export default MainFooter;
