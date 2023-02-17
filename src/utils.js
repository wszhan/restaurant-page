export function generateImageElement(imageSource, imageAttributes) {
    const image = new Image();
    image.src = imageSource;
    imageAttributes

    for (let k in imageAttributes) {
        image.setAttribute(k, imageAttributes[k]);
    }

    return image;
}