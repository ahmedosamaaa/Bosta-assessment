import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "ENG" },
    { code: "ar", lang: "AR" },
];

type SelectorProps = {
    className?: string;
};

const LanguageSelector = ({ className = "" }: SelectorProps) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const alternateLanguage = languages.find(
        (lng) => lng.code !== i18n.language
    );

    return (
        <div className="btn-container">
            {alternateLanguage && (
                <button
                    onClick={() => changeLanguage(alternateLanguage.code)}
                    className={className}
                >
                    {alternateLanguage.lang}
                </button>
            )}
        </div>
    );
};

export default LanguageSelector;
