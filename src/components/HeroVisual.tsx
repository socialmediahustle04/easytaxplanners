import Image from "next/image";
import { HeroCompliancePanel } from "./HeroCompliancePanel";

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md select-none lg:min-h-[440px] lg:max-w-none lg:pl-4"
    >
      <div className="relative ml-auto w-full overflow-hidden rounded-[2rem] lg:h-[440px] lg:w-[88%]">
        <div className="relative aspect-[4/5] w-full lg:h-full lg:aspect-auto">
          <Image
            src="/images/generated/hero-trust-visual.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 92vw"
            className="object-cover object-center lg:object-[56%_center]"
          />
        </div>
      </div>

      <HeroCompliancePanel className="relative z-10 mx-auto -mt-10 w-[90%] max-w-xs sm:max-w-sm lg:absolute lg:left-0 lg:top-12 lg:mt-0 lg:w-[300px]" />
    </div>
  );
}
