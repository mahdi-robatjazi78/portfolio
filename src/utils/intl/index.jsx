import React , {useContext} from 'react'
import { IntlProvider } from "react-intl";
import faLanguageTexts from './fa'
import enLanguageTexts from './en'
import {LanguageContext} from '../context/language';
import { FormattedMessage, injectIntl } from "react-intl";

export const InternationalizationProvider =(props)=>{
    const {children} = props;
    const {lang} = useContext(LanguageContext)


    const faLang = {
        messages: {
          ...faLanguageTexts
        },
        locale: "fa-IR", 
    };

    const enLang = {
        messages: {
          ...enLanguageTexts
        },
        locale: "en-US", 
    };




    const AppLocale = {
        "en-US": enLang,
        "fa-IR": faLang,
    };
  


    return (
        <IntlProvider 
            locale={lang}
            messages={AppLocale[lang].messages}
        
        >
            {children}
        </IntlProvider>
    )
}


const InjectMassage = (props) => <FormattedMessage {...props} />;
export default injectIntl(InjectMassage, {
    withRef: false,
}); 


