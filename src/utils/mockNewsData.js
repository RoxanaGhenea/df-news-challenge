import axios from 'axios';

export const getArticlesData = async () => {
    const apiKey = "https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=72b65647-e224-4a52-9210-3863872df366"
    try {
        const responseData = await axios.get(`${ apiKey }`);
        return responseData.data.response.results;
    }
    catch (error) {
        return error;
    }
}

getArticlesData();
