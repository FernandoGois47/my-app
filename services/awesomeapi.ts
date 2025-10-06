let baseUrl = 'https://economia.awesomeapi.com.br/json';

export const getUSD = async () => {
    try {
        let url = baseUrl + '/last/USD-BRL?token=39ef0c0efe7882870ec8d2032a52db562107a897ee3e61ec39e982ca3cdfab6c';
        const req = await fetch(url);
        const json = await req.json();

        if (json.USDBRL) {
            return parseFloat(json.USDBRL.ask);
        }    
        return 0;
    } catch (error) {
        return 0;
    }
}