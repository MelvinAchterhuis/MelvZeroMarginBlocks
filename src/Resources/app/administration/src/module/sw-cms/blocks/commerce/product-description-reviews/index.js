let config = Shopware.Service('cmsService').getCmsBlockConfigByName('product-description-reviews');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
