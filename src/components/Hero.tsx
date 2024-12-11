import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation("header");

    return (
        <section className="flex  flex-col items-center justify-center py-6  bg-[#F3FAFB] w-full h-full md:h-80">
            <img src="/images/pin.svg" alt="track-order" />

            <p className="py-5 text-3xl font-bold ">{t("hero")}</p>
        </section>
    );
};

export default Hero;
