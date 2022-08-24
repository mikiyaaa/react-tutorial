const JS_FRAMEWORKS = [
    'React',
    'Vue',
    'Angular',
];

export const getFrameworks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JS_FRAMEWORKS);
        }, 2000)
    })
}