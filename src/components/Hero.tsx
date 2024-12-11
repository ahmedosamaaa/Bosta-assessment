import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation("header");

    return (
        <section className="flex  flex-col items-center justify-center py-6  bg-[#F3FAFB] w-full h-full md:h-80">
            <img src="/images/pin.svg" alt="track-order" />

            <p className="py-2 text-3xl font-bold ">{t("hero")}</p>
            <p className="py-2 text-sm font-normal ">{t("heroDesc")}</p>
        </section>
    );
};

export default Hero;
