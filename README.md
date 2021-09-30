# NFT Generator

A simple implementation of an NFT generator.

## How it works

Drawing 10,000 unique images by hand is going to be a tedious task. Instead, a better approach could be to just draw the features and then use different permutations of those features.

Using this method, we need to only draw the features and creating an image from combining the features will be done by the application. The images should be drawn as such that they can overlap perfectly over each other. For example

![Face](https://github.com/arpitkarnatak/nft-generator/blob/master/src/paint/face/face1.png)

```An Image for Face```

![Hats](https://github.com/arpitkarnatak/nft-generator/blob/master/src/paint/hats/hat2.png)

```An Image for Hats```

![Eyes](https://github.com/arpitkarnatak/nft-generator/blob/master/src/paint/eyes/eyes1.png)

```An Image for Eyes```

![Shades](https://github.com/arpitkarnatak/nft-generator/blob/master/src/paint/shades/shades2.png)

```An Image for Shades```

And these images once overlapped generate the following:

![Output](https://github.com/arpitkarnatak/nft-generator/blob/master/src/paint/final_img.png)

There's also a logic for rarity added in shades. You can set the variable `shadesProbability` high if you want the trait to be common, or lower if you want it to be rarer.

## How to use

1. Create Images, lots of images. Images for different traits. And make sure they would align perfectly on top of each other. 
2. Create a logic for generating arts, so you don't get repeating images. Or you can use the inbuilt Random function by javascript too.
3. Use probability for traits you want to be rare.

