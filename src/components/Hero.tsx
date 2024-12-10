import { useTranslation } from "react-i18next";

const Hero = () => {
    const { t } = useTranslation("header");

    return (
        <section>
            <div className="flex flex-col items-center justify-center w-full h-28 md:h-80">
                <img src="/images/pin.svg" alt="track-order" />

                <p className="text-3xl font-bold ">{t("hero")}</p>
            </div>
        </section>
    );
};

export default Hero;
