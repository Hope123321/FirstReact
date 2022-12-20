import { useTranslation } from "react-i18next";

export function Home() {
    //i18n
    const { t  } = useTranslation();

    return (
        <>
            <h1>{t('Home.Name')}</h1>
            <p>{t('Welcome')}</p>
        </>
    );
}