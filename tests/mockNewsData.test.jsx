// 1 - Test that getArticlesData actually makes the external data call
// 2 - Test that a successful request returns the right data
// 3 - Test that an unsuccessful request returns the error

import axios from 'axios';

import { getArticlesData } from '../src/utils/mockNewsData';

import mockData from "../mockNewsData.json";


vi.mock(`axios`);

describe('getArticlesData tests', () => {
    describe('GET request tests to /mockApiResponse', () => {
        
        it('1 - should actually make the external data call', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: { response: { results: mockData }}});
            // Act
            await getArticlesData();
            // Assert
            expect(axios.get).toHaveBeenCalledWith(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=72b65647-e224-4a52-9210-3863872df366`);
        });

        test('2 - should have successful request returning the right data', async () => {
            // Arrange
            axios.get.mockResolvedValueOnce({ data: { response: { results: mockData }}});
            // Act
            const result = await getArticlesData();
            // Assert 
            expect(result).toEqual(mockData);
        });

        test('3 - should have unsuccessful request returning the error object', async () => {
            // Arrange
            const error = { message: `Error` };
            axios.get.mockRejectedValueOnce(error);
            // Act
            const result = await getArticlesData();
            // Assert
            expect(result).toBe(error);
        });
    });
});