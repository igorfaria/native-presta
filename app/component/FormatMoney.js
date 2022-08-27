import AppConfig from '../core/AppConfig'
import Intl from 'intl'
import pt from 'intl/locale-data/jsonp/pt-PT'

export const FormatMoney = (value) => {
    var formatter = new Intl.NumberFormat(pt, {
        style: 'currency',
        currency: AppConfig.price.currency
    });
    return formatter.format(parseFloat(value));
}