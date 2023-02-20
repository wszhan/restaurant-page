export function generateImageElement(imageSource, imageAttributes) {
    const image = new Image();
    image.src = imageSource;
    imageAttributes

    for (let k in imageAttributes) {
        image.setAttribute(k, imageAttributes[k]);
    }

    return image;
}

export function removeImageCredits() { // if any
    const credits = document.getElementById('credits');
    if (credits) {
        credits.remove();
    }
}

export function generateImageCredits() {
    const anchor = document.createElement('a');
    anchor.href = 'https://weibo.com/u/2623471650';
    anchor.textContent = '黄小B';

    const div = document.createElement('div');
    div.setAttribute('id', 'credits');
    div.textContent = 'Image Credits to ';
    div.appendChild(anchor);

    document.body.appendChild(div);
}