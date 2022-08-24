export const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
];

// 1秒後に配列データを取得する処理
export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000)
    });
}