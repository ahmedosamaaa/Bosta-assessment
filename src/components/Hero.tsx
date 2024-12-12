import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation("header");

    return (
        <section className="flex flex-col items-center justify-center w-full h-full py-6 bg-bluelight md:h-80">
            <img src="/images/pin.svg" alt="track-order" />

            <p className="py-2 text-3xl font-bold text-text-color ">
                {t("hero")}
            </p>
            <p className="py-2 text-sm font-normal text-text-color ">
                {t("heroDesc")}
            </p>
        </section>
    );
};

export default Hero;
